/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/


let listaCompras = []

alert("Adicione três itens à sua lista de compras!")
listaCompras[0] = prompt('Adicione o primeiro item:')
listaCompras[1] = prompt('Adicione o segundo item:')
listaCompras[2] = prompt('Adicione o terceiro item:')

if(listaCompras[2] == "leite" || listaCompras[2] == "Leite"){
console.log(listaCompras)
} else if(listaCompras != "leite" || listaCompras != "Leite"){
    listaCompras.push('leite')
    console.log(listaCompras)
}