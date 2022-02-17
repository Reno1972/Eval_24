// Etape 1 - Sélectionner nos éléments
// Etape 2 - Cacher l'erreur
// Etape 3 - Générer un nombre aléatoire
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
// Etape 5 - Agir à l'envoi du formulaire
// Etape 6 - Créer la fonction vérifier
// Pour ceux qui ne sont pas familiers avec ce jeu, il s'agit de
// deviner le prix d'un produit. Ici, trois possibilités :
// - C'est plus cher
// - C'est moins cher
// - C'est le juste prix !
// Dans cette version du "Juste prix", nous générerons un
// prix aléatoire, et nous calculerons le nombre de coups
// qu'il faut à un joueur pour retrouver le juste prix.
// Ainsi, il pourra se confronter à ses amis pour tenter de
// voir qui retrouve le bon prix avec le moins de coups
// possibles !
// Je vous attends dans la prochaine session !




// ---- Variables ----

let buttonSelector = document.querySelector("#btn");
let numberSelector = document.querySelector("#number");
let message = document.querySelector(".message");
let compteur = document.querySelector(".compt");
let randomNumber= Math.floor(Math.random()*1000);
let compt = 0;


// ---- Clicks ----

buttonSelector.addEventListener("click", verfification);


// ---- Fonctions ----

function increment(){
    compt ++;
    compteur.innerText=compt;
}

function verfification(){
    if(numberSelector.value<0 || numberSelector.value>1000 //|| isNaN(numberSelector){
        message.textContent="Attention, le nombre n'est pas compris entre 0 et 1000 !"
    }else{
        let inputSelector = numberSelector.value;
        if(inputSelector<randomNumber){
            increment; //tu va avoir un soucis car tu à oublier les () à la fin pour appeler la fonction
            message.innerText="Votre nombre est trop petit !";
        }else if(inputSelector>randomNumber){
            increment;
            message.innerText="Votre nombre est trop grand !";}
        else{
            increment;
            message.textContent=`Bravo, vous avez trouvé le nombre exact ! il t'a fallus ${compt} coups pour trouvé` ; 
        }
    }

}






