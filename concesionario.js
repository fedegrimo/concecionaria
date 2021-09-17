let autos = require  ("./autos");

let concesionaria = {
   autos: autos,
 
   buscarAuto: function (patente) {
    let autoEncontrado=null;
     autos.forEach(function(val){
            if (val.patente == patente){
                autoEncontrado = val ;
            } 
      });
      return autoEncontrado;
   },
   venderAuto: patente => {
    let obj = concesionaria.buscarAuto(patente);
    if (obj != null){
        return obj.vendido;
    }
    
   },
   autosParaLaVenta : () =>{}
}

concesionaria.venderAuto('APLs123');