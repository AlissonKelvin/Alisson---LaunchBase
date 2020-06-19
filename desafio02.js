/// 1 Crie um programa que armazena dados da empresa Rocketseat
// dentro de um objeto chamado empresa. Os dados a serem armazenados

const empresa = {
    nome:'Rocketseat',
    cor:'Roxo',
    foco:'Programação',
    endereco:{
        rua:'Rua Guilherme Gembala',
        numero:260
    }
}

console.log(empresa);
console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, n°${empresa.endereco.numero}`);
