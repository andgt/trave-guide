'use strict'

// Мобильное меню

let navMain = document.querySelector(".main-nav");
let navButton = document.querySelector(".main-nav__button");

navMain.classList.remove("main-nav--no-js");

navButton.addEventListener("click", function() {
	if (navMain.classList.contains("main-nav__closed")) {
		navMain.classList.remove("main-nav__closed");
		navMain.classList.add("main-nav__opened");
	} else {
		navMain.classList.add("main-nav__closed");
		navMain.classList.remove("main-nav__opened");
	}
});

// Кнопка наверх 

let scrollUp = document.querySelector(".footer__scroll-up");
let scrollUpShowed = document.querySelector(".footer__scroll-up-showed");


window.onscroll = function () {
	if (window.pageYOffset > 100) {
		scrollUp.classList.add("footer__scroll-up-showed")
	} else {
		scrollUp.classList.remove("footer__scroll-up-showed");
	}
}