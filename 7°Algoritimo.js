/*
João está planejando seus exercícios físicos semanais. Crie um array chamado exerciciosSemana com os exercícios
"corrida", "flexões" e "abdominais". Verifique se o último exercício da lista é "alongamento".
Se não for, adicione "alongamento" ao final da lista. Imprima a lista de exercícios atualizada no final.
*/

let exerciciosFisicos = ["corrida", "flexões", "abdominais"]

if(exerciciosFisicos[2] != 'alongamento'){
    exerciciosFisicos.push('alongamento')
    console.log(exerciciosFisicos)
} else if(exerciciosFisicos[2] == 'alongamento'){
    console.log(exerciciosFisicos)
}