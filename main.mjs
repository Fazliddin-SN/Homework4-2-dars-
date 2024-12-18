import {generateRandomNumber} from "./random-func.js";
import  {Person} from "./person.js";
import { sleepFunc } from "./sleep.js";
const randomNum = generateRandomNumber();
const person = new Person('Aziz Bahodirov', 21);

sleepFunc(() => {
    console.log(person.getInfo);
}, randomNum)
