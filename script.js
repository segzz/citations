//--------------------------------------------bloc correspondant à l'ouverture et fermeture du programme.

var expand = document.getElementById("expand");		//cible l'élément #expand  correspond à la commande d'ouverture ou fermeture du programme

expand.addEventListener("click",function(e){		//ecoute l'évènement click sur #expand

var endMessage = document.getElementById("endMessage");		// message à bientôt

var container = document.getElementById("container");		// div à afficher ou masquer via #expand

	if (e.target.innerHTML==="+") {
		e.target.innerHTML="-";
		endMessage.innerHTML="";
		container.style.display="block";
	} else {
		e.target.innerHTML="+";
		endMessage.innerHTML="A bientôt !"
		container.style.display="none";
		content.innerHTML="";
	}

},false);

//--------------------------------------------bloc correspondant à la partie permettant la génération des citations aléatoire.

var content = document.getElementById("content");

function genererCitation(nombre){   //Fonction qui permet de générer les citations

  var citations1, citations2, citations3, citations4;  //initialisation des citations

  var random1, random2, random3, random4;


  if (nombre == "1") {   //Choix de la première catégorie
    citations1 = ["Avec", "Dans le but de pallier à", "Du fait de"];
    citations2 = [" la restriction", " l'orientation"," la baisse de confiance"];
    citations3 = [" actuelle"," observée", " que nous constatons"];
    citations4 = [" nous ne penserons jamais de la même façon"," il faut avancer pour ne pas perdre l'équilibre", " ils devraient dormir un peu plus"];

    
  } else if (nombre == "2") {  //Choix de la seconde catégorie
    citations1 = ["Pour réagir face à", "Quelle que soit", "Malgrès"];
    citations2 = [" la crise de cette fin de siècle", " la bêtise humaine"," la conjoncture d'aujourd'hui"];
    citations3 = [" il faut étudier toutes les solutions"," il serait bon d'imaginer le meilleur", " il faut partir en voyage"];
    citations4 = [" imaginables à long terme"," pour le futur de nos enfants", " doucement mais surement"];
    
  } else {
    alert("Veuillez choisir une catégorie"); //Message d'alerte choix d'un catégorie obligatoire

  }

  random1 = citations1[Math.floor(Math.random() * citations1.length)];   // permet de générer aléatoirement la première partie d'une citation
  random2 = citations2[Math.floor(Math.random() * citations2.length)];   // permet de générer aléatoirement la deuxième partie d'une citation
  random3= citations3[Math.floor(Math.random() * citations3.length)];   // permet de générer aléatoirement la troisième partie d'une citation
  random4= citations4[Math.floor(Math.random() * citations4.length)];   // permet de générer aléatoirement la dernière partie d'une citation
  var resultat = random1 + random2 + random3 + random4;   // résultat des 4 partie générées
    

  return resultat ;  // affiche le resultat
}

//--------------------------------------------bloc correspondant à la partie permettant l'affichage des citations par le biais du bouton Générer.

var form = document.querySelector("#form1");          // cible le formulaire

form.addEventListener("submit",function(e){     // ecoute l'évènement submit sur le bouton submit
  e.preventDefault();               // empêche l'envoi du formulaire
  content.innerHTML="";
  var nb = document.querySelector("input[type=radio]:checked");   // cible le bouton radio sélectionné
  var type = document.getElementById("type");             // cible la liste select

  if (nb) {                               // si il y a au moins un bouton radio coché (1 par défaut)                
    nb=parseInt(nb.value);                      // combien de citations
    type=parseInt(type.options[type.selectedIndex].value);      // quelle catégorie de citation a été choisi

    for (i = 0; i < nb; i++) {          // boucle sur le nombre de citation à générer
      var citation = genererCitation(type); // appel la fonction qui va composer une citation
      var citationElement = document.createElement("p");  //crée l'élément p
      citationElement.innerHTML = citation;  // insere la variable citation dans citationElement
      content.appendChild(citationElement);  // fait apparaitre la div "content" en dernier enfant à l'intérieur du body
    }
  }
},false);