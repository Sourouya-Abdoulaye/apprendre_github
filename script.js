// 1

const etapes=document.querySelectorAll(".etape");
//console.log(etapes);
const formulaire= document.getElementById("formulaire");
console.log(formulaire);

const nom =(document.getElementById("nom"))
const prenom =document.getElementById("prenom");
const email =document.getElementById("email");
const telephone =document.getElementById("telephone");

// nom+" "+prenom+" "+email+" "+telephone




function afficherEtape(index) {
etapes.forEach((etape, i) => {
etape.classList.toggle("active", i === index);
});
}




// 5

let etapeCourante= 0;
let progression=document.querySelector(".progress")

//6

suivant1=document.getElementById("suivant1");
precedent1=document.getElementById("precedent1");

suivant1.addEventListener('click',() => {
    if (nom.value.trim() && prenom.value.trim() ) {  
        etapeCourante=1;
        progression.value="62"
        afficherEtape(etapeCourante);
        
        
    } else {
        alert("il existe des champs vide")
    }
})



//7

suivant2=document.getElementById("suivant2");
precedent2=document.getElementById("precedent2");

suivant2.addEventListener('click',() => {
    
    if (email.value.trim() && telephone.value.trim() ) {
        etapeCourante=2;
        progression.value="100"
        afficherEtape(etapeCourante);
        recapitulatif.innerHTML=` <strong> Nom</strong>: ${nom.value} <br>
         <strong> Prenom</strong>: ${prenom.value} <br> 
         <strong>Email</strong>: ${email.value} <br> 
         <strong>Tel</strong>: ${telephone.value} `
         
         console.log(recapitulatif.textContent);
        
       

    } else {
        alert("il existe des champs vide")
    }
})

 
//8

precedent1.addEventListener('click',() => {
    progression.value="32"
        etapeCourante= 0;
        afficherEtape(etapeCourante);
    }
)

precedent2.addEventListener('click',() => {
        progression.value="62"
        etapeCourante=1
        afficherEtape(etapeCourante);
        recapitulatif=document.querySelector(".recap");
 

    }
)




// 9


//boutton=document.querySelector(".btn.valider");
formulaire.addEventListener('submit',(event) => { 
                etapeCourante=3;  
                afficherEtape(etapeCourante)
                event.preventDefault() 
        
                window.setTimeout(() => { 
                    etapeCourante=0
                    progression.value="32"
                    afficherEtape(etapeCourante)
                     }, 3000) 
                    formulaire.reset()            
                })







