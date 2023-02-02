

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

const reponses7 = ['b','a','c','a','b'];

const reponses8 = ['a','c','a','b','c'];

const reponses9 = ['b','c','a','b','c'];

const reponses10 = ['a','b','a','b','c'];

const reponses11 = ['c','b','a','a','c'];

const reponses12 = ['c','a','a','b','c'];

const reponses13 = ['a','b','a','c','b'];

const reponses14 = ['a','c','a','b','a'];

const reponses15 = ['b','c','a','a','b'];


//mettre des emojis pour rendre le formulaire plus fun
const emojis = ['✅','🌟','👀','😢','👎'];
const resultats = document.querySelectorAll('.resultats');
const toutesLesQuestions = document.querySelectorAll('.question-block');
const toutesLesQuestions1 = document.querySelectorAll('.question-block1');
const toutesLesQuestions2 = document.querySelectorAll('.question-block2');
const toutesLesQuestions3 = document.querySelectorAll('.question-block3');
const toutesLesQuestions4 = document.querySelectorAll('.question-block4');
const toutesLesQuestions5 = document.querySelectorAll('.question-block5');
const toutesLesQuestions6 = document.querySelectorAll('.question-block6');
const toutesLesQuestions7 = document.querySelectorAll('.question-block7');
const toutesLesQuestions8 = document.querySelectorAll('.question-block8');
const toutesLesQuestions9 = document.querySelectorAll('.question-block9');
const toutesLesQuestions10 = document.querySelectorAll('.question-block10');
const toutesLesQuestions11 = document.querySelectorAll('.question-block11');
const toutesLesQuestions12 = document.querySelectorAll('.question-block12');
const toutesLesQuestions13 = document.querySelectorAll('.question-block13');
const toutesLesQuestions14 = document.querySelectorAll('.question-block14');
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
            toutesLesQuestions[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions1[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions2[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions3[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions4[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions5[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions6[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions7[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions8[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions9[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions10[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions11[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions12[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions13[j].style.background = 'rgb(49, 85, 49)';
            toutesLesQuestions14[j].style.background = 'rgb(49, 85, 49)';
            
        }else{
            toutesLesQuestions[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions1[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions2[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions3[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions4[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions5[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions6[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions7[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions8[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions9[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions10[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions11[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions12[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions13[j].style.background = 'rgb(126, 60, 60)';
            toutesLesQuestions14[j].style.background = 'rgb(126, 60, 60)';
            //rajouter une classe de css
            toutesLesQuestions[j].classList.add( 'echec');
            toutesLesQuestions1[j].classList.add( 'echec');
            toutesLesQuestions2[j].classList.add( 'echec');
            toutesLesQuestions3[j].classList.add( 'echec');
            toutesLesQuestions4[j].classList.add( 'echec');
            toutesLesQuestions5[j].classList.add( 'echec');
            toutesLesQuestions6[j].classList.add( 'echec');
            toutesLesQuestions7[j].classList.add( 'echec');
            toutesLesQuestions8[j].classList.add( 'echec');
            toutesLesQuestions9[j].classList.add( 'echec');
            toutesLesQuestions10[j].classList.add( 'echec');
            toutesLesQuestions11[j].classList.add( 'echec');
            toutesLesQuestions12[j].classList.add( 'echec');
            toutesLesQuestions13[j].classList.add( 'echec');
            toutesLesQuestions14[j].classList.add( 'echec');

            //enlever la classe de css apres 500ms pour pouvoir reclicker sur valider les réponses
            setTimeout(()=>{
                toutesLesQuestions[j].classList.remove('echec');
                toutesLesQuestions1[j].classList.remove('echec');
                toutesLesQuestions2[j].classList.remove('echec');
                toutesLesQuestions3[j].classList.remove('echec');
                toutesLesQuestions4[j].classList.remove('echec');
                toutesLesQuestions5[j].classList.remove('echec');
                toutesLesQuestions6[j].classList.remove('echec');
                toutesLesQuestions7[j].classList.remove('echec');
                toutesLesQuestions8[j].classList.remove('echec');
                toutesLesQuestions9[j].classList.remove('echec');
                toutesLesQuestions10[j].classList.remove('echec');
                toutesLesQuestions11[j].classList.remove('echec');
                toutesLesQuestions12[j].classList.remove('echec');
                toutesLesQuestions13[j].classList.remove('echec');
                toutesLesQuestions14[j].classList.remove('echec');
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

//sur chaque block de question facile monde
toutesLesQuestions6.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})

//sur chaque block de question moyen monde
toutesLesQuestions7.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})

//sur chaque block de question difficile monde
toutesLesQuestions8.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})

//sur chaque block de question facile animaux
toutesLesQuestions9.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})

//sur chaque block de question moyen animaux
toutesLesQuestions10.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})

//sur chaque block de question difficile animaux
toutesLesQuestions11.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})

//sur chaque block de question facile sport
toutesLesQuestions10.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})

//sur chaque block de question moyen sport
toutesLesQuestions11.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})

//sur chaque block de question difficile sport
toutesLesQuestions12.forEach(item =>{
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

const container7 = document.querySelector('.facile-monde');

const container8 = document.querySelector('.moyen-monde');

const container9 = document.querySelector('.difficile-monde');

const container10 = document.querySelector('.facile-animaux');

const container11 = document.querySelector('.moyen-animaux');

const container12 = document.querySelector('.difficile-animaux');

const container13 = document.querySelector('.facile-sport');

const container14 = document.querySelector('.moyen-sport');

const container15 = document.querySelector('.difficile-sport');

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
                // console.log(document.querySelector(`input[name="q${i}"]:checked`).value);
                // console.log(tableauResultas);
                // console.log(verifTableau);
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
        
        }

    }else if(niveau_val === 'facile' && domaine_val === 'monde'){

        container7.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";
        container4.innerHTML = "";
        container5.innerHTML = "";
        container6.innerHTML = "";

        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses7[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }
        
        }
    
    }else if(niveau_val === 'moyen' && domaine_val === 'monde'){

        container8.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";
        container4.innerHTML = "";
        container5.innerHTML = "";
        container6.innerHTML = "";
        container7.innerHTML = "";

        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses8[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }
        
        }
    
    }else if(niveau_val === 'difficile' && domaine_val === 'monde'){

        container9.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";
        container4.innerHTML = "";
        container5.innerHTML = "";
        container6.innerHTML = "";
        container7.innerHTML = "";
        container8.innerHTML = "";

        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses9[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }
        
        }
    }else if(niveau_val === 'facile' && domaine_val === 'animaux'){

        container10.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";
        container4.innerHTML = "";
        container5.innerHTML = "";
        container6.innerHTML = "";
        container7.innerHTML = "";
        container8.innerHTML = "";
        container9.innerHTML = "";

        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses10[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }
        
        }
    }else if(niveau_val === 'moyen' && domaine_val === 'animaux'){

        container11.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";
        container4.innerHTML = "";
        container5.innerHTML = "";
        container6.innerHTML = "";
        container7.innerHTML = "";
        container8.innerHTML = "";
        container9.innerHTML = "";
        container10.innerHTML = "";

        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses11[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }
        
        }

    }else if(niveau_val === 'difficile' && domaine_val === 'animaux'){

        container12.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";
        container4.innerHTML = "";
        container5.innerHTML = "";
        container6.innerHTML = "";
        container7.innerHTML = "";
        container8.innerHTML = "";
        container9.innerHTML = "";
        container10.innerHTML = "";
        container11.innerHTML = "";

        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses12[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }
        
        }

    }else if(niveau_val === 'facile' && domaine_val === 'sport'){

        container13.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";
        container4.innerHTML = "";
        container5.innerHTML = "";
        container6.innerHTML = "";
        container7.innerHTML = "";
        container8.innerHTML = "";
        container9.innerHTML = "";
        container10.innerHTML = "";
        container11.innerHTML = "";
        container12.innerHTML = "";

        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses13[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }
        
        }
    
    }else if(niveau_val === 'moyen' && domaine_val === 'sport'){

        container14.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";
        container4.innerHTML = "";
        container5.innerHTML = "";
        container6.innerHTML = "";
        container7.innerHTML = "";
        container8.innerHTML = "";
        container9.innerHTML = "";
        container10.innerHTML = "";
        container11.innerHTML = "";
        container12.innerHTML = "";
        container13.innerHTML = "";

        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses14[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }
        
        }

    }else if(niveau_val === 'difficile' && domaine_val === 'sport'){

        container15.style.display = 'block';
        firstpart.style.display = 'none';
        container.innerHTML = "";
        container2.innerHTML = "";
        container3.innerHTML = "";
        container4.innerHTML = "";
        container5.innerHTML = "";
        container6.innerHTML = "";
        container7.innerHTML = "";
        container8.innerHTML = "";
        container9.innerHTML = "";
        container10.innerHTML = "";
        container11.innerHTML = "";
        container12.innerHTML = "";
        container13.innerHTML = "";
        container14.innerHTML = "";

        function verifFunc(tabResultats) {

            for(let a = 0; a< 5; a++){
        
                if(tabResultats[a] === reponses15[a]){
                    verifTableau.push(true);
                }else{
                    verifTableau.push(false);
                }
            }
        
        }

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


const retour = document.querySelectorAll('.retour');
const azerty = document.querySelector('.azerty');

retour.forEach(button => {
    button.addEventListener('click',()=>{
        //refresh the page
        window.location.reload();
        firstpart.style.display = 'block';
        azerty.style.display = 'none';

    })
});







