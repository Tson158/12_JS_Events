
/********  Variablen **********/

const btn = document.getElementById("trigBtn");
// output(btn);


/********  Event-Listener **********/

btn.addEventListener("click",test);

function test() {
    output("hey");
}

/********  Business-Logic | Toggle **********/



/********  Änderung in View-Schicht **********/



/* Tools */
function output(outputData) {
    console.log(outputData);
}