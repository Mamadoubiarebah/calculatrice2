// selection des elements
let display1 = document.querySelector('.display-1');
let display2 = document.querySelector('.display-2');
let temp_result = document.querySelector('.temp-result');
let nombre = document.querySelectorAll('.nombre');
let operation = document.querySelectorAll('.operation');
let egal = document.querySelector('.egal');
let button_c = document.querySelector('.btn-c');
let button_ce  = document.querySelector('.btn-ce')

// declaration et initialisation des variables
 let nbr1 = '';  //variable pour le nombre 1 
let nbr2 = '';   //variable pour le nombre 2
let resultat = null;  //variable pour le resultat
let operateur = '' ; //variable pour la derniere operation
let point = false ; //variable pour savoir si le nombre est decimal


 
// boucle pour parcourir tous les nombres

    nombre.forEach( number => {
        number.addEventListener('click' , (e) => {
            if( e.target.innerText === '.' && !point){
                point = true;
            }else if(e.target.innerText === '.' && point){
                return
            }
                nbr2 += e.target.innerText ;
                display2.innerText = nbr2;
        })
    })
    // boucle pour parcourir les operateur 
    operation.forEach(signe => {
        signe.addEventListener('click' , (e) => {
            if(!nbr2) return ;
            point = false;
            const nomOperateur = e.target.innerText
            if(nbr1 && nbr2 && nomOperateur){
                calculatrice();

            }else{
                resultat = parseFloat(nbr2);
            }
            netoyerVar(nomOperateur);
            operateur = nomOperateur
        })
    })

    // fonction netoyer variable 

    function netoyerVar( nom = ''){
        nbr1 +=nbr2 + ' ' + nom + ' '
        display1.innerText = nbr1;
        display2.innerText = '';
        nbr2 = ''
        temp_result.innerText = resultat

    }
    // fonction calculatrice principale
      
    function calculatrice(){
        if(operateur === 'X'){
            resultat = parseFloat(resultat)* parseFloat(nbr2);
        }
      else if(operateur == '+'){
            resultat = parseFloat(resultat) + parseFloat(nbr2);
        }
        else if(operateur === '-'){
            resultat = parseFloat(resultat) - parseFloat(nbr2);
        }
        else if(operateur === '/'){
            resultat = parseFloat(resultat) / parseFloat(nbr2);
        }
        else if(operateur === '%'){
            resultat = parseFloat(resultat) % parseFloat(nbr2);
        }
    }

    // Fonction de l'egalit??
    egal.addEventListener('click',() => {
        if(!nbr1 || !nbr2) {
            return;
        }
        point = false;
        calculatrice();
        netoyerVar();
        display2.innerText = resultat;
        nbr2 = resultat;
        nbr1 = '';
    })

    // Fonction pour tout effacer
    button_ce.addEventListener('click', () => {
        // Effacer le contenu de tout les elements
        nbr1 = '';
        nbr2 = '';
        display1.innerText = '';
        display2.innerText = '';
        resultat = '';
        temp_result.innerText = '';
    })

    // Fonctoin pour effacer le dernier element
    button_c.addEventListener('click', () => {
        display2.innerText = '';
        nbr2 = '';
    })

