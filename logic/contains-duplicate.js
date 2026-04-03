/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  let seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }
    seen.add(nums[i]);
  }
  return false;
}

// Casos de teste
console.log(containsDuplicate([1, 2, 3, 1])); // Esperado: true
console.log(containsDuplicate([1, 2, 3, 4])); // Esperado: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4])); // Esperado: true
