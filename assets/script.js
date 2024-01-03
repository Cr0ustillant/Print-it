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
const Dot0 = document.getElementById("dot0");
const Dot1 = document.getElementById("dot1");
const Dot2 = document.getElementById("dot2");
const Dot3 = document.getElementById("dot3");


arrowRight.onclick = function() {
	index +=1;
	if (index === 4) {index = 0};
	imgSelected.src = "assets/images/slideshow/" + slides[index].image;
	textSelected.innerHTML = slides[index].tagLine;
	for (i=0;i<slides.length;i++) {
		eval('Dot'+i+'.className = "dot"')
	};
	eval('Dot'+index+'.className = "dot dot_selected"');
	console.log(index);
};

arrowLeft.onclick = function() {
	index -=1;
	if (index === -1) {index = 3};
	imgSelected.src = "assets/images/slideshow/" + slides[index].image;
	textSelected.innerHTML = slides[index].tagLine;
	for (i=0;i<slides.length;i++) {
		eval('Dot'+i+'.className = "dot"')
	};
	eval('Dot'+index+'.className = "dot dot_selected"');
	console.log(index);
};

