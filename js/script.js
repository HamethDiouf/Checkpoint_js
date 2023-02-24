       //---------image 1
    let    compteur    =    0;

    function diminuer(){
    compteur = compteur -1;  
    document.getElementById('compteur').innerHTML = compteur;   
            }
            function   ajouter(){
            compteur   =   compteur   +1;
            document.getElementById('compteur').innerHTML = compteur;
            }

        //------------image 2 
        let compteurs = 0;

        function moins(){
        compteurs = compteurs -1;  
        document.getElementById('compteurs').innerHTML = compteurs;                
              }
              function plus(){
              compteurs = compteurs +1;
              document.getElementById('compteurs').innerHTML = compteurs;
              }

        //---------------image3
        let compteurx = 0;
        function minus(){ 
        compteurx = compteurx - 1;
        document.getElementById('compteurx').innerHTML = compteurx;
              }
              function add(){
              compteurx = compteurx +1;
              document.getElementById('compteurx').innerHTML = compteurx;              
              }

        //_______icon
        //-------coeur1
        function coeur(){
        var coeur = document.getElementById('coeur');
        if(coeur.style.color == "red") {
           coeur.style.color = "grey";
        }
        else{
             coeur.style.color = "red";
        }
        }

    //-------coeur2
                  function coeur2(){
                  var coeur2 = document.getElementById('coeur2');
                  if(coeur2.style.color == "red") {
                     coeur2.style.color ="grey";
                  }
                  else{
                       coeur2.style.color = "red";
                  }
                  }
   //--------coeur3
        function coeur3(){
        var coeur3 = document.getElementById('coeur3');
        if(coeur3.style.color == "red") {
           coeur3.style.color = "grey";
        }
        else{
             coeur3.style.color = "red";
        }
        }

   //----bouton supprimer1
    
        function supprimer(){
            document.getElementById('supprimer').remove()
        }

    //---bouton supprimer2
              function supprimer2(){
                  document.getElementById('supprimer2').remove()
              }

    //----bouton supprimer3
        function supprimer3(){
            document.getElementById('supprimer3').remove()
        }
  