// 1 Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
// 2 Crie um programa para calcular a aposentadoria de uma pessoa.

const nome = 'Carlos';
const peso = 84;
const altura = 1.88;

const imc = peso/(altura*altura);

if(imc >=30){
    console.log(`${nome} está acima do peso!`);
}else{
    console.log(`${nome} não está acima do peso!`);    
}


