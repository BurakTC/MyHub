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
                                $(divCase).addClass('empty');
                        }
                        else if (c == 'x') {
                                $(divCase).addClass('target');
                        }
                        else if (c == '🧍') {

                                $(divCase).addClass('empty');
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
        let j = 0;

        for (let lignes of laMap.children()) {
                j = 0;
                for (let cases of $(lignes).children()) {

                        if (cases.classList.contains("player")) {
                                let position = {
                                        x: i,
                                        y: j
                                }
                                return position;
                        }
                        j = j + 1;
                } i = i + 1;
        }
}


/**
 * @param {{ x: any; y: any; }} position
 */ //Donner un objet en parametre ex: -> getSquareAt({x:5,y:6})
function getSquareAt(position) {
        let laMap = $("#world");
        var ligne = laMap.children().eq(position.x);

        return $(ligne).children().eq(position.y);
}


function move() {

        window.onkeydown = function (e) {

                let playerpos = getPlayerPosition();

                var key = e.keyCode || e.which;
                switch (key) {
                        case 37:
                                //-Move left
                                let moveLeft = {
                                        x: playerpos.x,
                                        y: playerpos.y - 1
                                }
                                let leftAgain = {
                                        x: moveLeft.x,
                                        y: moveLeft.y - 1
                                }

                                if (!($(getSquareAt(moveLeft)).hasClass('wall'))) {
                                        if ($(getSquareAt(moveLeft)).hasClass('box')) {
                                                if (!($(getSquareAt(leftAgain)).hasClass('box')) && !$(getSquareAt(leftAgain)).hasClass('wall')) {
                                                        getSquareAt(moveLeft).removeClass('box');
                                                        getSquareAt(leftAgain).addClass('box');

                                                        getSquareAt(moveLeft).addClass('player');
                                                        getSquareAt(playerpos).removeClass('player');
                                                        incrMoves();
                                                }
                                        }
                                        else {
                                                getSquareAt(moveLeft).addClass('player');
                                                getSquareAt(playerpos).removeClass('player');
                                                incrMoves();
                                        }
                                }
                                break;
                        case 39:
                                //-Move right
                                let moveRight = {
                                        x: playerpos.x,
                                        y: playerpos.y + 1
                                }

                                let rightAgain = {
                                        x: moveRight.x,
                                        y: moveRight.y + 1
                                }
                                if (!($(getSquareAt(moveRight)).hasClass('wall'))) {

                                        if ($(getSquareAt(moveRight)).hasClass('box')) {
                                                if (!($(getSquareAt(rightAgain)).hasClass('box')) && !$(getSquareAt(rightAgain)).hasClass('wall')) {
                                                        getSquareAt(moveRight).removeClass('box');
                                                        getSquareAt(rightAgain).addClass('box');

                                                        getSquareAt(moveRight).addClass('player');
                                                        getSquareAt(playerpos).removeClass('player');
                                                        incrMoves();
                                                }
                                        }
                                        else {
                                                getSquareAt(moveRight).addClass('player');
                                                getSquareAt(playerpos).removeClass('player');
                                                incrMoves();
                                        }
                                }
                                break;

                        case 38:
                                //-Move up
                                let moveUp = {
                                        x: playerpos.x - 1,
                                        y: playerpos.y
                                }
                                let upAgain = {
                                        x: moveUp.x - 1,
                                        y: moveUp.y
                                }
                                if (!($(getSquareAt(moveUp)).hasClass('wall'))) {

                                        if ($(getSquareAt(moveUp)).hasClass('box')) {
                                                if (!($(getSquareAt(upAgain)).hasClass('box')) && !$(getSquareAt(upAgain)).hasClass('wall')) {
                                                        getSquareAt(moveUp).removeClass('box');
                                                        getSquareAt(upAgain).addClass('box');

                                                        getSquareAt(moveUp).addClass('player');
                                                        getSquareAt(playerpos).removeClass('player');
                                                        incrMoves();
                                                }
                                        }
                                        else {
                                                getSquareAt(moveUp).addClass('player');
                                                getSquareAt(playerpos).removeClass('player');
                                                incrMoves();
                                        }
                                }

                                break;
                        case 40:
                                //-Move down
                                let moveDown = {
                                        x: playerpos.x + 1,
                                        y: playerpos.y
                                }
                                let downAgain = {
                                        x: moveDown.x + 1,
                                        y: moveDown.y
                                }
                                if (!($(getSquareAt(moveDown)).hasClass('wall'))) {

                                        if ($(getSquareAt(moveDown)).hasClass('box')) {
                                                if (!($(getSquareAt(downAgain)).hasClass('box')) && !$(getSquareAt(downAgain)).hasClass('wall')) {
                                                        getSquareAt(moveDown).removeClass('box');
                                                        getSquareAt(downAgain).addClass('box');

                                                        getSquareAt(moveDown).addClass('player');
                                                        getSquareAt(playerpos).removeClass('player');
                                                        incrMoves();
                                                }
                                        }
                                        else {
                                                getSquareAt(moveDown).addClass('player');
                                                getSquareAt(playerpos).removeClass('player');
                                                incrMoves();
                                        }
                                }

                                break;
                        default:
                                break;
                }
        }
};

var compteur = 0;
function incrMoves() {
        compteur++;
        $("#cpt").text(compteur);
}


function allOnTarget() {
        let alltarget = false;
        for (let elem of $('.target')) {
                if (elem.classList.contains('box')) {
                        alltarget = true;
                }
                else {
                        return false;
                }
        }
        return alltarget;
}

let niv = 0
function initLevel() {
        buildLevel(niv);
        compteur = 0;
        niv++
}


function finishLevel() {
        if (allOnTarget() == true) {
                $(window).keydown(function (evt) {
                        if (evt.which == 32) {
                                initLevel();
                        }
                }

                )
        }
}




$(document).ready(function () {

        initLevel();
        move();
        finishLevel();

});