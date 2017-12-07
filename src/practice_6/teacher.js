import Person from "../../src/practice_2/person.js";
export class Teacher extends Person {
  
  constructor(name, age, num) {
    super(name, age);
    this.num = num;
  }
  
  
  introduce() {
    if(this.num != undefined){
      return super.introduce() + " I am a Teacher. I teach Class "+ this.num + ".";
    }else{
    return super.introduce() + " I am a Teacher. I teach No Class.";
     }
 }
}

module.exports = Teacher;
