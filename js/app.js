const app = new Vue({
el:'#app',
data(){
    return{

        informacion:"bienvenido",
        info:[], 
        origenes:[],
        destinos:[],
        destino_sel:null,
        origen_sel:null,
        dimencion_caja:"",
        cajas_disponibles:[],
        array_destino_sel:[],
        valorMasCercano:0,
        peso_limite:0,
        precio_p_c:0,
        precio_a_pagar:0,
        mensaje_llene_campos:"",
        nombre_cliente:"",
        telefono_cliente:"",
        email_cliente:"",
        nombre_fac:"",
        telefono_fac:"",
        email_fac:"",
        ubicacion: "",
        direccion:"",
      errorMessage: "",
      googleMapsLink:"",
      numero_guia:"",
      tu_whasapp_link:"", 
      link_compartir:""                      



    }


},
mounted(){
this.busca_info_inicial();
},

methods:{
busca_info_inicial(){
const URL ='https://pos-nube2.com/api_tucaja_express/api_tabulador.php'    
    axios
    .get(URL)
    .then(response=>{
    console.log(response.data)
    this.info=response.data.tabuladores
        this.destinos=this.filtrar_destinos(response.data.tabuladores)
        this.origenes=this.filtrar_origenes(response.data.tabuladores)
    })
   
    const urlSearchParams = new URLSearchParams(window.location.search);
     this.nombre_fac = urlSearchParams.get("nombre");
     this.telefono_fac = urlSearchParams.get("telefono");
     this.email_fac = urlSearchParams.get("email");
    
},
filtrar_destinos: function(valores) {
    let repetidos = [];
    valores.forEach(element => {
        
      if(!repetidos.includes(element.pais_destino)){
        repetidos.push(element.pais_destino)
      }
    })
    
    console.log(repetidos);
    return repetidos;
},
filtrar_origenes: function(valores) {
    let repetidos = [];
    valores.forEach(element => {
        
      if(!repetidos.includes(element.pais_origen)){
        repetidos.push(element.pais_origen)
      }
    })
    
    console.log(repetidos);
    return repetidos;
},

escojer_caja(caja){
    this.dimencion_caja=caja
},
abrir_cajas(){
    this.cajas_disponibles=[];
    this.destino_sel =document.getElementById('destino_sel').value
    console.log(this.destino_sel)
    this.array_destino_sel = this.info.filter(dato=>dato.pais_destino===this.destino_sel) 
    console.log(this.array_destino_sel)

    this.array_destino_sel.forEach(element=>{

        if(!this.cajas_disponibles.includes(element.medida)){
            this.cajas_disponibles.push(element.medida)
        }
    })
    document.getElementById('alto').value=""
    document.getElementById('largo').value=""
    document.getElementById('ancho').value=""
   console.log(this.cajas_disponibles)
},

calcular_dimenciones(){
    const alto = document.getElementById('alto').value
    const largo= document.getElementById('largo').value
    const ancho =document.getElementById('ancho').value
    const constante_cubico =1728
    let valor_cubico=0
if( alto !=='' && largo !=='' && ancho!==''){
        const pre_valor_cubico = (alto * largo * ancho) / constante_cubico;

// Redondea a dos decimales hacia abajo
        valor_cubico = (Math.floor(pre_valor_cubico * 100) / 100)-0.01;
   
      //  const filtrados = this.array_destino_sel.filter(item => item.pie_cubic > valor_cubico);
       // filtrados.sort((a, b) => a.pie_cubic - b.pie_cubic);
       const filtrados = this.array_destino_sel.filter(item => item.pie_cubic >= valor_cubico);
        if (filtrados.length > 0) {
            filtrados.sort((a, b) => a.pie_cubic - b.pie_cubic);
            this.valorMasCercano = filtrados[0].pie_cubic;
            this.peso_limite = filtrados[0].peso;
            this.precio_p_c=filtrados[0].precio_p_c
            this.dimencion_caja=filtrados[0].medida
            const precio_ref = this.precio_p_c /this.valorMasCercano

            const precio_a_pagar2 =precio_ref * valor_cubico

            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            });
            
            this.precio_a_pagar = formatter.format((Math.round(precio_a_pagar2 * 100) / 100));


            console.log("Precio pc:", this.precio_p_c ) ;
            console.log("Precio a pagar:", this.precio_a_pagar ) ;
        }else{
            const filtrados = this.array_destino_sel.filter(item => item.pie_cubic < valor_cubico);
            if (filtrados.length > 0) {
                filtrados.sort((a, b) => b.pie_cubic - a.pie_cubic);
                this.valorMasCercano = filtrados[0].pie_cubic;
                this.peso_limite = filtrados[0].peso;
                this.precio_p_c=filtrados[0].precio_p_c
                this.dimencion_caja=filtrados[0].medida
                const precio_ref = this.precio_p_c /this.valorMasCercano
    
                const precio_a_pagar2 =precio_ref * valor_cubico
    
                const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                });
                
                this.precio_a_pagar = formatter.format((Math.round(precio_a_pagar2 * 100) / 100));
                console.log("Precio pc:", this.precio_p_c ) ;
                console.log("Precio a pagar:", this.precio_a_pagar ) ;
            } else {
                console.log("No hay valores disponibles en el array.q");
            }    
        }
    } else {
        console.log("No hay valores mayores que valor_cubico en el array.");
    }
},
cotizar() {
    const telefonoRegex = /^[0-9\+]+$/;
    const emailRegex = /.+@.+/;
    

    if (
      this.nombre_cliente !== "" &&
      this.telefono_cliente !== "" &&
      this.email_cliente !== ""
      
     
    ) {
        if(telefonoRegex.test(this.telefono_cliente)){

            if( emailRegex.test(this.email_cliente)){
                 window.location.href = "./simula.html?nombre=" + this.nombre_cliente + "&telefono=" + this.telefono_cliente + "&email=" + this.email_cliente;
    
            
            }else{
                const alerta = document.getElementById('alerta_simula');
                alerta.style.display = "block";
                this.mensaje_llene_campos="Corrije el Email Apropiadamente"
                setTimeout(() => {
                    alerta.style.display = "none";
                }, 3000);
            }
     
       
        }else{
            const alerta = document.getElementById('alerta_simula');
            alerta.style.display = "block";
            this.mensaje_llene_campos="Tipee el Telefono Correctamente +57 1234567890"
            setTimeout(() => {
                alerta.style.display = "none";
            }, 3000);
        
        }   
    } else {
      const alerta = document.getElementById('alerta_simula');
      alerta.style.display = "block";
      this.mensaje_llene_campos="Llene todos los Campos"
      setTimeout(() => {
        alerta.style.display = "none";
      }, 3000);
    }
  },


  obtenerUbicacion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            this.ubicacion = `Lat: ${lat}, Lon: ${lon}`;
            this.googleMapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
            this.errorMessage = "";
        },
        (error) => {
          switch(error.code) {
            case error.PERMISSION_DENIED:
              this.errorMessage = "Permiso denegado para obtener la ubicación.";
              break;
            case error.POSITION_UNAVAILABLE:
              this.errorMessage = "La ubicación no está disponible.";
              break;
            case error.TIMEOUT:
              this.errorMessage = "La solicitud de ubicación ha caducado.";
              break;
            case error.UNKNOWN_ERROR:
              this.errorMessage = "Un error desconocido ocurrió.";
              break;
          }
        }
      );
    } else {
      this.errorMessage = "La geolocalización no es soportada por este navegador.";
    }
  },  

  enviar_email: async function() {
                   
     this.destino_sel=document.getElementById('destino_sel')
     this.origen_sel=document.getElementById('origen_sel')
     const alto =document.getElementById('alto')
     const ancho =document.getElementById('ancho')
     const largo =document.getElementById('largo')
     const peso =document.getElementById('peso')
     const min_decla =document.getElementById('min_decla')

     var arrayJson=JSON.stringify(this.info_imprimir);
     const formData = new FormData();
           formData.append('nombre_fac', this.nombre_fac);
           formData.append('telefono_fac', this.telefono_fac);
           formData.append('email_fac', this.email_fac);
           formData.append('direccion', this.direccion);
           formData.append('googleMapsLink', this.googleMapsLink);
            formData.append('dimencion_caja', this.dimencion_caja);
            formData.append('precio_p_c', this.precio_p_c);   

             formData.append('destino_sel', this.destino_sel); 
             formData.append('origen_sel', this.origen_sel); 
             formData.append('alto', alto); 
             formData.append('ancho', ancho); 
             formData.append('largo', largo); 
             formData.append('peso', peso); 
             formData.append('min_decla', min_decla); 
          
             
      //this.url_pedido="https://POS-NUBE2.com/reportesFPDF-main/factura_pedido.php?id_empresa="+this.id_empresa
    
    const URL = `mail/contact.php`
     const res = await axios.post(URL,
                formData, 
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

  
},  

llamar_al_rastreo(){
  if (this.numero_guia!=="") {
   

     window.location.href="./rastreo.html?guia="+this.numero_guia;

   
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error con el numero de guía!",
      footer: '<a href="#">Debes tipear un numero de Guía Valido!</a>'
    });
  }
},
crear_link_referido(){
  const telefonoRegex = /^[0-9\+]+$/;
  if (this.tu_whasapp_link!=="") {
    if(telefonoRegex.test(this.tu_whasapp_link)){  
    this.link_compartir = "https://tucajaexpres.com/crear_guia.html?referido="+this.tu_whasapp_link
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error con el Whatsapp",
        footer: '<a >Debes tipear un numero de whatsapp Valido!</a>'
      });
    }
} else {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Error con el Whatsapp",
    footer: '<a >Debes tipear un numero de whatsapp Valido!</a>'
  });
}
}
},





})