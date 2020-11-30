var btn = document.querySelector("#btn");
var txtIn = document.querySelector("#txtInput");
var opt = document.querySelector("#opt");
var serverURL;
function translateURL(text){
	return serverURL + "?" + "text= " + text +" "; 
}

function errorHandler(error){
	console.log("error occured "+error);
	alert("Server is down! Please try after some time.");
}

function btnHandler(){
	var choice = opt.options[opt.selectedIndex].value;
	if(choice=="EtoM"){
		serverURL = "https://api.funtranslations.com/translate/morse.json";
	}
	else{
		serverURL = "https://api.funtranslations.com/translate/morse2english.json"
	}

	fetch(translateURL(txtIn.value)).then(response => response.json()).then(json=>{
	divOut.value=json.contents.translated;
	}).catch(errorHandler);
}

btn.addEventListener("click",btnHandler);