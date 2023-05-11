
"use strict";
window.addEventListener("DOMContentLoaded", (event) => {
    /* MENU */
    const LeMenu = document.getElementById("slidebar");
    const CmdMenu = document.getElementById("CmdMenu");
    const CmdCroix = document.getElementById("CmdCroix");
    CmdMenu.addEventListener('click', function () {
        LeMenu.style.display = (LeMenu.style.display == 'flex') ? 'none' : 'flex';

        if (CmdMenu.classList == 'fa-solid fa-bars') {
            CmdMenu.className = 'fa-solid fa-xmark';
            CmdMenu.style = (CmdMenu.style.background = 'background: #fff') ? 'background: rgb(2 200 255)' : 'background: #fff';
        } else {
            CmdMenu.className = 'fa-solid fa-bars';
            CmdMenu.style = (CmdMenu.style.background = 'background: rgb(2 200 255)') ? 'background: #fff' : 'background: rgb(2 200 255)';
        }
    });
    // au chargement de la page
    window.onload = function () {
        // on teste la largeur de la fenêtre
        var ww = window.innerWidth; // en pixels
        LeMenu.style.display = (ww > 1080) ? '' : 'none';
        CmdMenu.style.display = (ww > 1080) ? 'none' : '';
    };
    // au redimensionnement de la fenêtre
    window.onresize = function () {
        // on teste la largeur de la fenêtre
        var ww = window.innerWidth; // en pixels
        LeMenu.style.display = (ww > 1080) ? '' : 'none';
        CmdMenu.style.display = (ww > 1080) ? 'none' : '';
    };

});