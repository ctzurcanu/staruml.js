/*
 * Copyright (c) 2013-2014 Minkyu Lee. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of Minkyu Lee. The intellectual and technical concepts
 * contained herein are proprietary to Minkyu Lee and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Minkyu Lee (niklaus.lee@gmail.com).
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, regexp: true */
/*global define, $, _, window, appshell, staruml */

define(function (require, exports, module) {
    "use strict";

    var AppInit           = app.getModule("utils/AppInit"),
        Core              = app.getModule("core/Core"),
        PreferenceManager = app.getModule("preference/PreferenceManager");

    var preferenceId = "javascript";

    var javaScriptPreferences = {
        "javascript.gen": {
            text: "JavaScript Code Generation",
            type: "Section"
        },
        "javascript.gen.jsDoc": {
            text: "JSDoc",
            description: "Generate JSDoc comments.",
            type: "Check",
            default: true
        },
        "javascript.gen.useTab": {
            text: "Use Tab",
            description: "Use Tab for indentation instead of spaces.",
            type: "Check",
            default: false
        },
        "javascript.gen.indentSpaces": {
            text: "Indent Spaces",
            description: "Number of spaces for indentation.",
            type: "Number",
            default: 4
        },
        "javascript.rev": {
            text: "JavaScript Reverse Engineering",
            type: "Section"
        },
        "javascript.rev.association": {
            text: "Use Association",
            description: "Reverse JavaScript Fields as UML Associations.",
            type: "Check",
            default: true
        },
        "javascript.rev.publicOnly": {
            text: "Public Only",
            description: "Reverse public members only.",
            type: "Check",
            default: false
        },
        "javascript.rev.typeHierarchy": {
            text: "Type Hierarchy Diagram",
            description: "Create a type hierarchy diagram for all classes and interfaces",
            type: "Check",
            default: true
        },
        "javascript.rev.packageOverview": {
            text: "Package Overview Diagram",
            description: "Create overview diagram for each package",
            type: "Check",
            default: true
        },
        "javascript.rev.packageStructure": {
            text: "Package Structure Diagram",
            description: "Create a package structure diagram for all packages",
            type: "Check",
            default: true
        }
    };

    function getId() {
        return preferenceId;
    }

    function getGenOptions() {
        return {
            JSDoc       : PreferenceManager.get("javascript.gen.jsDoc"),
            useTab        : PreferenceManager.get("javascript.gen.useTab"),
            indentSpaces  : PreferenceManager.get("javascript.gen.indentSpaces")
        };
    }

    function getRevOptions() {
        return {
            association      : PreferenceManager.get("javascript.rev.association"),
            publicOnly       : PreferenceManager.get("javascript.rev.publicOnly"),
            typeHierarchy    : PreferenceManager.get("javascript.rev.typeHierarchy"),
            packageOverview  : PreferenceManager.get("javascript.rev.packageOverview"),
            packageStructure : PreferenceManager.get("javascript.rev.packageStructure")
        };
    }

    AppInit.htmlReady(function () {
        PreferenceManager.register(preferenceId, "JavaScript", javaScriptPreferences);
    });

    exports.getId         = getId;
    exports.getGenOptions = getGenOptions;
    exports.getRevOptions = getRevOptions;

});
