function filterArray(numbers, value) {
  // Створення порожнього масиву для зберігання підходящих чисел
  const filteredNumbers = [];

  // Ітерація через кожен елемент масиву numbers
  for (const number of numbers) {
    // Перевірка, чи число більше за задане значення
    if (number > value) {
      // Додавання числа до нового масиву
      filteredNumbers.push(number);
    }
  }

  // Повернення нового масиву з підходящими числами
  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]