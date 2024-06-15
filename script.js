// script.js

function calcular() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    
    // Calcular IMC
    var imc = peso / (altura * altura);
    
    // Exibir o resultado com 2 casas decimais
    document.getElementById("imc").textContent = `Seu IMC é: ` + imc.toFixed(2);
    document.getElementById("imc").style.display = 'block'; // Mostrar o resultado
}
