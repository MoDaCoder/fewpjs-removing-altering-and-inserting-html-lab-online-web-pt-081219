// Removes id main completely
document.querySelector("main#main").remove();

// Creates New Element inside of a variable
var newHeader = document.createElement("H1");

// Creates new Header Class & Id (id is "victory")
newHeader.class = "victory"
newHeader.id = "victory"

//creates new string inside of header (element/node?)
newHeader.innerHTML = "Mo is the champion of th world. Booyah pizza Party"