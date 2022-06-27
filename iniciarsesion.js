$(document).ready(function (){
    $('#Correo_Electronico').blur(function(){

        let Correo_Electronico     = $(event.target).val();

        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!Correo_Electronico){
            $('#Correo_Electronico').addClass("is-invalid");
        }
        else{
            $('#Correo_Electronico').removeClass("is-invalid");
        }
    })
    
    $(document).ready(function () {
        $('#mostrar_contrasena').click(function () {
          if ($('#mostrar_contrasena').is(':checked')) {
            $('#Contraseña').attr('type', 'text');
          } else {
            $('#Contraseña').attr('type', 'password');
          }
        });
      });

      $('#Contraseña').blur(function(){

        let Contraseña     = $(event.target).val();
    
        if(!Contraseña){
            $('#Contraseña').addClass("is-invalid");
        }
        else{
            $('#Contraseña').removeClass("is-invalid");
            }
        })
    });