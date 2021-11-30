
/********  Variablen **********/

const btn = document.getElementById("trigBtn");
let appStatus = true
// const btn = document.body.children[0];


// output(btn);


/********  Event-Listener **********/
// wechselschalter bei click auf den butten
btn.addEventListener("click",toggleAppStatus);
window.addEventListener("load",toggleAppStatus)


/********  Business-Logic | Toggle **********/

function toggleAppStatus() {
    appStatus = !appStatus
    updateView();
}


/********  Änderung in View-Schicht **********/


function updateView() {
    if (appStatus) {
        switchClassName("night")
        switchBtnTxt("day")
    } else {
        switchClassName("day")
        switchBtnTxt("night")
    }
}





// switchClassName("night");
// switchClassName("day");

function switchClassName(modeStr) {
    document.body.className = modeStr
    document.body.children[0].className = modeStr
    document.body.children[1].className = modeStr
}

// Modul: Umschaltung BtnTxt | Test:
// switchBtnTxt("night");
// switchBtnTxt("day");
function switchBtnTxt(modeStr) {
    btn.innerHTML = modeStr;
}




/* Tools */
function output(outputData) {
    console.log(outputData);
}