"use strict"
/**
 * Displays each character of the level given in parameter
 * @param {number} level -Corresponds to the level number in the levels array(0 -> 6 included)
 */
function buildLevel(level) {
        var laMap = levels[level].map;


        for (var lignes of laMap) {  //Creation des lignes

                var divLigne = document.createElement('div');
                $("#world").append(divLigne);
                $(divLigne).addClass('Lignes')


                for (var c of lignes) {  //Creation des cases



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




function getPlayerPosition() {
        let laMap = $("#world");
        let i = 0;
        for (let lignes of laMap.children()) {
                let j = 0;
                for (let cases of $(lignes).children()) {
                        let position = {
                                x: i,
                                y: j
                        }
                        if (cases.classList.contains("player")) {
                                console.log(position);
                        }
                        j = j + 1;
                }
                i = i + 1;
        }
}

/**
 * @param {{ x: any; y: any; }} position
 */ //Donner un objet en parametre ex: -> getSquareAt({x:5,y:6})
function getSquareAt(position) {
        let laMap = $("#world");
        var ligne = laMap.children().eq(position.x);

        var square = $(ligne).children().eq(position.y);
        console.log(square)
        if (square.hasClass("player")) {
                console.log("Le joueur");
        }
        if (square.hasClass("box")) {
                console.log("Une boite");
        }
        if (square.hasClass("wall")) {
                console.log("Un mur");
        }
        if (square.hasClass("empty")) {
                console.log("Case libre");
        }
        if (square.hasClass("target")) {
                console.log("Une cible");
        }
        if (square.hasClass("box")&&square.hasClass("target")) {
                console.log("Une boite sur une cible");
        }

}




$(document).ready(function () {
        buildLevel;
});
