const str = 'Эльбрус';
let newStr = '';

// Цикл для реверса строки
for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i]; // добавляем символ в новый строку
}

// Вывод результирующей реверсированной строки
console.log('reversed:', newStr);

function reverse(str) {
    let newStr = '';
    
    // Цикл для реверса строки
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]; // добавляем каждый символ в новую строку
    }
    
    return newStr; // возвращаем перевернутую строку
}

// Пример использования
const originalString = 'Эльбрус';
const reversedString = reverse(originalString);
console.log('Перевернутая строка:', reversedString); // Перевернутая строка: сурблЭ 
