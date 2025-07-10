/*
Desafio 5: "A Magia dos Nomes" ✨
Objetivo: Verificar se um nome está na lista.
Instruções:
Crie um array chamado nomes com os seguintes nomes: "Ana", "João", "Maria", "Pedro".
Crie uma variável chamada nomeProcurado e atribua um nome a ela (exemplo: "Maria").
Use um laço para verificar se nomeProcurado está no array nomes.
Exiba no console: "Nome encontrado" ou "Nome não encontrado".
Recompensa: +30 XP por explorar arrays e lógica de busca.
*/

const nomes = ["Ana", "João", "Maria", "Pedro"];
const nomeProcurado = "Gab";

if (nomes.includes(nomeProcurado)) {
  console.log("Nome encontrado");
} else {
  console.log("Nome não encontrado");
}
