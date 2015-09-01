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

        /* Plugin entry point. */
        grunt.registerMultiTask('jsonschema_docs_generator', 'Grunt plugin to generate API documentation for REST web services described by a valid JSON Schema.', function () {

            /* Merge options. */
            var options = this.options({});

            /* Make the options global. */
            grunt.option('base_url', options.base_url);

            /* Specify the next task to run. */
            grunt.task.run('fetch_json_schema');

        });

        /* Curl task. */
        grunt.registerTask('fetch_json_schema', 'Fetch JSON Schema from remote URL and store it in a local file.', function () {

            /* Configure Curl and download the JSON Schema. */
            grunt.initConfig({
                curl: {
                    'resources/json/schema.json': grunt.option('base_url')
                }
            });
            grunt.loadNpmTasks('grunt-curl');
            grunt.task.run('curl');

            /* Specify the next task to run. */
            //grunt.task.run('generate_client');

        });

    };

}());
