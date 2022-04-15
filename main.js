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


let ingresarMonto = prompt('Coloque el tipo de COMBUSTIBLE que quiere repostar. \nPresione Pagar  para finalizar y proceder a la carga. \n 1-Gasolina 98 1.85€ L \n 2-Gasolina 95 1.70€ L \n 3-Gasoleo A 1.89€ L  \n 4-Gasoleo B 1.80€ L  \n 5-Pagar\n 0-Cancelar')
let montoCarga = prompt('Ingrese el monto que desea cargar')
let gasolina98 = 1.85
let gasolina95 = 1.70
let gasoleoA = 1.89
let gasoleoB = 1.80
let cancelar = 0
let pagar = 5



function agregarCarga() {


    switch (ingresarMonto) {
        case '1':
            alert('Producto seleccionado : Gasolina 98');
            alert('monto carga ' + montoCarga)
            alert('Total a pagar :' + (gasolina98 * montoCarga) + ' €');
            break;
        case '2':
            alert('Producto seleccionado : Gasolina 95');
            alert('monto carga ' + montoCarga);
            alert('Total a pagar :' + (gasolina95 * montoCarga) + '€');
            break;

        case '3':
            alert('Producto seleccionado : GasoleoA');
            alert('monto carga ' + montoCarga);
            alert('Total a pagar :' + (gasoleoA * montoCarga) + '€');
            break;
        case '4':
            alert('Producto seleccionado : GasoleoB');
            alert('monto carga ' + montoCarga);
            alert('Total a pagar :' + (gasoleoB * montoCarga) + '€');
            break;

        

    }
}




agregarCarga()