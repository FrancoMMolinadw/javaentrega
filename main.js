//1 entrega

/*
let numero=0;
while(numero < 1000){
    numero++;
    console.log(numero);
    if(numero==20)
    {
    break;
    }
}*/

//2 entrega 
/*
let ingresarTipo = prompt('Coloque el tipo de COMBUSTIBLE que quiere repostar. \nPresione: \n 1-Gasolina 98 1.85€ L \n 2-Gasolina 95 1.70€ L \n 3-Gasoleo A 1.89€ L  \n 4-Gasoleo B 1.80€ L  ');
let montoCarga = prompt('Ingrese el monto que desea cargar');
let gasolina98 = 1.85
let gasolina95 = 1.70
let gasoleoA = 1.89
let gasoleoB = 1.80
let cancelar = 0
let pagar = 5 


function agregarCarga() {

    while(ingresarTipo!=0){

        if(ingresarTipo == 1) {

            alert('Producto seleccionado : Gasolina 98');

            alert('monto carga ' + montoCarga + '€')

            alert('Total a pagar :' + parseFloat(gasolina98 * montoCarga) + ' €');

        }else if(ingresarTipo == 2){

            alert('Producto seleccionado : Gasolina 95');

            alert('monto carga ' + montoCarga + '€');

            alert('Total a pagar :' + parseFloat(gasolina95 * montoCarga) + '€');

        }else if(ingresarTipo== 3){

            alert('Producto seleccionado : GasoleoA');

            alert('monto carga ' + montoCarga + '€');

            alert('Total a pagar :' + parseFloat(gasoleoA * montoCarga) + '€');

        }else if(ingresarTipo == 4){

            alert('Producto seleccionado : GasoleoB');

            alert('monto carga ' + montoCarga + '€');

            alert('Total a pagar :' + parseFloat(gasoleoB * montoCarga) + '€');

        }else{  (ingresarTipo != 1 || ingresarTipo != 2 || ingresarTipo != 3 || ingresarTipo != 4 )

            alert("No se encontró producto")
            break

        }

         let ingresarMonto = prompt('Marque la opcion \n 5-Pagar\n 0-Cancelar')

        if( ingresarMonto == pagar ) {
            alert(' Procesando el pago');
            alert('Transaccion completada ya puede repostar');
            break
        }
        else if ( ingresarMonto == cancelar ) {
            alert('Transaccion cancelada')
        }


    }

}
 
agregarCarga()*/


// 3 entrega (array)

/*
// APLICACION DE DESSCUENTO DEL ESTADO.
const descuento = 0.20;

// CREACION DEL ARRAY A BASE DEL CONSTRUCTOR.
const combustibles =[];


//CONSTRUCTOR.
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.agregarAlArray();
    }


    agregarAlArray(){
        combustibles.push(this);
    }

    restarDescuento(){
         this. precio = this.precio - 0.20; 
    }

    vender() {
        this.vendido = true;
    }


}

//CORROBORA SI EL ARRAY SE ESTA COMPLETANDO
console.log(combustibles);



//AGREGANDO PRODUCTOS.
const producto1= new Producto ('gasolina98', 1.83 );
const producto2= new Producto ('gasolina95', 1.87 );
const producto3= new Producto ('gasoleoA', 1.89 );
const producto4= new Producto ('gasoleoB', 1.85 );

//VER LOS DATOS DEL PRODUCTO
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);

//APLICAR DESCUENTO AL PRODUCTO
producto1.restarDescuento();
producto2.restarDescuento();
producto3.restarDescuento();
producto4.restarDescuento();

console.log(combustibles[0].nombre);*/