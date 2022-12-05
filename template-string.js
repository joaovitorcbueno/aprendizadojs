const nome = " Joao";
const idade = 2021-1998;
const cidadeDeNascimento = "BC";

// const apresentação = "meu nome é" + nome + ", minha idade é " + idade + " nasci em " + cidadeDeNascimento;

const apresentação = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

// console.log(apresentação)

const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "Por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`

console.log(pedido)