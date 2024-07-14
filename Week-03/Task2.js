

function calculatePetAge(pet_age,con_rate = 7,pet = "kitty"){
    pet_age = pet_age * con_rate;
    console.log(`Your ${pet} is ${pet_age} years old in pet years!`);
}

calculatePetAge(4,7);
calculatePetAge(16,4,"dog");
calculatePetAge(23,9,"pig");