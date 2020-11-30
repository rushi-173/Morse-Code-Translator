var btn = document.querySelector("#btn");
var txtIn = document.querySelector("#txtInput");
var choice = document.querySelector("#opt");

btn.addEventListener("click",function btnHandler(){
	console.log(choice.options[choice.selectedIndex].value);
})