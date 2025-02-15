// Получаем элементы
const counterElement = document.getElementById('counter');
const clickButton = document.getElementById('clickButton');

let count = 0; // Начальное значение счётчика

// Функция для увеличения счётчика
function incrementCounter() {
    count++; // Увеличиваем счётчик на 1
    counterElement.textContent = count; // Обновляем текст счётчика
}

// Добавляем обработчик события на кнопку
clickButton.addEventListener('click', incrementCounter);