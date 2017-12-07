import Person from "../../src/practice_2/persomn.js";
export class Student extends person {

   constructor(name,age, num) {
    super(name, age)
      this.num = num;
   }
  
  introduce() {
    return super.introduce() + " I am a Student. I am at Class "+ this.num.number +".";
  }
}

module.exports = Student;
