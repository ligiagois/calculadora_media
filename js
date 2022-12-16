function calcularMedia() {

    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);

    var media = (nota1+nota2+nota3)/3;

    document.getElementById("resultado").innerHTML= "Sua média é: " +media; 
}
