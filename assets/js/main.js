
 $(window).on('load', function() {
  cargar_arreglo_car();


});

 $('.close_quickview').on('click', function(){
        $('.product_quickview').removeClass('active');
         $('.product_quickview2').removeClass('active');
         
        $('body').css('overflow-y', 'auto')
         $('#casilla_buscar_productos').focus()
  
    })
  const prototipoCarrito = {
	  agregarProducto: function(producto){
		if(!this.productos){
		 this.productos = [producto]
		} else {
		 this.productos.push(producto);
		}
	  },
	
	  obtenerPrecioTotal: function(){
		return this.productos.reduce((total, p) => total + p.precio, 0);
	  }
	
	  
	}

//carrito de compras


function agregar_producto_car(){
    
    let cant1=new Intl.NumberFormat().format($('#cantidades_producto').html());
    let cant2=new Intl.NumberFormat().format($('#cantidadesx').val());
   //  document.getElementById("cantidades_producto").innerHTML=1;
	if($('#cantidades_producto').html()!=""){
	    
	    let maximo=mod_cantidades(cant1, cant2);
	    
		if(maximo===false){ 
		  
    		const id=document.getElementById('item_producto').value;
    		//const referencia=document.getElementById('referencia').value
    		const detalle=document.getElementById('detalle').value
    		const precio=document.getElementById('precio').value;
    		const foto=document.getElementById('foto').value;
    		const tags=document.getElementById('tags').value;
    		cargar_carro( id, detalle, precio,  foto, "Agregado_ppl", tags);
    		
    		$('#cantidades_producto').val('1');
    	
    		$('#myModal3').modal('hide');	
		}
		}else{
		    alert("Coloque la cantidad a Comprar");
		}
		
		
	}


function mod_cantidades(cant1, cant2){
   let maximo = false;
   
   
   /*  if(parseInt(cant1)>parseInt(cant2)){
	        
	        document.getElementById("cantidades_producto").value = cant2;
	        
	        alert('La cantidad solicitada de este Producto, es superior a la cantidad  disponible de mismo. Se modificó su solicitud, a la cantidad disponible');
	   
	   
	       maximo=true;
	      
	      
	  }*/
	  
	  
	  
	  return maximo;
}

function 	imprimir_carro_vacio(){
    let valores=`<ul classs=hopping-cart-items">
                              <li class="clearfix">
                               
                                <span class="item-quantity">No hay Productos en tu Carrito!</span>
                                <br/>
                                <br/><br/>
                              </li>

                            </ul>`
    document.getElementById("total_ticket").innerHTML=0;
    document.getElementById("total_ticket2").innerHTML=0;
	document.getElementById("muestra").innerHTML=valores;
	document.getElementById("muestra2").innerHTML=valores;
}
function imprimir_carrito(arreglo_car, total){
      var valores='';
     var cantidad_valores= arreglo_car.productos.length
     document.querySelector('.pops2').innerHTML= cantidad_valores,
   valores+="<ul class='shopping-cart-items'>";
  
         arreglo_car.productos.forEach((datos)=>{

    	 var codigo1 = datos.id;
    	 var codigo2 = '"'+codigo1+'"';
         var descripcion1 = datos.descripcion+ " ("+codigo1+")";
          var descripcion2 = '"'+descripcion1+'"';
          
         var precio1 = datos.precio;
         
         var cant1 = datos.cant;
         var foto1 = datos.foto;
         var subtotal1=precio1*cant1;
         precio1=new Intl.NumberFormat().format(datos.precio);
          subtotal1=new Intl.NumberFormat().format(subtotal1);
         
         
         valores+= ` 
                              <li class="clearfix">
                                <img style="width:75; height:60px" src='${foto1}' alt="" />
                                <span class="item-name">${descripcion1.slice(0, 18)}</span>
                                <span class="item-price">$ ${precio1}</span>
                                <span class="item-quantity">/ Cantidad: ${cant1}</span>
                              </li>
                              
                              
                        
                             
                            `;
    	
    
    })
      
      total_monto=new Intl.NumberFormat().format(total);
        
   
        
   
     valores+="</ul>";
     
      document.getElementById("total_ticket").innerHTML=total_monto;
      document.getElementById("total_ticket2").innerHTML=total_monto;
	  document.getElementById("muestra").innerHTML=valores;
      document.getElementById("muestra2").innerHTML=valores;
}
    
    



 function mensaje_add_car(descripcion, id , operacion, cant){
	
	let valores ="";
	
	valores +="<div class='alert alert-primary' role='alert'>Se ha "+operacion+" "+cant+" "+descripcion+" al carrito de compra </div>";
	document.getElementById("container_success").innerHTML=valores;
	setTimeout(function(){ document.getElementById("container_success").innerHTML=""; }, 3000);
	
	
	}
   function eliminar_item_Carrito(id) {
    const arreglo_car = JSON.parse(localStorage.getItem('ticket'));
    console.log(id);
    
    if (Array.isArray(arreglo_car.productos) && arreglo_car.productos.length > 0) {
        const nuevoArregloCar = arreglo_car.productos.filter(item => item.id !== id);
        arreglo_car.productos = nuevoArregloCar; // Actualizar el arreglo de productos
         console.log(arreglo_car);
        localStorage.setItem('ticket', JSON.stringify(arreglo_car));
    }
}

	function cargar_arreglo_car() {
	//const  arreglo_cliente=JSON.parse(localStorage.getItem('cliente')); 
	const  arreglo_usuario=JSON.parse(localStorage.getItem('usuario')); 
	if (localStorage.getItem("ticket") != null) { 
	   
	
	const  arreglo_car=JSON.parse(localStorage.getItem('ticket'));  
		
	  
	const total_pedido =arreglo_car.productos.reduce((total, item)=>total + parseInt(item.precio * item.cant), 0);   
	
	imprimir_carrito(arreglo_car,  total_pedido);
	
	if (window.location.pathname === '/shopping-cart.html') {
 //   imprimir_carrito_checkout(arreglo_car,  total_pedido);
  
    }
	
	}else{
	    
	imprimir_carro_vacio();
	}
	}
	

    function cargar_carro( id, descripcion, precio,  foto, operacion, tags) {
        if (operacion=='Agregado_ppl') {    	
        var cant = new Number($('#cantidades_producto').html());
        
        operacion="Agregado ";
        }else{
         if (operacion=='Agregado') {
            var cant =1;
         }else{ 
            var cant =-1;
         }  
     
        }
	
	
	   const arreglo_car=JSON.parse(localStorage.getItem('ticket'));  
		
	   
	   var estructura;
	
	   const carrito = Object.create(prototipoCarrito);
	  
	  
		if (!arreglo_car) {
			
		   const producto={
			   id,
			   descripcion,
			   precio,
			   foto,
			   cant,
			   tags
			 };
	
		   
		   carrito.agregarProducto(producto);
			//var estructura =  id+ ";" +  descripcion+ ";" +  precio+ ";" +  cant + ";" +foto;  
	   }else{
			  const producto={
			   id,
			   descripcion,
			   precio,
			   foto,
			   cant,
			   tags
			 };
	
				 let cantidad=0;
				 let indice;
			   let encontrado=false;
			   arreglo_car.productos.forEach((datos, index)=>{
					   if (datos.id==id) {
						
						 cantidad= datos.cant;
						 indice=index;
						 encontrado=true;
					   }
				   
			   })
			   
	
				if (encontrado) {
					 
					 arreglo_car.productos[indice].cant=parseInt(cant) + parseInt(cantidad);
					 
					 
	
				}else{
					//carrito.agregarProducto(producto);
	
					arreglo_car.productos.push(producto);
				}	
			 
				 arreglo_car.productos.forEach((datos)=>{
				 carrito.agregarProducto(datos);
	
			    })	
	
			
	
	
			
			
	
			
		   }
		   //console.log(arreglo_car);
		  localStorage.setItem('ticket', JSON.stringify(carrito)); 
		  cargar_arreglo_car() ; 
	
		  mensaje_add_car(descripcion, id , operacion, cant);
	  
	}
 
 
 function imprimir_carrito_checkout(arreglo_car, total){
    
      var valores='';
  
        var cant_productos = 0;
         arreglo_car.productos.forEach((datos)=>{
        
    	 var codigo1 = datos.id;
    	 var codigo2 = '"'+codigo1+'"';
         var descripcion1 = datos.descripcion;
          var descripcion2 = '"'+descripcion1+'"';
         var precio1 = datos.precio;
         
         var cant1 = datos.cant;
         var foto1 = datos.foto;
         var subtotal1=precio1*cant1;
         precio1=new Intl.NumberFormat().format(datos.precio);
         subtotal1=new Intl.NumberFormat().format(subtotal1);
         
        
        valores+=`  <div class="single_shop_cart d-flex align-items-center flex-wrap">
                           
                            <div class="cart_img mb-4 mb-md-0">
                                <img loading="lazy" src='${foto1}' alt="product">
                            </div>
                            
                            <div class="cart_cont">
                                <a href="#">
                                    <h5>${descripcion1}</h5>
                                </a>
                                <p class="price">${precio1}</p>
                               
                            </div>
                           
                            <div class="cart_qnty d-flex align-items-center ms-md-auto">
                                <div class="cart_qnty_btn">
                                    <i class="las la-minus"></i>
                                </div>
                                <div class="cart_count">${cant1}</div>
                                <div class="cart_qnty_btn">
                                    <i class="las la-plus"></i>
                                </div>
                            </div>

                            
                            <div class="cart_price ms-auto">
                                <p>${subtotal1}</p>
                            </div>
                           
                            <div class="cart_remove ms-auto">
                                <i class="icon-trash" onclick="eliminar_item_Carrito(${codigo1})"></i>
                            </div>
                        </div>`;                    
          
          
          
        /*valores+="<li class='list-group-item d-flex justify-content-between lh-sm'><div><h6 class='my-0'>Producto:</h6><small class='text-muted'>"+descripcion1+"</small></div><span class='text-muted'>"+precio1+"X"+cant1+"</span></br><span class='text-muted'>Subtotal $"+subtotal1+"</span></li>"; */
    	
        cant_productos++                         
                            
    	
    
    })
    
      total_monto=new Intl.NumberFormat().format(total);
        
   
        
   
    
      
      
    //  document.getElementById("cant_productos").innerHTML=cant_productos;
    //  document.getElementById("total_productos").innerHTML=total_monto;
      
     
	  document.getElementById("lista_productos").innerHTML=valores;
       document.getElementById("casilla_monto").innerHTML="$"+total_monto;  
      // document.getElementById("variablexValor").value=suma;
     document.getElementById("monto_total").innerHTML="$"+total_monto;
    

}

