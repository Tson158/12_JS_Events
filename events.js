
/********  Variablen **********/

// const btn = document.getElementById("trigBtn");

const btn = document.body.children[0];


// output(btn);


/********  Event-Listener **********/

btn.addEventListener("click",onClick);
btn.addEventListener("mouseenter", onRollIn);
btn.addEventListener("mouseleave", onRollOut);

function onClick() {
    output("hey");
}

function onRollIn() {
    output("1");
}

function onRollOut() {
    output("2");
}





/********  Business-Logic | Toggle **********/



/********  Änderung in View-Schicht **********/



/* Tools */
function output(outputData) {
    console.log(outputData);
}