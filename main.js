
var content_films = document.querySelector(".content-films"),
	content_audiobooks = document.querySelector(".content-audiobooks"),
	content_courses = document.querySelector(".content-courses"),
	content_books = document.querySelector(".content-books");

var data = [];

var OneSectionElement = function(type, name, year, link, done, period) {
	this.type = type;
	this.name = name;
	this.year = year;
	this.link = link;
	this.done = done;
	this.period = period;
}

// FILMS
var film6 =	new OneSectionElement("films", "Я и другие", 1971, "https://www.youtube.com/watch?v=_LYe58b-3HM&t=626s", true, ["summer", 2018]);
var film5 =	new OneSectionElement("films", "Harry Potter and the Sorcerer\'s Stone", 2001, "https://www.kinopoisk.ru/film/689/", true, ["summer", 2018]);
var film4 = new OneSectionElement("films", "Infinity", 1996, "https://www.kinopoisk.ru/film/4145/", true, ["summer", 2018]);
var film3 = new OneSectionElement("films", "Ready Player One", 2018, "https://www.kinopoisk.ru/film/538225/", true, ["summer", 2018]);
var film2 = new OneSectionElement("films", "X+Y", 2014, "https://www.kinopoisk.ru/film/794247/", true, ["summer", 2018]);
var film1 = new OneSectionElement("films", "Pollyanna", 2003, "https://www.kinopoisk.ru/film/pollianna-2003-332348/", true, ["summer", 2018]);
// AUDIOBOOKS
var audiobooks3 = new OneSectionElement("audiobooks", "Stephen William Hawking: A Briefer History of Time", "", "https://audioknigi.club/hoking-kratkaya-istoriya-vremeni-ot-bolshogo-vzryva-do-chernyh-dyr-bigbag", false, ["summer", 2018]);
var audiobooks2 = new OneSectionElement("audiobooks", "Surely You're Joking, Mr. Feynman!", "", "https://book-audio.com/47:feinman-richard-vy-konechno-shutite-mister-feinman", true, ["summer", 2018]);
var audiobooks1 = new OneSectionElement("audiobooks", "Братья Стругацкие: Понедельник начинается в субботу", 1965, "https://audioknigi.club/strugackie-arkadiy-i-boris-ponedelnik-nachinaetsya-v-subbotu", true, ["summer", 2018]);
// COURSES
var courses2 = new OneSectionElement("courses", "English Galaxy", "", "https://www.youtube.com/playlist?list=PLTj1fjYSNC_rtCsA7tpZ-uQ3QH50E8HxW", false, ["summer", 2018]);
var courses1 = new OneSectionElement("courses", "The Complete JavaScript Course: Build a Real-World Project", "", "https://coursehunters.net/course/udemy-complete-javascript-course", false, ["summer", 2018]);
// BOOKS
var books2 = new OneSectionElement("books", "Барбара Оакли: Думай как математик", 2015, "", false, ["summer", 2018]);
var books1 = new OneSectionElement("books", "Я. И. Перельман: Математика для любознательных", "", "", false, ["summer", 2018]);

// Fix for Mobile
(function () {
	data.push(
		film6, film5, film4, film3,film2, film1,
		audiobooks3, audiobooks2, audiobooks1,
		courses2, courses1,
		books2, books1  
	);
})()

for (var i = 0; i < data.length; i++) {

	var name = data[i].name;
	var year = data[i].year ? "<span class='year'>" + data[i].year + "</span>" : "";
	var link = data[i].link ? data[i].link : "#";
	var done = data[i].done ? "completed" : "not-completed";

	// Компануем в один параграф 
	var temp = "<p class='content-element " + done + "'><a href='"+ link + "'>" + name + "</a>" + year + "</p>";

	// Распределение по разделам
	if (data[i].type == "films") {
		content_films.innerHTML += temp;
	} else if (data[i].type == "audiobooks") {
		content_audiobooks.innerHTML += temp;
	} else if (data[i].type == "courses") {
		content_courses.innerHTML += temp;
	} else {
		content_books.innerHTML += temp;
	}
}

	// alert("test");

