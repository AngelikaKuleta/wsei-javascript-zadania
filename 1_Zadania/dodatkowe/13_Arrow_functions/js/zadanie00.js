document.addEventListener('DOMContentLoaded', function () {

	const Students = function(names) {
		this.names = names;
		this.numberOfLetters = [];
	}
	Students.prototype.countLetters = function() {
		this.names.forEach(el => this.numberOfLetters.push(el.length));
	}


	//zadanie 0
	var students = new Students(["Ania", "Kamil", "Mariusz"]);
	students.countLetters();
	console.log(students.numberOfLetters);

});