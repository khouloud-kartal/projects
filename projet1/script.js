

//////////////////////////////////facile nature////////////////////////////////////////




//const form = document.querySelectorAll('.form-quizz .question-block'); 
//avec querySelectorAll on select toutes les div avec la class "question-block" qui sont dans la div parent avec la class "form-quizz"

let tableauResultas = [];


const form = document.querySelectorAll('.form-quizz');

console.log(form);

// console.log(form2);

const reponses = ['a','c','c','b','a'];

const reponses2 = ['a','c','b','b','c'];

const reponses3 = ['c','a','c','b','b'];

const reponses4 = ['a','b','b','c','b'];

const reponses5 = ['a','a','c','c','b'];

const reponses6 = ['c','a','a','b','c'];

//mettre des emojis pour rendre le formulaire plus fun
const emojis = ['✅','🌟','👀','😢','👎'];
const resultats = document.querySelectorAll('.resultats');
// const noteResultat = document.querySelector('.note');
// const aideResultats = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
const toutesLesQuestions1 = document.querySelectorAll('.question-block1');
const toutesLesQuestions2 = document.querySelectorAll('.question-block2');
const toutesLesQuestions3 = document.querySelectorAll('.question-block3');
const toutesLesQuestions4 = document.querySelectorAll('.question-block4');
const toutesLesQuestions5 = document.querySelectorAll('.question-block5');
let verifTableau = [];






//affichage des resultats
function afficherResultats(tabCheck) {
    //filter: serts à filtrer le tableau et prendre que les fausse reponse
    //length: c'est pour montrer combien de mauvaise reponse il en a 
    const nbDeFautes = tabCheck.filter(el => el !== true).length;

    resultats.forEach(titre => {

        
        switch(nbDeFautes){
            case 0:
                titre.innerHTML = `<h2>✅ Bravo, vous êtes un génie ! ✅</h2>
                <h3>5/5</h3>
                <style>h2,h3{text-align:center; color:white;}</style>`;
            break;
            case 1:
                titre.innerHTML = `<h2>🌟 Vous y êtes presque ! 🌟</h2>
                <h3>Retentez une autre réponse dans les cases rouges, puis re-validez</h3>
                <h3>4/5</h3>
                <style>h2,h3{text-align:center; color:white;}</style>`;
            break;
            case 2:
                titre.innerHTML = `<h2>🌟 Encore un effort 👀</h2>
                <h3>Retentez une autre réponse dans les cases rouges, puis re-validez</h3>
                <h3>3/5</h3>
                <style>h2,h3{text-align:center; color:white;}</style>`;
            break;
            case 3:
                titre.innerHTML = `<h2>👀 Un peu plus d'effort ! 😢</h2>
                <h3>Retentez une autre réponse dans les cases rouges, puis re-validez</h3>
                <h3>2/5</h3>
                <style>h2,h3{text-align:center; color:white;}</style>`;
            break;
            case 4 :
                titre.innerHTML = `<h2>😢 peut mieux faire ! 😢</h2>
                <h3>Retentez une autre réponse dans les cases rouges, puis re-validez</h3>
                <h3>1/5</h3>
                <style>h2,h3{text-align:center; color:white;}</style>`;
            break;
            case 5:
                titre.innerHTML = `<h2>👎 peut mieux faire ! 👎</h2>
                <h3>Retentez une autre réponse dans les cases rouges, puis re-validez</h3>
                <h3>0/5</h3>
                <style>h2,h3{text-align:center; color:white;}</style>`;
            break;

            default:
                'Oops, cas innatendu.';
        }

    });
}


function couleursFonction(tabValBool){
    for(let j = 0; j< tabValBool.length; j++){

        

        if(tabValBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';
            toutesLesQuestions1[j].style.background = 'lightgreen';
            toutesLesQuestions2[j].style.background = 'lightgreen';
            toutesLesQuestions3[j].style.background = 'lightgreen';
            toutesLesQuestions4[j].style.background = 'lightgreen';
            toutesLesQuestions5[j].style.background = 'lightgreen';
        }else{
            toutesLesQuestions[j].style.background = 'red';
            toutesLesQuestions1[j].style.background = 'red';
            toutesLesQuestions2[j].style.background = 'red';
            toutesLesQuestions3[j].style.background = 'red';
            toutesLesQuestions4[j].style.background = 'red';
            toutesLesQuestions5[j].style.background = 'red';
            //rajouter une classe de css
            toutesLesQuestions[j].classList.add( 'echec');
            toutesLesQuestions1[j].classList.add( 'echec');
            toutesLesQuestions2[j].classList.add( 'echec');
            toutesLesQuestions3[j].classList.add( 'echec');
            toutesLesQuestions4[j].classList.add( 'echec');
            toutesLesQuestions5[j].classList.add( 'echec');

            //enlever la classe de css apres 500ms pour pouvoir reclicker sur valider les réponses
            setTimeout(()=>{
                toutesLesQuestions[j].classList.remove('echec');
                toutesLesQuestions1[j].classList.remove('echec');
                toutesLesQuestions2[j].classList.remove('echec');
                toutesLesQuestions3[j].classList.remove('echec');
                toutesLesQuestions4[j].classList.remove('echec');
                toutesLesQuestions5[j].classList.remove('echec');
            }, 500);
            
        }
        

    }
}


//sur chaque block de question facile nature
toutesLesQuestions.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})

//sur chaque block de question moyen nature
toutesLesQuestions1.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})

//sur chaque block de question difficile nature
toutesLesQuestions2.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})

//sur chaque block de question facile science
toutesLesQuestions3.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})

//sur chaque block de question moyen science
toutesLesQuestions4.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})

//sur chaque block de question difficile science
toutesLesQuestions5.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})











/////////////////////////////choix de niveau///////////////////////////////////////

const button = document.querySelector('#button');

const domaine = document.getElementById('domaine');
 
const container = document.querySelector('.facile-nature');

const container2 = document.querySelector('.moyen-nature');

const container3 = document.querySelector('.difficile-nature');

const container4 = document.querySelector('.facile-science');

const container5 = document.querySelector('.moyen-science');

const container6 = document.querySelector('.difficile-science');

const firstpart = document.querySelector('.firstpart');

// console.log(container);

button.addEventListener('click',()=>{

    
    form.forEach(element => {

    
        element.addEventListener('submit', (e)=>{
            //prevenir le comportement par default
            e.preventDefault();
        
            //Montrer la valeure de la réponse checkée de la premiere question
            // console.log(document.querySelector('input[name="q1"]:checked').value);
            
            //i< 6: parceque on a 5 question dans notre formulaire
            for ( i = 1; i < 6; i++) {
        
                //on peut écrire des expressions comme (i) dans notre code grace au ``
                tableauResultas.push(document.querySelector(`input[name="q${i}"]:checked`).value);
                //console.log(document.querySelector(`input[name="q${i}"]:checked`).value);
                console.log(tableauResultas);
                console.log(verifTableau);
            }

            verifFunc(tableauResultas);
            tableauResultas = [];
            afficherResultats(verifTableau);
            //mettre des couleur pour les div si la reponse est true ou false
            couleursFonction(verifTableau);
            verifTableau = [];
    
        })
        
    

    });


    choix();
    if (niveau_val === 'facile' && domaine_val === 'nature'){

        container.style.display = 'block';
        firstpart.style.display = 'none';


        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }//les résultas de cette fonction donnent un tableau comme ['false', 'true','true','false','false']
        
        }


    }else if(niveau_val === 'moyen' && domaine_val === 'nature'){

        container2.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";


        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses2[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }//les résultas de cette fonction donnent un tableau comme ['false', 'true','true','false','false']
        
        
        }
    }else if (niveau_val === 'difficile' && domaine_val === 'nature'){

        container3.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";
        container2.innerHTML = "";

        
        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses3[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }//les résultas de cette fonction donnent un tableau comme ['false', 'true','true','false','false']
        
        }
    }else if (niveau_val === 'facile' && domaine_val === 'science'){

        container4.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";


        
        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses4[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }//les résultas de cette fonction donnent un tableau comme ['false', 'true','true','false','false']
        
        }

    }else if (niveau_val === 'moyen' && domaine_val === 'science'){

        container5.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";
        container4.innerHTML = "";


        
        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses5[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }
        
        }

    }else if(niveau_val === 'difficile' && domaine_val === 'science'){

        container6.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";
        container4.innerHTML = "";
        container5.innerHTML = "";

        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses6[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }
        
        };

    }else{
        window.open('index.html');
    }  

});

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













