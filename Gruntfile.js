/*global module, require*/

module.exports = function (grunt) {
    'use strict';

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            html: {
                files: ['index.html'],
                tasks: ['buildcss', 'concat']
            },
            js: {
                files: ['js/app.js', 'projects.json'],
                tasks: ['jslint', 'uglify', 'concat', 'copy', 'json-minify']
            },
            css: {
                files: ['css/style.less'],
                tasks: ['buildcss']
            }
        },
        /*------*/
        /* HTML */
        /*------*/
        /*
        htmlhint: {
            build: {
                options: {
                    'tag-pair': true, // Force tags to have a closing pair
                    'tagname-lowercase': true, // Force tags to be lowercase
                    'attr-lowercase': true, // Force attribute names to be lowercase
                    'attr-value-double-quotes': false, // Force attributes to have double quotes rather than single
                    'doctype-first': true, // Force the DOCTYPE declaration to come first in the document
                    'spec-char-escape': true, // Force special characters to be escaped
                    'id-unique': true, // Prevent using the same ID multiple times in a document
                    'head-script-disabled': true, // Prevent script tags in the header for performance reasons
                    'style-disabled': false // Prevent style tags
                },
                src: ['index.html']
            }
        },
        */
        /*----*/
        /* JS */
        /*----*/
        //json minifcation
        'json-minify': {
            build: {
                files: 'json/*.json'
            }
        },
        //jslint
        jslint: {
            build: {
            // files to lint
                src: [
                    'js/app.js',
                    'projects.json'
                ],
                // lint options (taken from technical page of Webarchitecture module)
                // https://hci.ecs.soton.ac.uk/wiki/NodejsReferences
                directives: {
                    nomen: true //no dangling '_' errors
                    //node: true,
                    //devel: true,
                    //sloppy: true,
                    //unparam: true, //prevent "unused variable" jslint errors when running jQuery each loops and callback functions
                    //white: false
                    //latedef: false
                }
            }
        },
        //minification
        uglify: {
            build: {
                files: {
                    'js/_app.min.js': ['js/app.js']
                }
            }
        },
        /* package production JS */
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'js/vendor/jquery.js',
                    'js/vendor/mustache/mustache.min.js',
                    'js/vendor/underscore/underscore-min.js',
                    'js/vendor/backbone/backbone.min.js',
                    'js/vendor/foundation/foundation.min.js',
                    'js/vendor/foundation/foundation.magellan.min.js',
                    'js/vendor/foundation/foundation.clearing.min.js',
                    'js/vendor/foundation/foundation.interchange.min.js',
                    'js/_app.min.js'
                ],
                dest: 'js/_prod.js'
            }
        },
        /*------*/
        /* JSON */
        /*------*/
        'copy': {
            build: {
                files: {
                    'json/projects.min.json': 'projects.json'
                }
            }
        },
        /*-----*/
        /* CSS */
        /*-----*/
        less: {
            build: {
                files: {
                    'css/style.css': 'css/style.less'
                }
            }
        },
        cssc: {
            build: {
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors: true,
                    consolidateMediaQueries: true
                },
                files: {
                    'css/style.css': 'css/style.css'
                }
            }
        },
        concat_css: {
            build: {
                src: [
                    // 'css/foundation-icons.css',
                    'css/foundation.min.css',
                    'css/loading.css',
                    'css/animation.css',
                    'css/style.css'
                ],
                dest: 'css/_prod.css'
            }
        },
        cssmin: {
            build: {
                src: 'css/_prod.css',
                dest: 'css/_prod.css'
            }
        }
    });

    grunt.registerTask('default', []);

    grunt.registerTask('build', ['jslint', 'uglify', 'concat', 'copy', 'json-minify', 'buildcss']);

    grunt.registerTask('buildcss',  ['less', 'cssc', 'concat_css', 'cssmin']);

};