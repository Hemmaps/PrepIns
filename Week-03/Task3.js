
let len = document.getElementById("len");
let ht = document.getElementById("ht");
let peri,area;
let btn1 = document.getElementById("btn1");
let result1=document.getElementById("result1");
let btn2 = document.getElementById("btn2");
let result2=document.getElementById("result2");



btn1.onclick = function calcPerimeter(){
    let l = Number(len.value);
    let b = Number(ht.value);
    peri = 2 * (l+b)
    result1.innerText=`The perimeter is ${peri}`;
}

btn2.onclick = function calcArea(){
    let l = Number(len.value);
    let b = Number(ht.value);
    area = l*b;
    result2.innerText=`The area is ${area}`;

}
//calcPerimeter(2,3)
//calcArea(2,3)