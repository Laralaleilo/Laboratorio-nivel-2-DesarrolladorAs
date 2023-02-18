 //Nombre, relleno y válido
 function ValidarNombre(){
    var datoNombre = document.getElementById("nombre");
    var nombreValido = /^[A-Za-z\s]+$/;

      if (nombreValido.test(datoNombre.value) )
      {
          pNombre.innerHTML = "";
          datoNombre.style.borderColor="green";
          datoNombre.classList.remove("imagenError");
          datoNombre.classList.add("imagenSuccess");
          return true;
      }
      else if(datoNombre.value == "")
      {

        datoNombre.classList.remove("imagenSuccess");
        pNombre.innerHTML = "Rellene este campo.";
        datoNombre.style.borderColor="red";
        datoNombre.classList.add("imagenError");
        return false;
      }
      else
      {
          datoNombre.classList.remove("imagenSuccess");
          pNombre.innerHTML = "Nombre invalido";
          datoNombre.style.borderColor="red";
          datoNombre.classList.add("imagenError");
          return false;
      }
 }


 //email, relleno y válido
 function ValidarEmail(){

    var datoEmail = document.getElementById("email");
    var emailValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (emailValido.test(datoEmail.value) )
    {
        pEmail.innerHTML = "";
        datoEmail.style.borderColor="green";
        datoEmail.classList.remove("imagenError");
        datoEmail.classList.add("imagenSuccess");
        return true;
    }
    else if(datoEmail.value == "")
    {

      datoEmail.classList.remove("imagenSuccess");
      pEmail.innerHTML = "Rellene este campo.";
      datoEmail.style.borderColor="red";
      datoEmail.classList.add("imagenError");
      return false;
    }
    else
    {
        datoEmail.classList.remove("imagenSuccess");
        pEmail.innerHTML = "Email inválido";
        datoEmail.style.borderColor="red";
        datoEmail.classList.add("imagenError");
        return false;
    } 
 }


 //Clave, rellena y válida.Longitud
 function ValidarPassword(){
    
    var datoPass = document.getElementById("password");

    if (datoPass.value.length == 8 )
    {
        pPassword.innerHTML = "";
        datoPass.style.borderColor="green";
        datoPass.classList.remove("imagenError");
        datoPass.classList.add("imagenSuccess");
        return true;
    }
    else if(datoPass.value == "")
    {

       datoPass.classList.remove("imagenSuccess");
       pPassword.innerHTML = "Rellene este campo.";
       datoPass.style.borderColor="red";
       datoPass.classList.add("imagenError");
       return false;
    }
    else
    {
        datoPass.classList.remove("imagenSuccess");
        pPassword.innerHTML = "No puede contener más de 8 caracteres";
        datoPass.style.borderColor="red";
        datoPass.classList.add("imagenError");
        return false;
    }
 }

//Confirmar clave, rellena e igual que la contraseña
 function ConfirmarPassword(){

    var datoPass = document.getElementById("password").value;
    var datoConf = document.getElementById("confirmarPassword");

    if(datoPass == datoConf.value)
    {
        pConfirmarPassword.innerHTML = "";
        datoConf.style.borderColor="green";
        datoConf.classList.remove("imagenError");
        datoConf.classList.add("imagenSuccess");
        return true;
    }
    else if(datoConf.value == "")
    {

       datoConf.classList.remove("imagenSuccess");
       pConfirmarPassword.innerHTML = "Rellene este campo.";
       datoConf.style.borderColor="red";
       datoConf.classList.add("imagenError");
       return false;
    }
    else
    {
        datoConf.classList.remove("imagenSuccess");
        pConfirmarPassword.innerHTML = "Las contraseñas deben coincidir";
        datoConf.style.borderColor="red";
        datoConf.classList.add("imagenError");
        return false;
    }
}


//Botón de enviar datos válidos o no
 function ValidarFormulario() {
    if (ValidarPassword() && ValidarEmail() && ValidarNombre() && ConfirmarPassword()) {
        alert ("La inscripción ha sido correcta");
        return true; 
    }
    
    else { 
        return false;
    }
    }