"use strict"
let films = [
	{
		name: "Harry Potter and the Sorcerer\'s Stone", 
		year: 2001, 
		link: "https://www.kinopoisk.ru/film/689/",
		done: true
	},
	{
		name: "Infinity", 
		year: 1996, 
		link: "https://www.kinopoisk.ru/film/4145/",
		done: true
	},
	{
		name: "Ready Player One", 
		year: 2018, 
		link: "https://www.kinopoisk.ru/film/538225/",
		done: true
	},
	{
		name: "X+Y", 
		year: 2014, 
		link: "https://www.kinopoisk.ru/film/794247/",
		done: true
	},
	{
		name: "Pollyanna", 
		year: 2003, 
		link: "https://www.kinopoisk.ru/film/pollianna-2003-332348/",
		done: true
	} 
];

let audiobooks = [
	{
		name: "Stephen William Hawking: A Briefer History of Time", 
		year: "", 
		link: "https://audioknigi.club/hoking-kratkaya-istoriya-vremeni-ot-bolshogo-vzryva-do-chernyh-dyr-bigbag",
		done: false
	},
	{
		name: "Surely You're Joking, Mr. Feynman!",
		year: "",  
		link: "https://book-audio.com/47:feinman-richard-vy-konechno-shutite-mister-feinman",
		done: true
	},
	{
		name: "Братья Стругацкие: Понедельник начинается в субботу",
		year: "1965",
		link: "https://audioknigi.club/strugackie-arkadiy-i-boris-ponedelnik-nachinaetsya-v-subbotu",
		done: true
	}
];

let courses = [
	{
		name: "The Complete JavaScript Course: Build a Real-World Project", 
		year: "", 
		link: "https://coursehunters.net/course/udemy-complete-javascript-course",
		done: false
	}
];

let books = [
	{
		name: "Я. И. Перельман: Математика для любознательных",
		year: "", 
		link: "", 
		done: false
	}
];

function output_content (from, to) {
	let temp = "";
	for (let i = 0; i < from.length; i++) {
		let name = from[i].name;
		let year = from[i].year ? "<span class='year'>" + from[i].year + "</span>" : "";
		let link = from[i].link ? from[i].link : "#";
		let done = from[i].done ? "completed" : "not-completed";
		temp += "<p class='content-element " + done + "'><a href='"+ link + "'>" + name + "</a>" + year + "</p>";
	}
	to.innerHTML = temp;
}

var content_films = document.querySelector(".content-films"),
	content_audiobooks = document.querySelector(".content-audiobooks"),
	content_courses = document.querySelector(".content-courses"),
	content_books = document.querySelector(".content-books");
var content = [[films, content_films], [audiobooks,content_audiobooks], [courses, content_courses], [books, content_books]];

for (let i = 0; i < content.length; i++) {
	output_content(content[i][0], content[i][1]);
}