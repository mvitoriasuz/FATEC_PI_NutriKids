function calcularIMC(){
    var altura = (document.getElementById("altura").value)/100;
    var peso = document.getElementById("peso").value;

    var imc= peso/ (altura ** 2);
    var text = ""

    if (imc < 16.9){
       text = "Muito abaixo do peso"
    } else if (imc < 18.4) {
        text = "Abaixo do peso"
    } else if (imc < 24.9) {
        text = "Peso normal"
    } else if (imc < 29.9) {
        text = "Acima do peso"
    } else if (imc < 34.9) {
        text = "Obesidade grau I"
    } else if (imc < 40) {
        text = "Obesidade grau II"
    } else if (imc > 40) {
        text = "Obesidade grau III"
    }

    if (altura == '' && peso == ''){
       text = "Preencha os campos para calcular"
    }

    document.getElementById("resultado").innerText=text
}

