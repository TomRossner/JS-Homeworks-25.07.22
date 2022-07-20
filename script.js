function handleClickEvent(){
    let name = document.getElementById("nameInput");
    let age = document.getElementById("ageInput");
    let country = document.getElementById("countryInput");
    let color = document.getElementById("colorInput");
    if(name.length < 2 || age.value <= 0 || country.value == "" || color.value == "#000000" || fetchGender() == false){
        window.alert("Please fill out all the fields!");
        return;
    }else{
        createCard(name, age, country, color);
    }
}

function fetchGender(){
    if (maleInput.checked){
        console.log("male");
        return "Male";
    }
    if (femaleInput.checked){
        console.log("female");
        return "Female";
    }
    return "";
}

function createCard(name, age, country, color){
    

    const container = document.getElementById("container");
    const newDiv = document.createElement("div");

    container.append(newDiv);
    newDiv.classList.add("card");
    newDiv.style.backgroundColor = color.value;
    newDiv.style.width = 20 + "rem";
    newDiv.style.margin = "5rem auto";
    newDiv.style.padding = "2rem 1rem";
    newDiv.innerHTML += `<div id="card" class="card-body">
    <h5 class="card-title">`+ name.value +`</h5>
    <h6 class="card-subtitle mb-2 text-muted">`+ age.value +`</h6>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">`+ country.value +`</li>
    <li class="list-group-item">`+ fetchGender() +`</li>
    </ul>
    </div>
    </div>`;
    
    resetInputs();
}

function resetInputs(){
    let name = document.getElementById("nameInput");
    let age = document.getElementById("ageInput");
    let country = document.getElementById("countryInput");
    let color = document.getElementById("colorInput");

    name.value = "";
    age.value = "";
    color.value = "#000000";
    country.value = "";
    maleInput.checked = false;
    femaleInput.checked = false;
}