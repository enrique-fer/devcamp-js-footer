/**
 * All of the code used has to follow not only best practices but has to follow
 * the very letter of the JS law, have to have semicolons at the end and kind of 
 * things  
 */
'use strict';

/**
 * Older version of importing
 */
var moment = require('moment');

/**
 * Returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
}