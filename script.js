
// Получаем элементы
const counterElement = document.getElementById('counter');
const clickButton = document.getElementById('clickButton');
const secretImage = document.getElementById('secretImage');

let count = 0; // Начальное значение счётчика

// Функция для увеличения счётчика
function incrementCounter() {
    if (count >= 42) return; // Если счётчик уже 42 или больше, ничего не делаем

    count++; // Увеличиваем счётчик на 1
    counterElement.textContent = count; // Обновляем текст счётчика

    // Если счётчик достиг 42, показываем изображение и отключаем кнопку
    if (count === 42) {
        secretImage.classList.add('visible'); // Добавляем класс для отображения изображения
        clickButton.disabled = true; // Отключаем кнопку
        clickButton.style.opacity = 0.5; // Делаем кнопку полупрозрачной
        clickButton.style.cursor = 'not-allowed'; // Меняем курсор на "недоступно"
    }
}

// Добавляем обработчик события на кнопку
clickButton.addEventListener('click', incrementCounter);