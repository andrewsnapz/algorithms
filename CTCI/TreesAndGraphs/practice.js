class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }

  getInfo() {
    return `My name is ${this.name} and I am ${this.age} years old. I am an employee at ${this.role}`;
  }
}

const Emily = new Person("Emily", "26");
console.log(Emily.getInfo());

const Andrew = new Employee("Andrew", "25", "Software Engineer");
console.log(Andrew.getInfo());
