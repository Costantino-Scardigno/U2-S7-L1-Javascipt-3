let pet= document.getElementById("petName")
let owner= document.getElementById("ownerName")
let species = document.getElementById("species")
let breed=document.getElementById("breed")
let petList=document.getElementById("petList")
let button = document.getElementById('add')
let pets = []


class Pets {
    constructor(petName,ownerName,species,breed) {
        this.petName=petName
        this.ownerName=owner
        this.species=species
        this.breed=breed
    }

    

}

const createList = function(){
    petList.innerText=" "
    pets.forEach((pet)=>{
        const newli=document.createElement("li")
        newli.innerText= "Nome: " + pet.petName + ", Proprietario: " + pet.ownerName
        petList.appendChild(newli)
    })
}


button.onclick= function(){
    let newPet = new Pets(
        petName.value,
        ownerName.value,
        species.value,
        breed.value
      )
      pets.push(newPet)
      createList()
     petName.value = '' 
     ownerName.value = '' 
     species.value = '' 
     breed.value = '' 
}