/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

let listaTarefas = []

alert('Adicione 3 tarefas à sua lista!')
listaTarefas[0] = prompt('Qual será sua primeira tarefa?')
listaTarefas[1] = prompt('Qual será sua segunda tarefa?')
listaTarefas[2] = prompt('Qual será sua terceira tarefa?')

listaTarefas.splice(1, 1)
listaTarefas.push('Ligar para o médico')
console.log(listaTarefas)