// Variables globales
const inputName = document.getElementById('txtName');
const inputAge = document.getElementById('txtAge');
const genderOptions = document.querySelectorAll('input[name="gender"]');
const inputGrade1 = document.getElementById('txtGrade1');
const inputGrade2 = document.getElementById('txtGrade2');
const inputGrade3 = document.getElementById('txtGrade3');
const btnRegister = document.getElementById('btnRegister');

let students = []; // Lista de estudiantes

let currentId = 1; // Variable global para controlar el ID autoincrementable

class Student {
    constructor(name, age, gender, grade1, grade2, grade3) {
        this.id = currentId++; // ID único autoincrementable
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.grade1 = parseInt(grade1);
        this.grade2 = parseInt(grade2);
        this.grade3 = parseInt(grade3);
    }

    calculateProm() {
        return ((this.grade1 + this.grade2 + this.grade3) / 3).toFixed(2);
    }
}

function displayRow() {
    const table = document.getElementById("tblStudents");
    let rows = '';
    students.forEach((student, index) => {
        rows += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.gender}</td>
            <td>${student.grade1}</td>
            <td>${student.grade2}</td>
            <td>${student.grade3}</td>
            <td>${student.calculateProm()}</td>
            <td><button class="btn btn-danger" onclick="deleteStudent(${index})">Delete</button></td>
        </tr>
        `;
    });
    table.innerHTML = rows;
}

function deleteStudent(index) {
    // Eliminar el estudiante del arreglo
    students.splice(index, 1);
    // Actualizar la tabla después de eliminar
    displayRow();
}

function register() {
    // Validaciones
    const name = inputName.value;
    const age = inputAge.value;
    let gender;
    genderOptions.forEach(option => {
        if (option.checked) {
            gender = option.value;
        }
    });
    const grade1 = inputGrade1.value;
    const grade2 = inputGrade2.value;
    const grade3 = inputGrade3.value;

    if (name.length > 100) {
        alert("The name cannot be more than 100 characters.");
        return;
    }
    if (age < 0 || age > 50) {
        alert("The age must be between 0 and 50.");
        return;
    }
    if (!gender) {
        alert("Please select a gender.");
        return;
    }
    if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
        alert("Grades must be between 0 and 100.");
        return;
    }

    // Crear un nuevo estudiante
    let newStudent = new Student(name, age, gender, grade1, grade2, grade3);
    students.push(newStudent);

    // Limpiar los campos de entrada después de agregar el estudiante
    inputName.value = "";
    inputAge.value = "";
    genderOptions.forEach(option => option.checked = false);
    inputGrade1.value = "";
    inputGrade2.value = "";
    inputGrade3.value = "";

    // Actualizar la tabla de estudiantes
    displayRow();
}

// Añadir el evento al botón de registro
btnRegister.addEventListener('click', register);
    