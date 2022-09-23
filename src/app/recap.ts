const username: string = 'Carlos';

const sum = (a: number, b: number) => {
  return a + b;

}
sum(4,6);

class Person {
  age: number;
  lastName: string;

  constructor(age: number, lastName: string){
    this.age = age;
    this.lastName = lastName;
  }

}

const carlos = new Person(22, 'Carlos');
