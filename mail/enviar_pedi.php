<?php

$nombre_fac = isset($_POST['nombre_fac']) ? $_POST['nombre_fac'] : '';
$telefono_fac = isset($_POST['telefono_fac']) ? $_POST['telefono_fac'] : '';
$email_fac = isset($_POST['email_fac']) ? $_POST['email_fac'] : '';
$direccion = isset($_POST['direccion']) ? $_POST['direccion'] : '';

$googleMapsLink = isset($_POST['googleMapsLink']) ? $_POST['googleMapsLink'] : '';
$dimencion_caja = isset($_POST['dimencion_caja']) ? $_POST['dimencion_caja'] : '';
$precio_p_c = isset($_POST['precio_p_c']) ? $_POST['precio_p_c'] : '';
$destino_sel = isset($_POST['destino_sel']) ? $_POST['destino_sel'] : '';
$origen_sel = isset($_POST['origen_sel']) ? $_POST['origen_sel'] : '';
$alto = isset($_POST['alto']) ? $_POST['alto'] : '';
$ancho = isset($_POST['ancho']) ? $_POST['ancho'] : '';
$largo = isset($_POST['largo']) ? $_POST['largo'] : '';
$peso = isset($_POST['peso']) ? $_POST['peso'] : '';
$min_decla = isset($_POST['min_decla']) ? $_POST['min_decla'] : '';

$nropedido = '000'; // No está claro cómo se genera este número de pedido

// Dirección de correo electrónico a la que se enviará el formulario
$to = $email_fac;



$subject = "Hola " .$nombre_fac.",  Recibimos ti una solicitud para recojer una encomienda";
$subject2 = "Hola, tiene una solcitud de recogida online del cliente: ".$nombre_fac;
$body="";
$body.="<body width='100%' style='margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;'>
	<center style='width: 100%; background-color: #f1f1f1;'>
    <div style='display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;'>
      &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>
    <div style='max-width: 600px; margin: 0 auto;' class='email-container'>
    	<!-- BEGIN BODY -->
      <table align='center' role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%' style='margin: auto;'>
      	<tr>
          <td valign='top' class='' style='padding: 1em 2.5em; background-color: #fff;'>
          	<table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%'>
          		<tr>
          			  <td width='100%' class='' style='text-align: center; background-color: #0b2684;  color: #fff; font-size: 12px;font-weight: 700; '>
			            <h1>Solcitud de Recogida de Puerta a Puerta</h1>
			           
			          </td>
			          
			          
			          
          		</tr>
          		<tr>
          			<td width='100%' class='' style='text-align: center; background-color: #fff; color: #0b2684; font-size: 12px;font-weight: 700; '>
			            
			            <h1>Gracias por tu Pedido  ".$nombre_fac."</h1>
			             <b>direccion:</b><span>". $direccion." </span></br>
				          <b>Telefono:</b><span>". $telefono_fac."</span></br>
			          </td>
          		</tr>
          	</table>
          </td>
	      </tr><!-- end tr -->
				<tr>
          <td valign='middle' class=''>
            <table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%'>
            	<tr>
            	
                <td valign='middle' width='90%' class='primary'>
                  <table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%'>
                    <tr>
                      <td class='' style='background-color: #fff; height: 260px; text-align: left; padding: 20px 30px;'>
				              	
				              	<p>La solicitud de recogida  con el<b>N° $nropedido</b>, que has realizado será revisada por nuestro personal a la brevedad posible. Una vez verificada, te notificaremos vía WhatsApp la fecha en que nuestros conductores planificarán pasar por tu zona.</p>
				              	<p>Origen: $origen_sel</p>
				              	<p>Destino: $origen_sel </p>
                        <p>Medidas: $alto x $largo x  $ancho</p>
                        <p>Peso en Lbs: $peso </p>
                        <p>Valor Declarado:$ $min_decla </p>
                        <p><a href='".$googleMapsLink."' target='_blank' class='btn btn-light ml-2'>Ver Ubicación</a></p>
				              	<p>Ver tu solicitud  en pdf   <a href=''>Aqui</a>.</p>
				              
                      </td>
                    </tr>
                  </table>
                  
                  
                </td>
            	</tr>
            </table>
          </td>
	      </tr> 
		  
		              	";
   
   
       $body.="
      </br></br></br>
      </br></br></br>
      <table align='center' role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%' style='margin: auto;'>
        <tr>
        	<td valign='middle' style='background-color: #0b2684;' class='footer email-section'>
        		<table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%' style='margin: auto;'>
        			<tr>
        				<td width='100%' style='text-align: center;'>
        					<p style='font-size: 22px; margin-top: 0; color:#fff;'> Medellín - Colombia</p>
					
        				</td>
        			</tr>
        			<tr>
        				<td width='100%' style='text-align: center;'>
        					
        				</td>
        			</tr>
        			<tr>
        				<td width='100%' style='text-align: center;'>
        					<ul class='' style='display: inline-block;margin-right: 10px; padding: 20px 0 0 0;'>
                		
                		<a href='https://web.facebook.com/tucajaexpress' style='display: inline-block;margin-right: 10px;'>/tucajaexpress</a>
                		<a href='https://www.instagram.com' style='display: inline-block;margin-right: 10px;'>@tucajaexpress</a>
                	</ul>
        				</td>
        					<tr>	<td width='100%' style='text-align: center; font-size: 12px; margin-top: 0; color:#fff;'> <p>Desarrollado por: colcodec</p></td></tr>
        			</tr>
            </table>
        	</td>
        </tr>
      </table>

    </div>
  </center>
</body>";
 $headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <info@pos-nube2.com>' . "\r\n";
  
        //administracion@pos-nube.com
        
  if(mail($to,$subject,$body,$headers)){
     mail("todoenusa1@gmail.com",$subject2,$body,$headers);
    echo $body;
  }    
  
     // enviar_email($ref,$array_datos_cliente, $array_datos_cliente_envio, $salida, $valortexto3, $fecha1,$hora1 );
    //  enviar_email_cliente($ref,$array_datos_cliente, $array_datos_cliente_envio, $salida, $valortexto3, $fecha1,$hora1);
        

?>


