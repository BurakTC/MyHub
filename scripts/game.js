"use strict";
/**
 * Displays each character of the level given in parameter
 * @param {number} level -Corresponds to the level number in the levels array(0 -> 6 included)
 */
function buildLevel(level) {
        var laMap = levels[level].map;
        for (let i = 0; i < laMap.length; i++) {
                $("#world").addClass("square");

                for (let j = 0; j < laMap[i].length; j++) {
                        if(laMap[i].charAt(j)==" "){}

                }

        }
}



$(document).ready(function () {
        buildLevel;
});



