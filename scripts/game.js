"use strict"
/**
 * Displays each character of the level given in parameter
 * @param {number} level -Corresponds to the level number in the levels array(0 -> 6 included)
 */
function buildLevel(level) {
        var laMap = levels[level].map;

        for (var lignes of laMap) {

                var divLigne = document.createElement('div');
                $("#world").append(divLigne);
                $(divLigne).addClass('Lignes')
                for (var c of lignes) {
                        var divCase = document.createElement('div');

                        $(divLigne).append(divCase);
                        $(divCase).addClass('square');

                        if (c == " ") {
                                $(divCase).addClass('empty');
                        }
                        else if (c == '#') {
                                $(divCase).addClass('box');
                        }
                        else if (c == 'x') {
                                $(divCase).addClass('target');
                        }
                        else if (c == '🧍') {
                                $(divCase).addClass('player');
                        }
                        else if (c == '@') {
                                $(divCase).addClass('box');
                                $(divCase).addClass('target');
                        }
                        else {
                                $(divCase).addClass('wall');

                        }
                }
        }
}







$(document).ready(function () {
        buildLevel;
});
