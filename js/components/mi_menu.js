Vue.component('mi_menu',{
template:
`<div >
<div class="container-fluid bg-dark">
<div class="row py-2 px-lg-5">
    <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
        <div class="d-inline-flex align-items-center text-white">
            <small><i class="fa fa-phone-alt mr-2"></i>+919-578-9105</small>
            <small class="px-3">|</small>
            <small><i class="fa fa-envelope mr-2"></i>contacto@tucajaexpress.com</small>
        </div>
    </div>
    <div class="col-lg-6 text-center text-lg-right">
        <div class="d-inline-flex align-items-center">
            <a class="text-white px-2" href="https://www.facebook.com/tucajaexpress/?locale=es_LA">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a class="text-white px-2" href="https://twitter.com/TUCajaExpress">
                <i class="fab fa-twitter"></i>
            </a>
            
            <a class="text-white px-2" href="https://www.instagram.com/tucajaexpress/?hl=es">
                <i class="fab fa-instagram"></i>
            </a>
            
        </div>
    </div>
</div>
</div>
<!-- Topbar End -->


<!-- Navbar Start -->
<div class="container-fluid p-0">
<nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
    <a href="index.html" class="navbar-brand ml-lg-3">
        <img src="img/logo-light.png" alt="">
    </a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
        <div class="navbar-nav m-auto py-0">
            <a href="index.html" class="nav-item nav-link active">Inicio</a>
            <a href="about.html" class="nav-item nav-link">Conócenos</a>
            
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Servicios</a>
                <div class="dropdown-menu rounded-0 m-0">
                    <a href="puerta_puerta.html" class="dropdown-item">Puerta a Puerta</a>
                   
                </div>
            </div>



            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Mas cerca de ti</a>
                <div class="dropdown-menu rounded-0 m-0">
                    <a href="nuestras_rutas.html" class="dropdown-item">Rutas en EEUU</a>
                    <!--<a href="destinos.html" class="dropdown-item">Nuestros Destinos</a>-->
                </div>
            </div>
            <a href="contact.html" class="nav-item nav-link">Contactanos</a>
        </div>
        <a href="gana.html" class="btn btn-primary py-2 px-4 d-none d-lg-block">Gana Dinero con Nosotros</a>
    </div>
</nav>
</div>
<!-- Navbar End -->

</div>
`,

prompt:[],

methods: {
    
},



})