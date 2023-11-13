function slugify(title) {
  // Переведення всіх символів у нижній регістр
  const lowercaseTitle = title.toLowerCase();
  
  // Розділення рядка на слова за допомогою пробілів
  const words = lowercaseTitle.split(' ');
  
  // З'єднання слів за допомогою тире
  const slug = words.join('-');
  
  return slug;
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developers")); // "english-for-developers"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
