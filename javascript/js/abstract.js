// abstract is a way to reduce complexity and allow effective design and implementation
// abstraction in javascipr to hide the implementation detailsand highlighting an object essential features to the users it can be enhanced the readability of the code and avoid duplication
//so it provide only important details to the user and it is also improve the security of the application
class Person {
    constructor() {
      if (this.constructor == Person) {
        throw new Error("Your Error Message...");
          }
      }
      info() {
          throw new Error(" Added abstract Method has no implementation");
  }
  }
  class Teacher extends Person {
    info() {
        // super.info()
        console.log("I am a Teacher");
    }
}
var teacher1 = new Teacher();
teacher1.info();