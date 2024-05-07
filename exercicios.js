/*function mostrarOla() {
    var nome = document.getElementById("nome").value
    document.getElementById("resposta").innerHTML = "Ola"+ nome;

}
var mostrar = document.getElementById("mostrar");
mostrar.onclick=mostrarOla;*/

// declara a funçao mostrarOla
function mostrarOla(){
    //obtem o conteudo do campo(com id=)nome
    var nome = document.getElementById("nome").value;
    //exibe o paragrafo (resposta):"ola" e o nome informado
    document.getElementById("resposta"). textContent = "Olá " + nome;
}
//cria uma referencia so botao (com id=)mostrar
var mostrar = document.getElementById("mostrar");
//registrar para o botao "mostrar" um ouvinte para o evento click,
//que ao ser clicado vai mostrar a funcao mostrarOla
mostrar.addEventListener("click" , mostrarOla);
