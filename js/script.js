// script.js
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/662c9684a0c6737bd1315e40/1hshfj2nc';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

// Valida el formulario antes de enviarlo
function validateForm() {
    const name = document.getElementById('from_name').value;
    const email = document.getElementById('email_id').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }

    if (email.trim() === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return false;
    }

    if (!isValidEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }

    if (message.trim() === '') {
        alert('Por favor, ingresa un mensaje.');
        return false;
    }

    return true;
}

// Verifica si el correo electrónico tiene un formato válido
function isValidEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Asigna la función de validación al evento 'submit' del formulario
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        // Si el formulario es válido, envía el correo electrónico
        btn.value = 'Enviando...';
        const serviceID = 'default_service';
        const templateID = 'template_i0prtn8';
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Email';
                alert('¡Correo electrónico enviado!');
            })
            .catch((err) => {
                btn.value = 'Enviar Email';
                alert('Error al enviar el correo electrónico: ' + JSON.stringify(err));
            });
    }
});
