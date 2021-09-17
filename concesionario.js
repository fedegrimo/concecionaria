let autos = require  ("./autos");

let concesionaria = {
   autos: autos,
 
   buscarAuto: function (patente) {
    let nuevaPatente=null;
     autos.forEach(function(val){
            if (val.patente == patente){
                nuevaPatente = val.patente;
            } 
      });
      return nuevaPatente;
   },
   buscarAutoFor: function (patente) {
    
    for (let i=0; i< autos.length; i++){
           if (autos[i].patente == patente){
              return autos[i].patente;
           }  else {
               return null;
           }
     }
     
  }
}

console.log(concesionaria.buscarAuto("APL1s23"));