const meuNumero = 3;
const num1 = 1.3232;
const num2 = 2.3232;

const operacaomMatematica = num1 + num2;

console.log(operacaomMatematica)

const primeiroNome = "João";
const segundoNome = " Vitor";

const nomeCompleto = primeiroNome - segundoNome;

// Nan = Not a number (Não é um número)

const salario = 1600;
const horasTrabalhadas = 90;

const salarioHora = salario / horasTrabalhadas.toFixed(2)

console.log(salarioHora.toFixed(2));

var lista = [10,1, 5, 9, 8, 12, 15];

lista.sort(); // [1, 10, 12, 15, 5, 8, 9]

function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
