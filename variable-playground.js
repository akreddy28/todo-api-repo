var person = {
	name: 'Karunakar',
	Age: 21
};

function updatePerson(obj) {
	// obj = {
	// 	name: 'Karunakar',
	// 	Age: 22
	// };
	obj.Age = 22;
}

updatePerson(person);
console.log(person);

//Array Example

var grades = [15, 28];

function updateGrades(gradeArr) {
	// gradeArr = [12 ,13, 14];
	gradeArr.push(90);
}

updateGrades(grades);
console.log(grades);