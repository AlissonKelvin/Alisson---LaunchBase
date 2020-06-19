// 1 Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
// 2 Crie um programa para calcular a aposentadoria de uma pessoa.

const nome = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

const tempo = idade + contribuicao;

if (tempo >=85) {
    console.log(`${nome} voce pode se aposentar!`);
}else{
    console.log(`${nome} voce não pode se aposentar!`);
    
}

//Objetos são uma coleção de propriedades