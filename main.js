"use strict";

let content_films = document.querySelector(".content-films"),
	content_audiobooks = document.querySelector(".content-audiobooks"),
	content_courses = document.querySelector(".content-courses"),
	content_books = document.querySelector(".content-books");



for (let i = 0; i < data.length; i++) {

	let name = data[i].name;
	let year = data[i].year ? `<span class='year'>${data[i].year}</span>` : "";
	let link = data[i].link ? data[i].link : "#";
	let progress = data[i].progress;

	// Компануем в один параграф 
	let temp = `<p class='content-element ${progress}'><a href='${link}'>${name}</a>${year}</p>`;

	// Распределение по разделам
	if (data[i].type == "film") {
		content_films.innerHTML += temp;
	} else if (data[i].type == "audiobook") {
		content_audiobooks.innerHTML += temp;
	} else if (data[i].type == "course") {
		content_courses.innerHTML += temp;
	} else {
		content_books.innerHTML += temp;
	}
}

// TEST
// AJAX
let greeting = document.getElementById('greeting');
greeting.addEventListener('click', load);

function load() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'greeting.txt', true);

	xhr.onload = function() {
		if (this.status == 200) {
			greeting.innerHTML = this.responseText;		
		}
	}
	xhr.send();
}

// Module Pattern
let DataModule = (function(){
	let data = [];

	return {
		add: function(element) {
			data.push(element);
		},
		show: function() {
			return data;
		}
	}
}());

