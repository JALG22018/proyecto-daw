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

