//Arrow function js

/*class Employee {
  constructor(name) {
    this.name = name;
  }

  getEmployeeName() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }

  getEmployeeNameArrow() {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  }
}

let firstEmployee = new Employee("John Doe");
firstEmployee.getEmployeeName();
firstEmployee.getEmployeeNameArrow();*/

// argument

let sayHello = () => alert`hello `;
let saybye = () => alert`Bye`;

//creating a function that takes an argument and calling it as if it was a function

let doSomething = (somethingToDo) => {
  somethingToDo();
};

//any function that will be sent to dosomething() will be  called right away
doSomething(sayHello);
doSomething(saybye);
