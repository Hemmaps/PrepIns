
let len,ht
let peri,area
function calcPerimeter(len,ht){

    peri = 2 * (len+ht)
    console.log(`The perimeter is ${peri}`)
}

function calcArea(len,ht){
    area = len*ht;
    console.log(`The area is ${area}`)

}
calcPerimeter(2,3)
calcArea(2,3)