/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

let tarefasLimpeza = []

alert('Adicione quatro tarefas à lista!')
tarefasLimpeza[0] = prompt('Adicione a primeira tarefa à lista:')
tarefasLimpeza[1] = prompt('Adicione a segunda tarefa à lista:')
tarefasLimpeza[2] = prompt('Adicione a terceira tarefa à lista:')
tarefasLimpeza[3] = prompt('Adicione a quarta tarefa à lista:')

tarefasLimpeza.splice(2,1)
tarefasLimpeza[1] = "limpar banheiro"

console.log(tarefasLimpeza)