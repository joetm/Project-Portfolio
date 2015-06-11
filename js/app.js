/*global document, $, Backbone, _, Mustache, localStorage, console, alert*/

var timestamp = new Date().getTime();


//HTML5 local storage
function state_set(id, content) {
    'use strict';
    try {
        localStorage.setItem(id, content);
    } catch (ignore) {}
}//state_set
function state_get(id) {
    'use strict';
    try {
        return localStorage.getItem(id);
    } catch (e) {
        return false;
    }
}//state_get
function state_remove(id) {
    'use strict';
    try {
        localStorage.removeItem(id);
        return true;
    } catch (e) {
        return false;
    }
}//state_remove
function test_get() {
    'use strict';
    var mod = 'modernizr';
    try {
        localStorage.setItem(mod, mod);
        localStorage.removeItem(mod);
        return true;
    } catch (e) {
        return false;
    }
}//test_get



$(function () {
    'use strict';

    var Projects,
        scrollpos,
        ps,
        sb = $('#searchbox');

    $('#search').click(function () {
        sb.toggle();
    });

    Projects = Backbone.Model.extend({
        el: $('#projects'),
        initialize: function () {
            _.bindAll(this, 'loadCSV', 'loadTemplate', 'process', 'render');
        },//initialize
        foundation_loaded: false,
        data: {},
        rendered: '',
        num_projects: 0,
        project_filter_count: 0,
        init: function () {
            this.loadCSV();
            this.loadTemplate();
        },//init
        loadCSV: function () {
            var that = this;
            $.getJSON("./json/projects.min.json?" + timestamp, function (data) {
                if (data.projects !== undefined) {
                    that.data = data.projects;
                    that.num_projects = data.projects.length;
                }
                if (data.intro !== undefined) {
                    $('#current .intro_text').html(data.intro);
                }
                if (data.about !== undefined) {
                    $('#intro .about').html(data.about);
                }

                //console.log(this.data);
                //console.log('num_projects:', that.num_projects);

                that.trigger('loaded:csv');
            });
        },//loadCSV
        loadTemplate: function () {
            var that = this;
            $.get('./views/template.html?' + timestamp, function (template) {
                that.template = template;

                that.trigger('loaded:template');
            });
        },//loadTemplate
        process: function () {

            if (!this.template || !this.data) {
                return; //both events must have been fired
            }
            //console.log(this.data);

            var rendered = '',
                i,
                id_helper = {};

            //reset project count
            this.project_filter_count = 0;

            for (i = 0; i < this.num_projects; i = i + 1) {

                //console.log(this.data[i]);

                //project visibility
                if (this.data[i].visibility === undefined) {
                    this.data[i].visibility = 1;
                }

                if (this.data[i].visibility === 1) {

                    this.project_filter_count = this.project_filter_count + 1;

                    //has technology fields?
                    this.data[i].hasTechnology = (this.data[i].technology === undefined && this.data[i].technology ? false : true);

                    //has screenshots?
                    this.data[i].hasImg = (this.data[i].technology === undefined && this.data[i].technology ? false : true);

                    if (this.data[i].imgs.length >= 1) {
                        this.data[i].hasImg = true;
                        if (this.data[i].imgs.length > 1) {
                            this.data[i].gallery = this.data[i].imgs;
                        } else {
                            this.data[i].screenshot = this.data[i].imgs;
                        }
                    } else {
                        this.data[i].hasImg = false;
                    }

                    //element id for navigation
                    if (id_helper[this.data[i].idtype] === undefined) {
                        this.data[i].hasId = true;
                        id_helper[this.data[i].idtype] = true; //block this type of section from getting an id again
                    } else {
                        this.data[i].hasId = false;
                    }

                    rendered = rendered + Mustache.render(this.template, this.data[i]);

                    //update the progressbar
                    $('#progressbar-container #progress').width(((i + 1) / this.num_projects * 100) + '%');

                }

            }

            //console.log('data:', this.data);

            this.rendered = rendered;

            this.render();

        },//process
        filter: function (fields) {

            var i,
                found = [];

            console.log('Filtering for: ', fields);

            //set the visibility of each project based on the filter
            for (i = 0; i < this.num_projects; i = i + 1) {

                if (fields.length > 0) {

                    if (this.data[i].technology !== undefined && this.data[i].technology) {
                        found = _.intersection(this.data[i].technology, fields);
                        //console.log(i, this.data[i].technology, fields, found, found.length);
                    } else {
                        found = [];
                    }
                    this.data[i].visibility = found.length || 0;

                } else {
                    //all fields were deselected -> show all projects
                    this.data[i].visibility = 1;
                }

            }

            //console.log(this.data);

        },//filter
        render: function () {

            $(this.el).html(this.rendered);

            this.trigger('foundation');

            $('#num_projects').text(this.project_filter_count + ' Projects');

            $('#progressbar-container #progress')
                .width('100%')
                .css('background-color', '#FFFFFF');
        }//render
    });//Projects


    ps = new Projects(); //I do not like this way of declaring in Javascript

    ps.on("loaded:csv", function () {
        this.process();
    });
    ps.on("loaded:template", function () {
        this.process();
    });
    ps.on("foundation", function () {
        if (!this.foundation_loaded) {
            this.foundation_loaded = true;
            //console.log('loading foundation');
            $(document).foundation();
        }
    });

    ps.init();

    //checkbox filters
    $('.filter').click(function () {

        var fields = [];

        //get the selected values
        _.each($('.filter'), function (element) {
            if ($(element).prop('checked') === true) {
                fields.push(element.value);
            }
        });

        $(ps.el).html('');

        //show or hide the intro section and current projects
        //non-empty search terms array
        if (fields.length > 0) {
            $('#intro, #current').hide();
        } else {
            //show all
            $('#intro, #current').show();
        }

        ps.filter(fields);
        ps.process();
        ps.render();

    });//$('.filter').click


    //get the last modification date and display it on the site
    $.ajax({
        type: "GET",
        url: "./last-update.php"
    })
        .done(function (msg) {
            if (!msg) {
                //something went wrong - hide the last update div
                $('#last-update').hide();
            } else {
                $('#modification-date').text(' ' + msg);
            }
        });

    $('#intro #contact_link').click(function (e) {
        e.preventDefault();

        //scroll to element
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 400);

        //highlight the element
        $('#footer #contact div').css('background-color', '#FFFBF0');

        //$('#footer #contact div').animate({
        //    backgroundColor: '#FFFFFF'
        //}, 1500);

    });

    //sometimes, the foundation image gallery does not work
    //instead of the gallery, the image is loaded.
    //in that case, when the back button is pressed, we need to go
    //back to the position on the page that we were on.
    //The following code scrolls to that position.

    //if thumbnail/picture is clicked, save the scroll position
    $('#projects').on('click', "img", function () {
        //e.preventDefault();
        //var nav_height = $('nav').height();
        var pos = $('body').scrollTop();
        //alert('scrollposition: ' + pos);
        state_set('scrollposition', pos);
    });

    //on page load, check if we have a scrollposition
    //scroll to it if it exists
    //then delete the scrollposition
    scrollpos = state_get('scrollposition');
    if (scrollpos) {
        $('html, body').animate({
            scrollTop: scrollpos
        }, 500);
        scrollpos = null;
        state_remove('scrollposition');
    }//scrollpos

});