/*
Desafio 3: "Quem é o maior?" 🥇
Objetivo: Comparar dois números e identificar o maior.
Instruções:
Crie duas variáveis chamadas numero1 e numero2 com valores diferentes.
Use condicionais (if e else) para verificar qual número é maior.
Mostre no console: "O maior número é X".
Recompensa: +20 XP por usar comparações.
*/

const numero1 = 120;
const numero2 = 121;

if (numero1 > numero2) {
  console.log(`O maior número é ${numero1}`);
} else if (numero2 > numero1) {
  console.log(`O maior número é ${numero2}`);
} else {
  console.log(`Os números são iguais!`);
}
