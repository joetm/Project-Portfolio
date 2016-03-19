/*global document, $, Backbone, _, Mustache, localStorage, console*/

var timestamp = new Date().getTime();

//HTML5 local storage
function state_set(id, content) {
    'use strict';
    try {
        console.log('setting:', id, content);
        localStorage.setItem(id, content);
    } catch (ignore) {}
}//state_set
function state_get(id) {
    'use strict';
    try {
        console.log('getting:', id);
        return localStorage.getItem(id);
    } catch (e) {
        return false;
    }
}//state_get
function state_remove(id) {
    'use strict';
    try {
        console.log('removing:', id);
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
        el_current: $('#current_projects'),
        el_past: $('#past_projects'),
        initialize: function () {
            _.bindAll(this, 'loadJSON', 'loadSearch', 'loadTemplate', 'process', 'render');
        },//initialize
        foundation_loaded: false,
        data: [],
        rendered: [],
        filter_events_ready: false,
        num_projects: 0,
        search: [], //holds the search items and the snippet template
        project_filter_count: 0,
        init: function () {
            this.loadJSON();
            this.loadTemplate();
            this.loadSearch();
        },//init
        loadSearch: function () {
            var that = this;
            $.getJSON("./json/search.json", function (d) {
                if (d && d.length) {
                    that.search.items = d;
                } else {
                    that.search.items = [];
                }
                that.trigger('loaded:search');
            });
            $.get('./views/search_snippet.html', function (template) {
                that.search.tpl = template;
                that.trigger('loaded:search');
            });
        },//loadSearch
        loadJSON: function () {
            var that = this;
            $.getJSON("./json/projects.min.json?" + timestamp, function (d) {
                if (d.projects !== undefined) {
                    that.num_projects = 0;
                    if (d.projects.current !== undefined && d.projects.current.length) {
                        d.projects.current = _.map(d.projects.current, function (arr) { arr.project_type = 'current'; return arr; });
                        Array.prototype.push.apply(that.data, d.projects.current);
                        that.num_projects += d.projects.current.length;
                    }
                    if (d.projects.past !== undefined && d.projects.past.length) {
                        d.projects.past = _.map(d.projects.past, function (arr) { arr.project_type = 'past'; return arr; });
                        Array.prototype.push.apply(that.data, d.projects.past);
                        that.num_projects += d.projects.past.length;
                    }
                }
                if (d.intro_text !== undefined && d.intro_text) {
                    $('#intro_text').html(d.intro_text);
                }
                if (d.about !== undefined && d.about) {
                    $('#intro .about').html(d.about);
                }

                that.trigger('loaded:json');
            });
        },//loadJSON
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

            var rendered = [],
                i,
                id_helper = {},
                target = '';

            rendered.current = rendered.past = '';

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
                    this.data[i].hasTechnology = (this.data[i].technology === undefined || !this.data[i].technology ? false : true);

                    //has screenshots?
                    this.data[i].hasImg = (this.data[i].imgs !== undefined && this.data[i].imgs.length >= 1 ? true : false);
                    //console.log(this.data[i].title, this.data[i].hasImg);

                    if (this.data[i].hasImg) {
                        if (this.data[i].imgs.length > 1) {
                            // gallery
                            this.data[i].gallery = this.data[i].imgs;
                        } else {
                            // single screenshot
                            this.data[i].screenshot = this.data[i].imgs;
                        }
                    }

                    //has video?
                    this.data[i].hasVideo = (this.data[i].videos !== undefined && this.data[i].videos.length >= 1 ? true : false);

                    //element id for navigation
                    if (id_helper[this.data[i].idtype] === undefined) {
                        this.data[i].hasId = true;
                        id_helper[this.data[i].idtype] = true; //block this type of section from getting an id again
                    } else {
                        this.data[i].hasId = false;
                    }

                    if (this.data[i].project_type === 'current') {
                        target = 'current';
                    } else {
                        target = 'past';
                    }

                    rendered[target] = rendered[target] + Mustache.render(this.template, this.data[i]);

                    //update the progressbar
                    $('#progressbar-container #progress').width(((i + 1) / this.num_projects * 100) + '%');

                }

            }//for

            this.rendered.past = rendered.past;
            this.rendered.current = rendered.current;

            this.render();

        },//process
        setup_filter_events: function () {

            if (!this.filter_events_ready) {
                this.filter_events_ready = true;
                $('#searchbox #searchitems .filter').on('click', function (e) {
                    e.stopPropagation();

                    //get filter value
                    //var what = $(this).val(),
                    var fields = [];

                    //console.log(what);

                    //get the selected values
                    _.each($('#searchbox #searchitems .filter'), function (element) {
                        if ($(element).prop('checked') === true) {
                            fields.push(element.value);
                        }
                    });

                    //show or hide the intro section
                    //on non-empty search terms array
                    if (fields.length > 0) {
                        //hide the intro
                        $('#intro').hide();
                        $('#intro_text').hide();
                        $('#current').hide();
                        $('#past').hide();
                        //clear the project list
                        $('#current_projects').html('');
                        $('#past_projects').html('');
                    } else {
                        //show all
                        $('#intro, #current').show();
                        $('#current, #past').show();
                    }

                    ps.filter(fields);
                    ps.process();
                    ps.render();

                });//$('.filter').click
            }//if (!this.filter_events_ready)
        },
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

            this.el_current.html(this.rendered.current);
            this.el_past.html(this.rendered.past);

            this.trigger('foundation');

            $('#num_projects').text(this.project_filter_count + ' Projects');

            $('#progressbar-container #progress')
                .width('100%')
                .css('background-color', '#FFFFFF');

        },//render
        render_search: function () {

            var idx = 0,
                data;
            this.search.items = _.map(this.search.items, function (item) {
                idx = idx + 1;
                return {
                    'item': item,
                    'index': idx
                };
            });
            data = {
                'items': this.search.items
            };
            $('#searchbox #searchitems').html(Mustache.render(this.search.tpl, data));

        }//render_search
    });//Projects


    ps = new Projects();

    /* events */
    ps.on("loaded:search", function () {
        if (this.search.tpl !== undefined && this.search.items !== undefined) {
            this.render_search();
            this.setup_filter_events();
        }
    });
    ps.on("loaded:json", function () {
        this.process();
        var pos = $('body').scrollTop();
        //console.info('scrollposition: ' + pos);
        state_set('scrollposition', pos);
        $('.icon-loading').hide();
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
        // console.info('scrollposition: ' + pos);
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