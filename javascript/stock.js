class Producto{
    constructor(name, detail, price, quantity,year){
    this.name = name;
    this.detail = detail ;
    this.price = price;
    this.quantity = quantity;
    this.year = year;

}

}

class UI {
    addProducto( producto){
       const listaProducto = document.getElementById("product-list");
       const element = document.createElement('div')
       element.innerHTML =`
       <div class= 'card text-center mb-4'> 
       <div class= 'card-body'> 
       <strong> Producto</strong>: ${producto.name} 
       <strong> Detalle</strong>: ${producto.detail} 
       <strong> Precio</strong>: ${producto.price} 
       <strong> Cantidad</strong>: ${producto.quantity} 
       <strong> Año</strong>: ${producto.year} 
       <a href='#' class='btn btn-danger' name='eliminar'> Eliminar </a>
       </div>
       </div>
       `;
       listaProducto.appendChild(element);


    }

    resetFormulario(){
        document.getElementById('product-form').reset();


    }
    deleteProducto(element){
        if(element.name==='eliminar'){
            console.log(element.parentElement.parentElement.parentElement.remove());
            this.showMessage('Producto eliminado', 'warning')
        }

    }
    showMessage(message, cssClas){
       const div= document.createElement('div');
       div.className= `alert alert-${cssClas} mt-4`;
       div.appendChild(document.createTextNode(message));
       const container =document.querySelector('.container');
       const app=document.querySelector('#APP');
       container.insertBefore(div, app);

    }

}


//DOM eventos
document.getElementById("product-form")
.addEventListener('submit' , function(e){
    const name =document.getElementById('name').value;
    const detail =document.getElementById('detail').value;
    const price =document.getElementById('price').value;
    const quantity =document.getElementById('quantity').value;
    const year =document.getElementById('year').value;

    const producto = new Producto( name, detail, price, quantity, year);
    
    const ui = new UI ();
    if(name ===''|| detail===''|| price===''|| quantity===''|| year==='') {
        return ui.showMessage('Completara los espacios vacios', 'danger');
        
    }




    ui.addProducto(producto);
    ui.resetFormulario();
    ui.showMessage(`Producto agregado`,`success`);




    e.preventDefault();
}); 

document.getElementById("product-list").addEventListener('click',function(e){
    const ui = new UI ();
    ui.deleteProducto(e.target)

})
