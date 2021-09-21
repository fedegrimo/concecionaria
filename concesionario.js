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
        obj.vendido = true;
    }
    
   },
   autosParaLaVenta : () =>{
    autos.filter(value =>{
        if (!value.vendido){
            console.log(value);
        }
    })
   },
   autosNuevos : () =>{
    autos.filter(value => {
        if (value.km < 100){
            console.log(value);
        }
    })
   },
   listaDeVentas : () => {
       autos.filter(value =>{
           if (value.vendido === true){
            console.log(value);
           }
       });
   },
   totalDeVentas : () => {
       let totalVentas = autos.reduce((acum,value) =>{
           if ((value.vendido == true) && (!isNaN(value.precio))){
                return  acum + value.precio;
           }
       });
       console.log(totalVentas);
   },
   puedeComprar : (autos,persona) => {
       var resultado;
       autos.forEach(value => {
           let valorCuota = value.precio / value.cuotas;
           if ((persona.capacidadDePagoTotal <= value.precio) && (persona.capacidadDePagoEnCuotas > valorCuota )){
               resultado = true;
           }
       });
       console.log(resultado);
   },
   autosQuePuedeComprar : (autos,persona) => {
    let puedeCompras = autos.filter(value => {
        let valorCuota = value.precio / value.cuotas;
        if ((persona.capacidadDePagoTotal <= value.precio) && (persona.capacidadDePagoEnCuotas > valorCuota )){
            return value;
        }
    });
    console.log(puedeCompras);
}

}

var persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    };
concesionaria.venderAuto('APL123');
concesionaria.autosQuePuedeComprar(autos,persona);