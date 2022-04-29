//CRREACION ARRAY VACIO
const raqueta=[];
// variable iva constante.
const iva = 1.21;

//CLASE CONSTRUCTORA -OBEJTO -METODO
class Raquetas {
    constructor(marca,modelo,peso,patron,aro,precio){
        this.marca = marca.toUpperCase();
        this.modelo = modelo;
        this.peso = peso,
        this.patron = patron;
        this.aro = aro;
        this.precio = parseFloat(precio);
        
        this.iva= this.sumarIva();

    }
    
     sumarIva(){
    return this.precio * iva;
}


    vender(){
        this.vendido = true
    }

}


//raquetasHEAD
raqueta.push (new Raquetas ('Head', 'Speed Pro', 310 +'g', '18x20', 100, 229.95 ));
raqueta.push (new Raquetas ('Head', 'Prestige', 300 +'g', '16x19', 99, 251.95 ));
raqueta.push (new Raquetas ('Head', 'Radical Pro', 315 +'g', '16x19', 98, 184.95 ));
//raquetasBABOLAT
raqueta.push  (new Raquetas ('Babolat', 'Pure Drive', 300 +'g', '16x19', 98, 186.85 ));
raqueta.push  (new Raquetas ('Babolat', 'Pure Strike', 300 +'g', '18x20', 100, 164.95 ));
raqueta.push (new Raquetas ('Babolat', 'Pure Aero', 270 +'g', '16x19', 100, 199.95 ));

//raquetasWILSON
raqueta.push  (new Raquetas ('Wilson', 'Clash V2', 265 +'g', '16x19', 100, 205.95 ));
raqueta.push (new Raquetas ('Wilson', 'Pro Staff', 270 +'g', '18x20', 97, 181.56 ));
raqueta.push  (new Raquetas ('Wilson', 'Blade 98', 305 +'g', '18x20', 95, 24.95 ));



//verificacion de datos array
console.log (raqueta);

//funcio buscar baratos 
/*let buscar= prompt ('BUSCA POR PRECIO HASTA:');
const raquetaBaratas= raqueta.filter((element)=> element.precio < buscar)
console.log(raquetaBaratas)*/


let ingreseMarca = prompt("Ingrese marca \nWilson \nHead \nBabolat").toUpperCase()

const raquetasFiltro = raqueta.filter((element)=> element.marca == ingreseMarca)

console.log(raquetasFiltro);

//buscar rango de precio Utilizando prompt



/*if (Number(buscar) == buscar);
if(buscar <=200 && buscar >100){
    alert(' tus opciones son:'+ [raquetaBaratas]);
    

}else if( buscar >=201 ){
    alert('tu opciones son')
}

else{
    alert ('no tenemos raquetas por ese precio ')
}
*/


