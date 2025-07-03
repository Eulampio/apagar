console.log("Mensaaagem no console"); //é cimilar ao print do python

var btn_cor = document.getElementById("btn_color");
var btn_mais = document.getElementById("btn_plus");
var btn_menos = document.getElementById("btn_less");
var btn_click = document.getElementById("btn_click");

var contador = parseInt(document.getElementById('#texto').textContent);
console.log(contador);
console.log(typeof(contador));

botao_mais .addEventListener('click', function (){
	contador++;
	console.log(contador);
})
btn_menos .addEventListener('click', function (){
	contador--;
	console.log(contador);
})



var header = document.querySelector(".cabecalho");

header.addEventListener("mouseover", function() {
	header.style.backgroundColor = "brown";
    header.style.color = "lightgreen";
})

header.addEventListener("mouseout", function () {
	header.style.backgroundColor = "lightgreen";
    header.style.color = "brown";
})

function mudacor() {
	// alert("Mudando a cor do texto");
	// var div2 = document.getElementsByClassName("div_texto");
	var div = document.querySelector(".div_texto");
	var container = document.getElementById("container_btns");

	div.style.backgroundColor = "red";

	container.style.backgroundColor = "blue";
}

function postar() {
	console.log("Clicoooouu");
}

btn_cor.addEventListener("click", mudacor);
btn_click.addEventListener("click", postar);
