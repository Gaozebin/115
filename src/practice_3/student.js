import Person from "../../src/practice_2/person.js";
export class Student extends Person {
    
  constructor(name, age, num){
    super(name, age)
        this.num = num;
  }

  introduce(){
     return "I am a student. I am at Class"+ this.num+".";
  }
}

module.exports = Student;
