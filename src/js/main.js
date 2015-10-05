/*global require, document, JSONEditor*/
require.config({

    baseUrl: 'js/libs',

    paths: {

        schema: '../../json',
        jsonEditor: 'http://fenixrepo.fao.org/cdn/js/json-editor/0.7.22/jsoneditor.min'

    },

    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        jsonEditor: {
            deps: ['jquery', 'bootstrap']
        }
    }

});

require(['jquery', 'text!schema/example.json', 'jsonEditor'], function ($, example) {

    'use strict';

    example = $.parseJSON(example);
    console.debug(example);

    var editor_config = {
        theme: 'bootstrap3',
        iconlib: 'fontawesome4',
        disable_edit_json: true,
        disable_properties: true,
        collapsed: true,
        disable_array_add: true,
        disable_array_delete: true,
        disable_array_reorder: true,
        disable_collapse: true,
        remove_empty_properties: false,
        expand_height: true,
        schema: example
    };

    console.debug(editor_config);
    console.debug(JSONEditor);
    var editor = new JSONEditor(document.getElementById('jsoneditor_domains'), editor_config);

    /* remove title */
    $($('#jsoneditor_domains div h3 span')[0]).remove();
    $($('#jsoneditor_domains div h3 span')[0]).remove();

});