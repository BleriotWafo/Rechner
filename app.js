//variables globales
//elements memoire et ecran
const ecranElt = document.querySelector(".ecran");

window.onload = () => {
	//on écoute les clics sur les touches
	var touches = document.querySelectorAll("button");

	for(var touche of touches){
		touche.addEventListener("click", gererTouches);
	}
}

//cette fonction réagit aux cliques sur les touches
function gererTouches(){
	var touche = this.innerText;
	switch(touche){

		// touche pour effacer
		case "C" :
		   ecranElt.innerText = "";
		   break;
		
		case "=" : 
		      ecranElt.innerText = eval(ecranElt.innerText);
		      break;
		default :
			ecranElt.innerText += touche; 
			break;

	}
}
var li = document.querySelectorAll("li");
