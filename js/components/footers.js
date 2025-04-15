Vue.component('footers',{
    template:
    `<div >
    <div class="containerx">
    <input type="checkbox" id="btn-mas">
    <div class="redes">
        <div v-for="(dato, index) of whatsapp" :key="index">
           
        <a :title=dato.nombre :href=url_whatsapp+dato.codigo+dato.whatsapp+texto_whatsapp+dato.mensaje class="lab la-whatsapp"></a>
        </div>
       
       
       
    </div>
    
    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div class="row pt-5">
            <div class="col-lg-7 col-md-6">
                <div class="row">
                    <div class="col-md-6 mb-5">
                        <h3 class="text-primary mb-4">Contactanos</h3>
                        <p><i class="fa fa-phone-alt mr-2"> 701 Atando Ave Suite T, Charlotte, North Carolina 28206</p>
                        <p><i class="fa fa-phone-alt mr-2"></i>919-578-9105</p>
                        <p><i class="fa fa-envelope mr-2"></i>contacto@tucajaexpress.com</p>
                        <div class="d-flex justify-content-start mt-4">
                            <a class="btn btn-outline-light btn-social mr-2" href="https://twitter.com/TUCajaExpress"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social mr-2" href="https://www.facebook.com/tucajaexpress/?locale=es_LA"><i class="fab fa-facebook-f"></i></a>
                     
                            <a class="btn btn-outline-light btn-social" href="https://www.instagram.com/tucajaexpress/?hl=es"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-md-6 mb-5">
                        <h3 class="text-primary mb-4">Links Importantes</h3>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Inicio</a>
                            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Conocenos</a>
                            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Servicios</a>
                            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Gana Dinero con Nosotros</a>
                            <a class="text-white" href="#"><i class="fa fa-angle-right mr-2"></i>Contactanos</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-6 mb-5">
                <h3 class="text-primary mb-4">Mantente Informado</h3>
                <p>Recibe notificaciones, cambios en politica, noticias y oportunidades por email. Deja tu email y mantente en contacto con nosotros</p>
                <div class="w-100">
                    <div class="input-group">
                        <input type="text" class="form-control border-light" style="padding: 30px;" placeholder="tu Email ">
                        <div class="input-group-append">
                            <button class="btn btn-primary px-4">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style="border-color: #3E3E4E !important;">
        <div class="row">
            <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p class="m-0 text-white">&copy; <a href="#">Tu Caja Express. All Rights Reserved. 
				
				
				Desarrollado por <a href="https://colcodec.com">Colcodec</a>
                </p>
            </div>
            <div class="col-lg-6 text-center text-md-right">
                <ul class="nav d-inline-flex">
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">Politicas de Privacidad</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">Terminos y Condiciones</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">Help</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Footer End -->
    </div>
    `,
    
    prompt:[],
    
    methods: {
        
    },
    
    
    
    })