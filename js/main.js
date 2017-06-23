var activo = false;
var caraLinda = document.getElementById("caraLinda");
function cambiar() {
    if (activo) {
        activo = false;
        caraLinda.src = "./img/scare.png"
    } else {
        activo = true;
        caraLinda.src = "./img/wait.png"
    }
};

function cambiar2() {

    caraLinda.addEventListener('click', function () {
        if (activo) {
            activo = false;
            caraLinda.src = "./img/scare.png"
        } else {
            activo = true;
            caraLinda.src = "./img/wait.png"
        }
    });
}