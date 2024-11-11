/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

let numeros = [3, 1, 7, 10, 12, 100, 98, 69, -1, -1000]

numVerificar = prompt('Qual número você deseja verificar se existe no vetor?')


if(numeros.includes(numVerificar) = false){
    alert('Esse número não existe no vetor!')
} else if(numeros.includes(numVerificar) = true){
    alert("Esse número existe no vetor!")
}