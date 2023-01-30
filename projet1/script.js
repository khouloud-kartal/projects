

//////////////////////////////////facile nature////////////////////////////////////////




//const form = document.querySelectorAll('.form-quizz .question-block'); 
//avec querySelectorAll on select toutes les div avec la class "question-block" qui sont dans la div parent avec la class "form-quizz"

let tableauResultas = [];

const form = document.querySelector('.form-quizz');

const form2 = document.querySelector('.form-quizz');
// console.log(form2);

const reponses = ['a','c','c','b','a'];

const reponses2 = ['a','c','b','b','c'];

//mettre des emojis pour rendre le formulaire plus fun
const emojis = ['✅','🌟','👀','😢','👎'];
const titreResultats = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultats = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];



form.addEventListener('submit', (e)=>{
    //prevenir le comportement par default
    e.preventDefault();

    //Montrer la valeure de la réponse checkée de la premiere question
    // console.log(document.querySelector('input[name="q1"]:checked').value);
     
    //i< 6: parceque on a 5 question dans notre formulaire
    for ( i = 1; i < 6; i++) {

        //on peut écrire des expressions comme (i) dans notre code grace au ``
        tableauResultas.push(document.querySelector(`input[name="q${i}"]:checked`).value);
        console.log(document.querySelector(`input[name="q${i}"]:checked`).value);
        console.log(tableauResultas);

    }
    verifFunc(tableauResultas);
    tableauResultas = [];
})







function verifFunc(tabResultats) {

    for(let a = 0; a< 5; a++){

        if(tabResultats[a] === reponses[a]){
            verifTableau.push(true);
        }else{
            verifTableau.push(false);
        }
    }//les résultas de cette fonction donnent un tableau comme ['false', 'true','true','false','false']

    afficherResultats(verifTableau);
    //mettre des couleur pour les div si la reponse est true ou false
    couleursFonction(verifTableau);
    verifTableau = [];

}

//affichage des resultats
function afficherResultats(tabCheck) {
    //filter: serts à filtrer le tableau et prendre que les fausse reponse
    //length: c'est pour montrer combien de mauvaise reponse il en a 
    const nbDeFautes = tabCheck.filter(el => el !== true).length;

    switch(nbDeFautes){
        case 0:
            titreResultats.innerText = "✅ Bravo, vous êtes un génie ! ✅";
            aideResultats.innerText = '';
            noteResultat.innerText = '5/5';
        break;
        case 1:
            titreResultats.innerText = "🌟 Vous y êtes presque ! 🌟";
            aideResultats.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez';
            noteResultat.innerText = '4/5';
        break;
        case 2:
            titreResultats.innerText = "🌟 Encore un effort 👀";
            aideResultats.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez';
            noteResultat.innerText = '3/5';
        break;
        case 3:
            titreResultats.innerText = "👀 Un peu plus d'effort ! 😢";
            aideResultats.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez';
            noteResultat.innerText = '2/5';
        break;
        case 4 :
            titreResultats.innerText = "😢 peut mieux faire ! 😢";
            aideResultats.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez';
            noteResultat.innerText = '1/5';
        break;
        case 5:
            titreResultats.innerText = "👎 peut mieux faire ! 👎";
            aideResultats.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez';
            noteResultat.innerText = '0/5';
        break;

        default:
            'Oops, cas innatendu.';
    }

}

function couleursFonction(tabValBool){
    for(let j = 0; j< tabValBool.length; j++){
        if(tabValBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';
        }else{
            toutesLesQuestions[j].style.background = 'red';
            //rajouter une classe de css
            toutesLesQuestions[j].classList.add( 'echec');

            //enlever la classe de css apres 500ms pour pouvoir reclicker sur valider les réponses
            setTimeout(()=>{
                toutesLesQuestions[j].classList.remove('echec');
            }, 500);
            
        }

    }
}

//sur chaque block de question
toutesLesQuestions.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})











/////////////////////////////choix de niveau///////////////////////////////////////

const button = document.querySelector('#button');

const domaine = document.getElementById('domaine');
 
const container = document.querySelector('.container-global-facile-nature');

const container2 = document.querySelector('.container-global-moyen-nature');

const firstpart = document.querySelector('.firstpart');

// console.log(container);

button.addEventListener('click',()=>{

    choix();
    if (niveau_val === 'facile' && domaine_val === 'nature'){

    container.style.display = 'block';
    firstpart.style.display = 'none';

    }else if(niveau_val === 'moyen' && domaine_val === 'nature'){
        container2.style.display = 'block';
        firstpart.style.display = 'none';

    }else{
        window.open('index.html');
    }
})

function choix() {
    const niveau = document.getElementById('niveau');
    const domaine = document.getElementById('domaine');

    niveau.addEventListener('click',(e)=>{
        niveau_val = e.target.value;
    })

    domaine.addEventListener('click',(e)=>{
        domaine_val = e.target.value;
    })

}
choix();













