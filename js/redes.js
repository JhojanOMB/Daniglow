// Define los enlaces a las redes sociales
const socialLinks = {
  whatsapp: "https://wa.me/573134722142",
  instagram: "https://www.instagram.com/daniglow_beauty/"
};

// Event Listeners con verificación preventiva
const btnWhatsapp = document.getElementById("whatsapp");
if (btnWhatsapp) {
  btnWhatsapp.addEventListener("click", function() {
    window.open(socialLinks.whatsapp, "_blank");
  });
}

const btnInstagram = document.getElementById("instagram");
if (btnInstagram) {
  btnInstagram.addEventListener("click", function() {
    window.open(socialLinks.instagram, "_blank");
  });
}