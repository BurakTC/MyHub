"use strict";
/**
 * Displays each character of the level given in parameter
 * @param {number} level -Corresponds to the level number in the levels array(0 -> 6 included)
 */
function buildLevel(level) {
        var laMap = levels[level].map;


        for (let i = 0; i < laMap.length; i++) {

                var divLigne = document.createElement('div');
                $("#world").append(divLigne);




                for (var c of laMap[i]) {
                        var divCase = document.createElement('div');

                        $(divLigne).append(divCase);
                        $(divCase).addClass('square');
                        if (c == " ") {
                                $(divCase).addClass('empty');
                        }
                       // if (c == '┌' || c == '─' || c == '┐' || c == '│' || c == '└' || c == '┘' || c == '═' || c == '╷' || c == "├" ||c=='┬' || c== '╶'||c=='┤') {
                       //         $(divCase).addClass('wall');
                      //  }
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

                // switch (laMap[i].charAt(j)) {

                //         case 'x':
                //                 $(divCase).addClass('target');
                //                 break;
                //         case '#':
                //                 $(divCase).addClass('box');
                //                 break;
                //         case " ":
                //                 $(divCase).addClass('empty');
                //                 break;
                //         case '┌':
                //                 $(divCase).addClass('wall');
                //                 break;
                //         case '─':
                //                 $(divCase).addClass('wall');
                //                 break
                //         case '┐':
                //                 $(divCase).addClass('wall');
                //                 break;
                //         case '│':
                //                 $(divCase).addClass('wall');
                //                 break;
                //         case '└':
                //                 $(divCase).addClass('wall');
                //                 break;
                //         case '┘':
                //                 $(divCase).addClass('wall');
                //                 break;
                //         case '═':
                //                 $(divCase).addClass('wall');
                //                 break;
                //         case '╷':
                //                 $(divCase).addClass('wall');
                //                 break
                //         case "├":
                //                 $(divCase).addClass('wall');
                //                 break;
                //         default:
                //                 $(divCase).addClass('player');
                //                 break;
                // }

        }
}




$(document).ready(function () {
        buildLevel;
});
