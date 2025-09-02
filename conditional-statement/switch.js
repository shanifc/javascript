// usefull when a comparing a single value against multiple elemnt to the value

const { log } = require("console");

let day = "monday";

switch(key) {
    case "monday":
        console.log("start of work week");
        break;

    case "friday":
        console.log("end of the work week");
        break;

    case "sunday":
        console.log("weekend");
        break;

    default:
        console.log("regular");
}