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

                for (let j = 0; j < laMap[i].length; j++) {
                        var divCase = document.createElement('div');
                        $(divLigne).append(divCase);
                        $(divCase).addClass('squares');
                        if(laMap[i].charAt(j)== " "){
                                $(divCase).addClass('empty');
                        }
                        if(laMap[i].charAt(j) =='┌' || laMap[i].charAt(j) =='─' || laMap[i].charAt(j) =='┐' || laMap[i].charAt(j) =='│' || laMap[i].charAt(j) =='└' || laMap[i].charAt(j) =='┘' || laMap[i].charAt(j) =='═'|| laMap[i].charAt(j) =='╷' || "├" ){
                                $(divCase).addClass('wall');
                        }
                        if(laMap[i].charAt(j)=='#'){
                                $(divCase).addClass('box');
                        }
                        if(laMap[i].charAt(j) == 'x'){
                                $(divCase).addClass('target');
                        }
                        if(laMap[i].charAt(j) == '🧍'){
                                $(divCase).addClass('player');
                        }
                }

        }
}



$(document).ready(function () {
        buildLevel;
});
