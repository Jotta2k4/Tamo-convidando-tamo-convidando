const paragrafoObs = document.getElementById('obs_text');
const aceitou = document.getElementsByClassName('aceitou');

function obs_btn() {
    paragrafoObs.innerHTML = "Acabei esquecendo de perguntar se tu ta livre amanhã, mas se tiver, vamos juntos =)<br><button onclick='ocultar_obs()' style='width: 5dvw; height: 4dvh'>X</button>";
}

function ocultar_obs() {
    paragrafoObs.innerHTML = "";
}

function sim() {
    aceitou.style.display = 'block';
}