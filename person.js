class Person{
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    get getInfo (){
            return `i am ${this.fullName}. My age is ${this.birthYear}`
        }
}

module.exports = {Person}