/*Write a JavaScript program to delete the rollno property from a object. 
Also print the object before or after deleting the property.*/

let student = {
    name: 'student',
    class: 10,
    rollNo: 25
}

console.log(student);

delete student.rollNo;

console.log(student);