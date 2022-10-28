var titulo = document.querySelector(".titulo");
titulo.textContent = "Letícia uma linda de uma delicia";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso =tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true
var alturaEhValida = true

if(peso < 0 || peso > 1000){
  console.log("Peso inválido");
  pesoEhValido = false;
  tdImc.textContent = "Peso invalido"
}
if(altura < 1){
  console.log("altura invalida")
  alturaEhValida = false;
  tdImc.textContent = "Peso invalido"
}

if(alturaEhValida && pesoEhValido){
var imc = peso / (altura * altura);
tdImc.textContent = imc;
}
