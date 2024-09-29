const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    },
    {
        petName: "Domino",
        age: 8,
        weightInKilos: .23,
        breed: "Unknown"
    },
];


const showInfo = function() {
    let Pnum = parseInt(document.querySelector(".petNum").value);
    console.log(Pnum);

    let petInfo = document.querySelector(".selectedPetInfo");

    // how do i add the two conditions together?

    if (Pnum >= 1) {

        if (Pnum <= petsData.length) {
            let pet = petsData[Pnum - 1];
            petInfo.innerHTML = `Name: ${pet.petName}, Age: ${pet.age}, Weight: ${pet.weightInKilos} kg, Breed: ${pet.breed}`;
        } 
        
        else {
            petInfo.innerHTML = `Invalid pet number. Please enter a number between 1 and ${petsData.length}.`;
        }
    } 
    
    else {
        petInfo.innerHTML = `Invalid pet number. Please enter a number between 1 and ${petsData.length}.`;
    }

};

