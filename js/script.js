function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_mr14mef", "template_i0prtn8", params)
        .then(function(res) {
            alert("¡Éxito! " + res.status);
        })
        .catch(function(error) {
            console.error('Error al enviar el correo:', error);
            alert("Ha ocurrido un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.");
        });
}

