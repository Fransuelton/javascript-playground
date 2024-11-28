/*
Desafio 6: "FizzBuzz dos Noobs" 🎮
Objetivo: Implemente uma versão simplificada do clássico "FizzBuzz".
Instruções:
Use um laço para contar de 1 a 15.
Se o número for múltiplo de 3, mostre no console: "Fizz".
Se o número for múltiplo de 5, mostre no console: "Buzz".
Se for múltiplo de 3 e 5, mostre: "FizzBuzz".
Recompensa: +40 XP por praticar lógica condicional mais avançada.
*/

for (let numero = 1; numero <= 100; numero++) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("FizzBuzz");
  } else if (numero % 3 === 0) {
    console.log("Fizz");
  } else if (numero % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(numero);
  }
}
