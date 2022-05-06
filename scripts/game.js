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

            switch (c) {
                case " ":
                    $(divCase).addClass('empty');
                    break;
                case '#':
                    $(divCase).addClass('box');
                    $(divCase).addClass('empty');
                    break;
                case 'x':
                    $(divCase).addClass('target');
                    break;
                case '🧍':
                    $(divCase).addClass('empty');
                    $(divCase).addClass('player');
                    break;
                case '@':
                    $(divCase).addClass('box');
                    $(divCase).addClass('target');
                    break;
                default:
                    $(divCase).addClass('wall');
                    break;

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


class State {

    #playerPos;
    #boxpos;

    /**
    * @param {{x:number; y: number}} playerPos 
    * @param {{x:number; y: number}} boxPos
    */
    constructor(playerPos, boxPos) {
        this.#playerPos = playerPos;
        this.#boxpos = boxPos;
    }

    get playerPosition() {
        return this.#playerPos;
    }
    get boxPosition() {
        return this.#boxpos;
    }
}

let states = new Array();
let newboxpos=new Array();
function move() {
    window.onkeydown = function (e) {

        let playerpos = getPlayerPosition();

        var key = e.keyCode;
        let move;
        let move2;
        if (playerpos) {   //pour enlever les erreurs de soulignements(possibly undefined)
            switch (key) {
                case 37:
                    move = {
                        x: playerpos.x,
                        y: playerpos.y - 1
                    }
                    move2 = {
                        x: move.x,
                        y: move.y - 1
                    }
                    break;
                case 39:
                    move = {
                        x: playerpos.x,
                        y: playerpos.y + 1
                    }
                    move2 = {
                        x: move.x,
                        y: move.y + 1
                    }
                    break;
                case 40:
                    move = {
                        x: playerpos.x + 1,
                        y: playerpos.y
                    }
                    move2 = {
                        x: move.x + 1,
                        y: move.y
                    }
                    break;
                case 38:
                    move = {
                        x: playerpos.x - 1,
                        y: playerpos.y
                    }
                    move2 = {
                        x: move.x - 1,
                        y: move.y
                    }
                    break;
            }
        }


        if (allOnTarget() == false) {
            if (move && playerpos && move2) {//sert juste à enlever les erreurs et soulignements(possibly undefined)
                if (!($(getSquareAt(move)).hasClass('wall'))) {
                    if ($(getSquareAt(move)).hasClass('box')) {
                        if (!($(getSquareAt(move2)).hasClass('box')) && !$(getSquareAt(move2)).hasClass('wall')) {
                            getSquareAt(move).removeClass('box');
                            getSquareAt(move2).addClass('box');

                            getSquareAt(move).addClass('player');
                            getSquareAt(playerpos).removeClass('player');
                            incrMoves();
                            states.push(new State({ x: playerpos?.x, y: playerpos?.y }, { x: move?.x, y: move?.y }));
                            newboxpos.push(move2);

                            if (allOnTarget()) {
                                $("#texte").text('Félicitations, vous avez terminé le niveau ' + niv + ' , pour passer au suivant appuyez sur espace !');
                            }
                        }
                    }

                    else {
                        getSquareAt(move).addClass('player');
                        getSquareAt(playerpos).removeClass('player');
                        incrMoves();
                        if (allOnTarget()) {
                            $("#texte").text('Félicitations, vous avez terminé le niveau ' + niv + ' , pour passer au suivant appuyez sur espace !');
                        }
                    }
                }
            }
        }

    }
};

var compteur = 0;
function incrMoves() {
    compteur++;
    $("#cpt").text(compteur);
    $("#niv").text(niv);
}
function decrMoves(){
    compteur--;
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

let niv = 0;
function initLevel() {
    compteur = 0;
    states=[];

    $("#cpt").text(compteur);
    buildLevel(niv);
    $("#niv").text(niv + 1);
    niv++
}


function finishLevel() {
    if (allOnTarget()) {
        $("#world").empty()
        if (niv == 7) {
            $("#world").empty();
            $("#texte").text("Félicitations , vous avez terminé le jeu, bien joué !");
        }
        else {
            initLevel();
            $("#texte").text(' ');

        }
    }
}

function restart() {
    $("#restart").click(function () {
        $("#world").empty()
        niv--;
        initLevel();
    })
}


$(document).ready(function () {

    initLevel();
    move();

    $(window).keypress(function (e) {
        if (e.key === ' ') {
            finishLevel();
        }

    });
    restart();

    $('#aide').click(function () {
        $('.modale').show();
    })
    $('#fermer').click(function () {
        $('.modale').hide();
    })

    $('#annuler').click(function () {
        if (states.length > 0) {      // pour eviter l'erreur en cas d appui sans faire de mouvement
            let lastState = states.pop();
            let lastPlayerpos = lastState.playerPosition;
            let lastBoxPos = lastState.boxPosition;
            let boxpos = newboxpos.pop()

            getSquareAt(getPlayerPosition()).removeClass('player');
            getSquareAt(lastPlayerpos).addClass('player');

            getSquareAt(boxpos).removeClass('box')
            getSquareAt(lastBoxPos).addClass('box');
       
            decrMoves()

        }


    })

})