
const max_age=100
let curr_age,cups
let age,tot

function caculateCoffeeSupply(curr_age,cups){
    age = max_age - curr_age;
    tot = Math.round(age * 365.24 *cups);
    console.log(`You will need ${tot} cups of coffee to keep you awake until the age of ${max_age}`)
}

caculateCoffeeSupply(20,2)