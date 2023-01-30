//les selecteurs

//changer la couleur du font de h4
// document.querySelector("h4").style.background = "yellow";

// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow";


//click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector('#btn-1');
//une autre facon de séléctionner une id, et cette methonde est plus perfermante
const btn2 = document.getElementById('btn-2') ;
const response = document.querySelector('p');


questionContainer.addEventListener('click', ()=>{

    //on appellle une class de css pour faire changer le style quand il ya beaucoup de style à changer
    //le toggle:si la class elle est tu l'enleve, si elle est pas tu la rajoute
    questionContainer.classList.toggle("question-clicked");
})

btn1.addEventListener('click', ()=>{
    response.classList.add('show-response');
    response.style.background = "green";
})

btn2.addEventListener('click', ()=>{
    response.classList.add('show-response');
    response.style.background = "red";
})


//___________________________________________________________________
//Mouse Event

const mousemove =document.querySelector(".mousemove");

//mousemove: Quand on bouge la souris
window.addEventListener('mousemove', (e)=>{ 
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
      
})

//mousedown: Quand on appuie sur la souris
window.addEventListener("mousedown", () =>{
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
})

//mouseup: Quand on relache la souris
window.addEventListener("mouseup", () =>{
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid red";
})

//mouseenter: Quand la souris survole une zone
questionContainer.addEventListener('mouseenter', () =>{
    questionContainer.style.background = "yellow";
})

//mouseout: Quand la souris sort d'une zone
questionContainer.addEventListener('mouseout', ()=>{
    questionContainer.style.background = "green";
})

//mousover:
response.addEventListener('mouseover',()=>{
    response.style.transform="rotate(2deg)";
})


//___________________________________________________
//keyPress event

//rejouter du son

const ring =(key) =>{
    //Audio: nouvelle object audio
    const audio = new Audio();

    audio.src = key +".mp3";

    //play: une methode de l'objet Audio
    audio.play();
}


const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

//keypress: Quand on appuis sur une touche de clavier
document.addEventListener('keypress',(e)=>{
    key.textContent = e.key;
    //example
    if (e.key === "j"){
        keypressContainer.style.background = "silver";
    }else if(e.key === "h"){
        keypressContainer.style.background = "gold";
    }else{
        keypressContainer.style.background = "blue";
    }

    //appeller la fonction du son
    if (e.key === "z") ring(e.key);

})


//___________________________________________
//scroll event

const nav = document.querySelector("nav");

//mettre un evenement sur le scroll avec window
//on a pas besoin de "e" d'évenement quand on fait le scroll
window.addEventListener("scroll", () =>{
    
    //window.scrollY: la valeur en pixels qui a été scrollé dès le début
    if( window.scrollY > 120){
        nav.style.top = 0 ;
    }else{
        nav.style.top = '-50px';
    }
})




//________________________________________________________________
//Form events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

//créer une valeur (une boite) vide pour stocher ce qu'on va écrire dans l'input
let pseudo = "";

//créer une valeur (une boite) vide pour stocher ce qu'on va écrire dans l'input
let language = "";

inputName.addEventListener("input", (e) =>{

    //le target.value: coresponds à tous ce qui est écrit dans le input
    pseudo = e.target.value;

})

//on peut mettre change comme evenement à la place d'input mais input et plus utilisé
select.addEventListener('input', (e)=>{

    language = e.target.value;

})

form.addEventListener('submit', (e)=>{

    //récupérer l'evenement et appliquer la methode "preventDefault()"
    //cette methode sert à annuler le comportement par défaut de navigateur
    //dans cette exemple la methode annule le changement de page dès que on appuie sur le submit
    e.preventDefault();

    //mettre une obligation de cocher sur le checkbox avant de submit
    //si la checkbox et checker
    //la déclaration de cgv et des button n'est pas obligatoire
    if (cgv.checked){
        //Avec innerHTML: on peut injecter directement du code html avec ses balises
        document.querySelector("form > div").innerHTML = '<h3>Pseudo : '+pseudo+'</h3>' +
        '<h4>Language préféré : '+language+'</h4>';
        
    }else{
        alert('veuillez accepter les CGV');
    }

})




//___________________________________________________
//Load event

//cette evenement se déclanche une fois que toute la page a été charger

window.addEventListener("load", ()=>{
    console.log("document chargé");
})


//_________________________________________________
//ForEach
//selectioner toutes les éléménts qui on la même class

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener('click', (e)=>{
        e.target.style.transform = "scale(0.7)";
    })
});


//______________________________________
//addEventListener Vs onclick
//la méthode onclick est fonctionnelle mais
//addEventListener est recommandé
//on utilisant la methodes onclick: on ne peut pas faire deux fois la meme évenement sur la même balise contrairement à addEventListener
//les trés vieux navigateur n'accepte pas le addEventListener

//methode1
// document.body.onclick = function () {
//     console.log("click");
// };

// //methode2
// document.body.onclick = () => {
//     console.log("click");
// };


//Bubbling => (de base l'eventListener est paramétré en mode Bubbling)
document.body.addEventListener("click",()=>{
    console.log("click 1");
});

//Usecapture
document.body.addEventListener("click",()=>{
    console.log("click 2");
}, true);
//le troisieme argument est de base falsecontrairement à l'exemble ci-dessus


//______________________________________________________________
//Stop propagation

questionContainer.addEventListener('click',(e)=>{
    //
    //cette methode: veut dire que je veut que t'utilise l'evenement de 'click' ailleurs
    //
});


//____________________________
//removeEventListener
//ca serts à supprimer toutes les eventListener 




//______________________________________________________
//BOM: browser object modele
//BOM => navigator/ screen/ location/ frames/ history/ XMLHttpRequest

//ouvrir un pup up ou une autre fenetre sur notre browser
//window.open("http://google.com", "cours js", "height=600, width=800");

//fermer la fenetre
//window.close()



//les évenement adossés à window:

//=> alert.("hello");

//=> confirm
btn2.addEventListener("click", ()=>{
    confirm("voulez vous vraiment vous tromper?");
});

//=> prompt
btn1.addEventListener("click", ()=>{
    let answer = prompt("entrez votre nom");
    questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

//=> setTimeout(()=>{
    //logique à exécuter
//}, 'temps en milisecondes avant de déclencher')
setTimeout(()=>{
    questionContainer.style.borderRadius = "300px";
}, 2000);

//=> setInterval()
//cette exemple crée des boites toutes les secondes en boucles sans arrêt
let interval = setInterval(()=>{
    // document.body.innerHTML += `
    // <div class='box'>
    // <h2>Nouvelle Boite</h2>
    // </div>
    // `;
}, 1000);
//arreter l'interval exemple
document.body.addEventListener("click",(e)=>{
    //Bonus: enlever l'élément sur lequel je click 
    e.target.remove();
    //arreter l'interval
    clearInterval(interval);
});

//=> location
// console.log(location.href);//le lien exacte où vous êtes
// console.log(location.host);//le nom de l'host
// console.log(location.pathname);//l'élément apres le host
// console.log(location.search);//afficher search juste aprés le pathname comme:(?query=quelquechose)
//location.replace("http://lequipe.fr"): redériger vers un autre lien

//=> navigator
//console.log(navigator.userAgent): permets d'avoir toutes les informations sur les données de navigation
//ca peut servir pour avoir des informationn sur notre utilisateur
//navigator.geolocation: il nous montrer la localisation de notre utilisateur
//exemple de la geolocalisation pris d'internet
let options = {
    enableHeightAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function success (pos){
    let crd = pos.coords;
    console.log("votre position actuelle est: ");
    console.log(`Latitude: ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err){
    console.warn(`ERROR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success,error,options);

//=> history
//ca sers à consulter notre historique
//window.history.back(): revenir une page en arriére 
//history.go(-autand de page qu'on veut): revenir en arriere autand de page qu'on veut



//__________________________________________________
//setProperty
//regarder le fichier css
window.addEventListener('mousemove',(e)=>{
    //layerX et layerY: nous indique vraiment quand on est par dessus
    //on pouvait utiliser pageX et pageY mais pour ce genre d'effect les layers sont les meilleurs
    nav.style.setProperty('--x', e.layerX + "px");
    nav.style.setProperty('--y', e.layerY + "px");
});











//___________________________________________________________
//notes:
//la nouveauté de javascript: on est pas obliger de déclarer l'élément si on lui mets une id 
//à une condition: on écris l'id dans (-,_)

















//Promise: Objet de js
//une promesse de js: permet de changer les comportement de js
//elle peut avoir 3 états: 
//pending: en attente 
//rejected: refusée
//fullfilled: remplie

//async: permet de rendre l'écution d'une fonction asynchrone
//retourne toujours une promesse
//permet de grandement simplifier l'écriture des promesses

//Await: permet d'attendre la résolution d'une promesse avant le reste de l'éxécution du code
//s'utilise uniquement dans une fonction asynchrone

//XMLHttpRequest: permet de récupérer des données serveurs sans rafraichir la page
//utilisé dans la méthode AJAX 
//renvoie une promesse

//l'API fetch: repose sur XHR
//interface plus simple et plus puissant
//retourne une promesse
// const myImage = document.querySelector('img');

// fetch('flowers.jpg')
//     .then(function (response) {//retourne une promesse . // la response= flowers.jpg
//         return response.blob();//blob: retourne de la réponse sous format projet
//     })
//     .then(function (myBlob){
//         const objetURL = URL.createObjectURL
//     })

//un fichier jason?????????????????

//exemple

// fetch(input:'content.html')
//     .then((response: Response)=>{
//         return response.text();
//     })
//     .then((html:string)=>{
//         document.body.innerHTML = html;
//     })
//     .catch((error)=>{
//         console.log(error);
//     })




//le formulaire
//async src="script.js"
// let registerbutton = document.querySelector('#id ');
// registerbutton.addEventListener("click", (event)=>{
//     fetch('inscription.php')
//     .then((response)=>{
//         return response.text();
//     })
//     .then((data)=>{
        
//         document.body.innerHTML = data;
//         regiterform = document.querySelector('#id');
//         registerform.addEventListener('submit', (event)=>{
//             fetch('inscription.php'){
//                 method: post;
//                 body: formData;
//                 headers
//             }
//             .then((response)=>{

//             })

//             event.preventDefault();
            
//             let formData = new formData(registerform);
//             console.log(registerform.elements);

//         })

//     })
// })










//_____________________________________________________________
//tailwind && bootstrap










