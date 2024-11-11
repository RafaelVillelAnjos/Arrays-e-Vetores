/*
Uma loja precisa atualizar seu sistema de controle de estoque.
Crie um vetor chamado 'estoqueProdutos' com os produtos "camiseta", "calça" e "sapato". 
Adicione o produto "meia" ao final da lista. Remova o primeiro produto da lista e mude
o segundo produto para "bermuda". Imprima o estoque atualizado no final.
*/

let estoqueProdutos = ['camiseta', 'calça', 'sapatos']

estoqueProdutos.push('meias')
estoqueProdutos.shift()
estoqueProdutos[1] = 'bermudas'

console.log(estoqueProdutos)


