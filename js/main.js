//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//Функция для проверки максимальной длины строки.
function checkWritelineLength(currentString, maxLength) {
  const maxLength = 140;
  if (currentString <= maxLength) {
    console.log(true);

  } else {
   console.log(false);
  }
}
