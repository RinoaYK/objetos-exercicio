// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = []

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

const frutas = [{
    nome: "morango",
    preco: 10,
    disponibilidade: true},
    {   nome: "pera",
        preco: 12,
        disponibilidade: true },
    {   nome: "manga",
        preco: 5,
        disponibilidade: true
    }]


// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(frutas)

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log(sacolao)


