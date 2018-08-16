
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

var film1 =	new OneSectionElement("films", "Harry Potter and the Sorcerer\'s Stone", 2001, "https://www.kinopoisk.ru/film/689/", true, ["summer", 2018]);
// data.push(
	// FILMS
	// film1
	// new OneSectionElement("films", "Harry Potter and the Sorcerer\'s Stone", 2001, "https://www.kinopoisk.ru/film/689/", true, ["summer", 2018]),
// 	new OneSectionElement("films", "Infinity", 1996, "https://www.kinopoisk.ru/film/4145/", true, ["summer", 2018]),
// 	new OneSectionElement("films", "Ready Player One", 2018, "https://www.kinopoisk.ru/film/538225/", true, ["summer", 2018]),
// 	new OneSectionElement("films", "X+Y", 2014, "https://www.kinopoisk.ru/film/794247/", true, ["summer", 2018]),
// 	new OneSectionElement("films", "Pollyanna", 2003, "https://www.kinopoisk.ru/film/pollianna-2003-332348/", true, ["summer", 2018]),
// 	// AUDIOBOOKS
// 	new OneSectionElement("audiobooks", "Stephen William Hawking: A Briefer History of Time", "", "https://audioknigi.club/hoking-kratkaya-istoriya-vremeni-ot-bolshogo-vzryva-do-chernyh-dyr-bigbag", false, ["summer", 2018]),
// 	new OneSectionElement("audiobooks", "Surely You're Joking, Mr. Feynman!", "", "https://book-audio.com/47:feinman-richard-vy-konechno-shutite-mister-feinman", true, ["summer", 2018]),
// 	new OneSectionElement("audiobooks", "Братья Стругацкие: Понедельник начинается в субботу", 1965, "https://audioknigi.club/strugackie-arkadiy-i-boris-ponedelnik-nachinaetsya-v-subbotu", true, ["summer", 2018]),
// 	// COURSES
// 	new OneSectionElement("courses", "The Complete JavaScript Course: Build a Real-World Project", "", "https://coursehunters.net/course/udemy-complete-javascript-course", false, ["summer", 2018]),
// 	// BOOKS
// 	new OneSectionElement("books", "Я. И. Перельман: Математика для любознательных", "", "", false, ["summer", 2018]),
	// );

(function () {
 data.push(film1);
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

