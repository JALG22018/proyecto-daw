// script.js
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/662c9684a0c6737bd1315e40/1hshfj2nc";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

function sendMessage() {
  (function () {
    emailjs.init("wpXqdH21THOWaW59s"); // Account Public Key
  })();
  var serviceID = "service_mr14mef"; // Email Service ID
  var templateID = "template_i0prtn8"; // Email Template ID

  var params = {
    sendername: document.querySelector("#name").value,
    senderemail: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert(
        "¡Gracias, " + params["sendername"] + "! Su mensaje ha sido enviado."
      );
    })
    .catch();
}
