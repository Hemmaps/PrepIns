class Employee {
    constructor(name, age, dept, salary) {
        this.name = name;
        this.age = age;
        this.dept = dept;
        this.salary = salary;
    }
}

let employees = [];

function addEmployees(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let dept = document.getElementById("dept").value;
    let salary = Number(document.getElementById("salary").value);

    let newEmployee = new Employee(name, age, dept, salary);
    employees.push(newEmployee);

    document.getElementById("info").reset();
    console.log(employees);
}

function calculateAvgSalary() {
    if (employees.length === 0) {
        document.getElementById("result1").innerHTML = "No employees are there";
        return;
    }

    let totalSalary = 0;
    employees.forEach(employee => {
        totalSalary += employee.salary;
    });

    const averageSalary = totalSalary / employees.length;
    document.getElementById("result1").innerHTML = `Average Salary of all Employees: ${averageSalary.toFixed(2)}`;
}

function employeeDept() {
    let deptt = document.getElementById("find-dept").value;
    const foundEmp = employees.filter(element => element.dept === deptt);
    let resultfound = document.getElementById("result2");
    resultfound.innerHTML = foundEmp.map(element => {
        return `Name: ${element.name}, Age: ${element.age}, Department: ${element.dept}, Salary: ${element.salary}`;
    }).join('<br>');
    console.log(foundEmp);
}

function increaseSalary() {
    let percentage = Number(document.getElementById("percentage").value);
    if (employees.length === 0 || isNaN(percentage)) {
        document.getElementById("result3").innerHTML = "No employees are there or invalid percentage";
        return;
    }

    employees.forEach(employee => {
        employee.salary += (employee.salary * percentage) / 100;
    });

    document.getElementById("result3").innerHTML = employees.map(employee => {
        return `Name: ${employee.name}, New Salary: ${employee.salary.toFixed(2)}`;
    }).join('<br>');
    console.log(employees);
}

function sortEmployeesByAge() {
    if (employees.length === 0) {
        document.getElementById("result4").innerHTML = "No employees are there";
        return;
    }

    employees.sort((a, b) => a.age - b.age);
    let resultfound = document.getElementById("result4");
    resultfound.innerHTML = employees.map(element => {
        return `Name: ${element.name}, Age: ${element.age}, Department: ${element.dept}, Salary: ${element.salary}`;
    }).join('<br>');
    console.log(employees);
}
