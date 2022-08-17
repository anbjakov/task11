'use strict'

class Person {
    constructor(firstName,lastName, age, birthDayDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDayDate = new Date(birthDayDate);
    }
    celebrate(){
        return `Happy Birthday, ${this.firstName}! let’s celebrate`
    }
}
class Employee extends Person{
    constructor(firstName,lastName, age, birthDayDate,jobPosition){
        super(firstName,lastName, age, birthDayDate)
        jobPosition = this.jobPosition;
    }
    #salary=10;
    getYearSalary (){
        const CONTRACT_TERM = 12;
        return CONTRACT_TERM*this.#salary
    }
    celebrate(){
        if  (isWeekendThisYear(this.birthDayDate)) {
            return "Happy Birthday, let’s celebrate"
        }
        return  'Happy Birthday, but I need to work'
    }
}

let isWeekendThisYear = (dateStr)=>{
    let date = new Date(dateStr);
    const CURRENT_YEAR = new Date().getFullYear()
    date.setFullYear(CURRENT_YEAR);
    console.log(date)
    if (isNaN(+date)) {
        console.error('Error: invalid date');
        return
    }
    return (date.getDay() ===0 || date.getDay()===6)
}

let unemployedPerson = new Person('Marty','McFly',30,'1989-06-12');
let employedPerson = new Employee('Marty','McFly',30,'1989-06-12','talented skateboarder');
console.log(unemployedPerson.celebrate());
console.log(employedPerson.celebrate());

