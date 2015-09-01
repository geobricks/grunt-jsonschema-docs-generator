/*
 * grunt-jsonschema-docs-generator
 * https://github.com/geobricks/grunt-jsonschema-docs-generator
 *
 * Copyright (c) 2015 Guido Barbaglia
 * Licensed under the MIT license.
 */

(function () {

    'use strict';

    /*global module*/
    module.exports = function (grunt) {

        /* Project configuration. */
        grunt.initConfig({

            /* Plugin configuration. */
            jsonschema_docs_generator: {
                custom_options: {
                    options: {
                        base_url: 'http://localhost:8080/faostat-api/v1.0/'
                    }
                }
            }

        });

        /* Actually load this plugin's task(s). */
        grunt.loadTasks('tasks');

        /* Test task. */
        grunt.registerTask('default', ['jsonschema_docs_generator']);

    };

}());