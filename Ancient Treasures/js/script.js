
//menu_burger
const menuBurger = document.querySelector('.menu_burger');
const menu = document.querySelector('.menu');
if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		menuBurger.classList.toggle('active');
		menu.classList.toggle('active');
	});
};

//Cart (8 items)
const popapCard = document.querySelector('.card__popap');
const cardPopapClose = document.querySelector('.card__popap_header__close');
const cardPopapLock = document.querySelector('.card');
const wraper = document.querySelector('.wraper');
const container = document.querySelector('.container');
if (cardPopapLock) {
	cardPopapLock.addEventListener("click", function (e) {
		container.classList.toggle('lock');
		wraper.classList.toggle('__popap');
		popapCard.classList.toggle('_action');
	});
};
if (cardPopapClose) {
	cardPopapClose.addEventListener("click", function (e) {
		container.classList.remove('lock');
		wraper.classList.remove('__popap');
		popapCard.classList.remove('_action');
	});
}

//Group 29
const minus = document.querySelector('.btm_primary_regular.minus');
const plus = document.querySelector('.btm_primary_regular.plus');
const accent = document.querySelector('.btm_primary_regular__value');
const quantity = document.querySelector('.quantity');

let a, result;
function p() {
	a = accent.value;
	result = ++a ;
   accent.value = result;

};

function m() {
	if (a > 1) {
		a = accent.value;
		result = --a;
		accent.value = result;

	}
	else {
	a = accent.value;
	result = --a;
	accent.value = '';
};
}

// Slider


$(document).ready(function(){
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  fade:false,
    variableWidth: false,
  adaptiveHeight: false,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  arrows: false,
  variableWidth: false,
  adaptiveHeight: false,
 		 responsive:[
		 { 
		 	breakpoint: 770,
	      settings: {
	      	arrows: true,
	      }
       }

		]	 
});
});

// Choose your length

const arrow = document.querySelector('.technical_part__body_arrow');
const length = document.querySelector('.technical_part__body');
if (length) {
	arrow.addEventListener("click", function (e) {
		arrow.classList.toggle('open');
		length.classList.toggle('open');
	});
};



