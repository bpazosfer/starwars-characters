
// Solicitud GET (Request).
fetch('https://swapi.dev/api/people')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(page1 =>  {
        console.log(page1);
        fetch(page1.next)
        .then(response => response.json())
        .then(page2 => {
            console.log(page2);
            let results = page1.results.concat(page2.results);
            addToFlex(results)
        });
    }) 
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

// Funcion de llenado
function addToFlex(characters){
    console.log("log dentro de addToFlex");
    console.log(characters);
    let placeholderMain = document.querySelector('#main-container');
    let outMain = placeholderMain.innerHTML;
    let placeholderSecondary = document.querySelector('#secondary-container');
    let outSecondary = placeholderSecondary.innerHTML;
    let placeholderExtra = document.querySelector('#extra-container');
    let outExtra = placeholderExtra.innerHTML;
    
    let counter = 0;
    for (let character of characters) {
        if(counter < 5){
            outMain += `
            <div class="card card-item" hidden = true>
                <div class="card-header flex-item-main-head"    >
                    ${character.name}
                </div>
                <ul class="list-group list-group-flush flex-item-main-body ">
                <li class="list-group-item">Height: ${character.height}</li>
                <li class="list-group-item">Mass: ${character.mass}</li>
                <li class="list-group-item">Gender: ${character.gender}</li>
                <li class="list-group-item">Year of birth: ${character.birth_year}</li>
                </ul>
            </div>
            `;

        } else if ( 4 < counter && counter < 10 ) {
            outSecondary += `
            <div class="card card-item" hidden = true>
                <div class="card-header flex-item-secondary-head"    >
                    ${character.name}
                </div>
                <ul class="list-group list-group-flush flex-item-secondary-body ">
                <li class="list-group-item">Height: ${character.height}</li>
                <li class="list-group-item">Mass: ${character.mass}</li>
                <li class="list-group-item">Gender: ${character.gender}</li>
                <li class="list-group-item">Year of birth: ${character.birth_year}</li>
                </ul>
            </div>
            `;
        } else if ( 9 < counter && counter < 15 ){
            outExtra += `
            <div class="card card-item" hidden = true>
                <div class="card-header flex-item-extra-head"    >
                    ${character.name}
                </div>
                <ul class="list-group list-group-flush flex-item-extra-body ">
                <li class="list-group-item">Height: ${character.height}</li>
                <li class="list-group-item">Mass: ${character.mass}</li>
                <li class="list-group-item">Gender: ${character.gender}</li>
                <li class="list-group-item">Year of birth: ${character.birth_year}</li>
                </ul>
            </div>
            `;
        }
        counter++;
    }


    placeholderMain.innerHTML = outMain;
    placeholderSecondary.innerHTML = outSecondary;
    placeholderExtra.innerHTML = outExtra; 
    document.getElementById('main').addEventListener('mouseenter',onEnterMainEvent);
    //document.getElementById('main').addEventListener('mouseleave',onLeaveMainEvent);
    document.getElementById('secondary').addEventListener('mouseenter',onEnterSecondaryEvent);
    //document.getElementById('secondary').addEventListener('mouseleave',onLeaveSecondaryEvent);
    document.getElementById('extra').addEventListener('mouseenter',onEnterExtraEvent);
    //document.getElementById('extra').addEventListener('mouseleave',onLeaveExtraEvent);


}


function onEnterMainEvent(event){
    console.log("HOVER MOUSE ENTER EN MAIN");
    let placeholderMain = document.querySelector('#main-container');
    console.log(placeholderMain.children);
    let childrens = placeholderMain.children;
    for(let children of childrens){
        children.hidden = false;
    }
}
/*
function onLeaveMainEvent(event){
    console.log("HOVER MOUSE LEAVE EN MAIN");
}*/


function onEnterSecondaryEvent(event){
    console.log("HOVER MOUSE ENTER EN SECONDARY");
    let placeholderSecondary = document.querySelector('#secondary-container');
    console.log(placeholderSecondary.children);
    let childrens = placeholderSecondary.children;
    for(let children of childrens){
        children.hidden = false;
    }
}
/*
function onLeaveSecondaryEvent(event){
    console.log("HOVER MOUSE LEAVE EN SECONDARY");
}*/


function onEnterExtraEvent(event){
    console.log("HOVER MOUSE ENTER EN EXTRA");
    let placeholderExtra = document.querySelector('#extra-container');
    console.log(placeholderExtra.children);
    let childrens = placeholderExtra.children;
    for(let children of childrens){
        children.hidden = false;
    }
}
/*
function onLeaveExtraEvent(event){
    console.log("HOVER MOUSE LEAVE EN EXTRA");
}*/