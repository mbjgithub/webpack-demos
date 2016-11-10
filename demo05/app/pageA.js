var add=require("./a.js");
var insertDom=require("./c.js");

document.getElementById("pageA").appendChild(insertDom(add(2,6)));