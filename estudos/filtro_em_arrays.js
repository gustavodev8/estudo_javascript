const ListaNotas = [
    {nome: "Ana", nota: 7},
    {nome: "Bruno", nota: 4},
    {nome: "Carlos", nota: 8},
    {nome: "Daniela", nota: 6},
    {nome: "Eduardo", nota: 0}
]
console.log ("--------------------")
console.log ("Alunos Aprovados")
//filter = metodo de array que filtra os elementos de acordo com uma condicao feita pelo programador
const AlunosAprovados = ListaNotas.filter( function (aluno){
    return aluno.nota >= 7
})

console.log(AlunosAprovados)

console.log ("--------------------")
console.log ("Alunos Reprovados")

//find = metodo de array que encontra o PRIMEIRO elemento que satisfaz a condicao feita pelo programador
const AlunosZerados = ListaNotas.find (function(alunos) {
    return alunos.nota === 0
})

console.log(AlunosZerados)

// maps = metodo de array que mapeia os elementos de um array e cria um novo array com os elementos modificados de acordo com a condicao feita pelo programador

console.log ("--------------------")
console.log ("lista de alunos que alunos aprovados")
const nomesaprovados = AlunosAprovados.map (function (alunos) {
    return alunos.nome 
})

console.log (nomesaprovados)
