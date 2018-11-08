const kuva = document.querySelector('img');
const teksti = document.querySelector('p');

kuva.addEventListener('mouseenter', tekstiNakyviin);
kuva.addEventListener('mouseleave', tekstiPois);

function tekstiNakyviin(){
    teksti.style.display = "block";
}
function tekstiPois() {
    teksti.style.display = "none";
}
