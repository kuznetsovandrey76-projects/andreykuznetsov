let content_films = document.querySelector(".content-films"),
	content_audiobooks = document.querySelector(".content-audiobooks"),
	content_courses = document.querySelector(".content-courses"),
	content_books = document.querySelector(".content-books");

let data = [
// { id: , type: '', year: , link: '', progress: '', finishYear: 2018, finishMonth: 8, name: '' },
{ id: 15, type: 'book', year: '', link: '', progress: 'stop', 
	finishYear: 2018, finishMonth: 8, name: 'Я. И. Перельман: Математика для любознательных' },
{ id: 14, type: 'book', year: 2015, link: '', progress: 'in-progress',
	 finishYear: 2018, finishMonth: 8, name: 'Барбара Оакли: Думай как математик' },
{ id: 13, type: 'course', year: '', link: 'https://clck.ru/EBqcT', progress: 'in-progress', 
	finishYear: 2018, finishMonth: 8, name: 'English Galaxy' },
{ id: 12, type: 'course', year: '', link: 'https://clck.ru/EBqbQ', progress: 'stop', 
	finishYear: 2018, finishMonth: 8, name: 'The Complete JavaScript Course: Build a Real-World Project' },
{ id: 11, type: 'audiobook', year: 1965, link: 'https://clck.ru/EBqZA', progress: 'done', 
	finishYear: 2018, finishMonth: 8, name: 'Братья Стругацкие: Понедельник начинается в субботу' },
{ id: 10, type: 'audiobook', year: '', link: 'https://clck.ru/EBqYF', progress: 'done', 
	finishYear: 2018, finishMonth: 8, name: 'Surely You\'re Joking, Mr. Feynman!' },
{ id: 9, type: 'audiobook', year: '', link: 'https://clck.ru/EBqWB', progress: 'stop', 
	finishYear: 2018, finishMonth: 8, name: 'Stephen William Hawking: A Briefer History of Time' },
{ id: 8, type: 'film', year: 2003, link: 'https://clck.ru/EBqSs', progress: 'done', 
	finishYear: 2018, finishMonth: 8, name: 'Pollyanna' },
{ id: 7, type: 'film', year: 2014, link: 'https://clck.ru/EBqRr', progress: 'done', 
	finishYear: 2018, finishMonth: 8, name: 'X+Y' },
{ id: 6, type: 'film', year: 2018, link: 'https://clck.ru/Dzqk8', progress: 'done', 
	finishYear: 2018, finishMonth: 8, name: 'Ready Player One' },
{ id: 5, type: 'film', year: 1996, link: 'https://clck.ru/EBqNh', progress: 'done', 
	finishYear: 2018, finishMonth: 8, name: 'Infinity' },
{ id: 4, type: 'course', year: "", link: 'https://clck.ru/EBqHi', progress: 'in-progress', 
	finishYear: "", finishMonth: "", name: 'Профессиональный JavaScript, уровень 1' },
{ id: 3, type: 'film', year: 2015, link: 'https://clck.ru/EBqGb', progress: 'done', 
	finishYear: 2018, finishMonth: 8, name: 'The Secret Rules of Modern Living: Algorithms' },
{ id: 2, type: 'film', year: 2001, link: 'https://clck.ru/EB79a', progress: 'done', 
	finishYear: 2018, finishMonth: 8, name: 'Harry Potter and the Sorcerer\'s Stone' },
{ id: 1, type: 'film', year: 1971, link: 'https://clck.ru/EB7BC', progress: 'done', 
	finishYear: 2018, finishMonth: 8, name: 'Я и другие' }
];


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

