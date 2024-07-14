let meter;
let feet;

function metersToFeet(meter){
    feet = meter * 3.281;
    console.log(`${meter} meters is equal to ${feet} feet`);
}

function feetToMeters(feet){
    meter = feet * 0.3048;
    console.log(`${feet} feet is equal to ${meter} meters`);
}

metersToFeet(56);
feetToMeters(876);