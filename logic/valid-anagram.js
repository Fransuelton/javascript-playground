/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length != t.length) {
    return false;
  }

  let letters = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // Se a letra já existe, soma +1. Se não, começa com 1.
    letters[char] = letters[char] ? letters[char] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    let char = t[i];

    if (!letters[char]) {
      // Se a letra não existe no objeto OU o valor dela é 0...
      return false;
    }

    // Se chegou aqui, a letra existe no estoque, então "damos baixa":
    letters[char]--;
  }

  // Se passou por todo o loop de 't' sem dar erro...
  return true;
}

// Casos de teste
console.log(isAnagram("anagram", "nagaram")); // Esperado: true
console.log(isAnagram("rat", "car")); // Esperado: false
console.log(isAnagram("bola", "loba")); // Esperado: true
