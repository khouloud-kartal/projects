//la clé API: 5bc4e906ebb5cdc21f08e43bf51c2f30

const keyapi = '5bc4e906ebb5cdc21f08e43bf51c2f30';

// undefined variable qu'on va remplir aprés
let apiresults;

const time = document.querySelector('.time');
const temperature = document.querySelector('.temperature');
const localisation = document.querySelector('.localisation');
const hour = document.querySelectorAll('.hour_name');
const hour_val = document.querySelectorAll('.hour_value');
const day = document.querySelectorAll('.day_name');
const day_val = document.querySelectorAll('.day_temp');
const logo = document.querySelector('.weather_logo');

//la geolocation
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
        
        let longitude = position.coords.longitude;
        let latitude = position.coords.latitude;

        //appeler une methode qu'on a crée
        appelapi(longitude,latitude);

    },/*si on refuse la position, on mets une seconde argument*/ ()=>{
        alert('Please avtive the geolocation otherwise it will not work');
    })
}

function appelapi(longitude,latitude){

    //prendre les donnée depuis une api avec la method fetch
    //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

    //toutes les api que j'ai besoin pour afficher la météo de plusieurs jours sont payant
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=minute&units=metric&appid=${keyapi}`)
    //le .then va prendre la réponse de notre promesse au dessus
    .then((response)=>{
        //on retourne notre reponse (donnée qu'on récupère) au format json
        return response.json();  
    })
    .then((data)=>{

        apiresults = data;

        time.innerText = apiresults.list[0].weather[0].description;

        //Math.trunc sert à enlever les virgule de la temperature pour avoir un chifre arrondit
        temperature.innerText = Math.trunc(data.list[0].main.temp) +'°C';
        localisation.innerText = data.city.name;

        //les heures par tranches de trois avec leurs temperature

        //afficher l'heure actuelle
        //let actuelHour = new Date().getHours();

        // afficher les heures de la journée par 3
        for (let i = 0; i < hour.length; i++) {

            let get_hour = apiresults.list[i].dt_txt;
            //recupere que les heures
            hour[i].innerText = new Date(get_hour).getHours() + 'h';

            
        }
        console.log(apiresults);
        //afficher la temperature de chaque 3 heure
        for (let j = 0; j <  hour_val.length; j++) {
            hour_val[j].innerText = Math.trunc(apiresults.list[j].main.temp) +'°';   
        }

        //afficher la temperature des 7 jours qui suivent the current day


        // cette partie est à voir aprés trouver un bon api key    
        

        // for (let t = 0; t < 40; t++) {

        //     let current = new Date().getDay();
        //     let daily = apiresults.list[t].dt_txt;
        //     let daily_day = new Date(daily).getDay();
        //     // console.log(daily_day);
        //     if (daily_day > current){
        //         console.log('hi'+ daily_day);
        //     }
            
        // }
        
        
        //afficher le logo de chaque weather
        
        logo.src = `images/${apiresults.list[0].weather[0].icon}.svg`;

    })
}
