// Приклад використання функції
triangle(7, "leg", 7,"hypotenuse");







// Функція для розв'язання прямокутного трикутника
function triangle(value1, type1, value2, type2) {
  console.log(`Введені значення: ${value1}, ${type1}, ${value2}, ${type2}`);
  
  // Перевірка правильності введених типів
  const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
  if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
    console.log("Помилка: Неправильно вказані типи елементів.");
    return "failed";
  }

  //Перевірка на (від’ємні або нульові аргументи)
  if (value1 <= 0 || value2 <= 0) {
    console.log("Помилка: Значення не можуть бути менше чи рівні нулю.");
    return "failed";
  }

  // Перевірка правильності введених значень
  if (isNaN(value1) || isNaN(value2)) {
    console.log("Помилка: Значення мають бути числами.");
    return "failed";
  }

  // Функція для знаходження гіпотенузи
  function findHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
  }
  
  // Функція для знаходження кутів трикутника
  function findAngles(a, b) {
    const angleA = Math.atan(b / a) * (180 / Math.PI);
    const angleB = 90 - angleA;
    return { angleA, angleB };
  }
  

   // Знаходження гіпотенузи
   let hypotenuse;
   if ((type1 === "leg" && type2 === "leg") || (type1 === "hypotenuse" && type2 === "leg")) {
     hypotenuse = findHypotenuse(value1, value2);
   } else if (type1 === "leg" && type2 === "hypotenuse") {
     hypotenuse = value2;
   } else if (type1 === "hypotenuse" && type2 === "hypotenuse") {
     console.log("Помилка: Два значення гіпотенузи не можуть бути вказані одночасно.");
     return "failed";
   } else {
     console.log("Помилка: Неправильно вказані типи елементів.");
     return "failed";
   }

  
  
// Знаходження кутів трикутника
const angles = findAngles(value1, value2);

// Виведення результатів
console.log(`Гіпотенуза (c): ${hypotenuse.toFixed(2)}`);
console.log(`Катет (a): ${value1.toFixed(2)}`);
console.log(`Катет (b): ${value2.toFixed(2)}`);
console.log(`Гострий кут alpha: ${angles.angleA.toFixed(2)} градусів`);
console.log(`Гострий кут beta: ${angles.angleB.toFixed(2)} градусів`);

return "success";
}