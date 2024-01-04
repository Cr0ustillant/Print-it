const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowRight = document.getElementById("arrow_Right");
const arrowLeft = document.getElementById("arrow_Left");
const imgSelected = document.getElementById("img-selected");
const textSelected = document.getElementById("text");
let index = 0;

const Dots = document.getElementsByClassName("dot");


arrowRight.onclick = function() {

	Dots[index].className="dot";
	//  Fait passer un tableau d'index à "Dots" puis, remplace la class par "dot".
	index +=1;
	// 	On incrémente de +1 à chaque clique.
	if (index === 4) {index = 0};
	imgSelected.src = "assets/images/slideshow/" + slides[index].image;
	// 	On remplace "src" de l'image selectionné par : "le chemin" + "le nom de l'image" par rapport à l'index dans le tableau slides.
	textSelected.innerHTML = slides[index].tagLine;
	// 	On génére/remplace le texte par : le texte dans le tableau slides par rapport à l'index.
	Dots[index].className="dot dot_selected";
	//  Fait passer un tableau d'index à "Dots" puis, remplace les class par "dot dot_selected".
};

arrowLeft.onclick = function() {

	Dots[index].className="dot";
	index -=1;
	if (index === -1) {index = 3};
	imgSelected.src = "assets/images/slideshow/" + slides[index].image;
	textSelected.innerHTML = slides[index].tagLine;
	Dots[index].className="dot dot_selected";
};

