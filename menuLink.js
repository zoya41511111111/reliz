// Вибирає всі елементи з класом 'menu__link' і зберігає їх у змінній menuLinks
const menuLinks = document.querySelectorAll('.menu__link');

// Функція обробника події, яка викликається при наведенні миші на елемент
function handleMouseEnter(event) {
    // Знаходить дочірній елемент з класом 'line-before' всередині елемента, на який наведена миша
    const lineBefore = event.target.querySelector('.line-before');
    // Розширює ширину лінії до 100% при наведенні миші
    lineBefore.style.width = '100%';
}

// Функція обробника події, яка викликається при відведенні миші від елемента
function handleMouseLeave(event) {
    // Знаходить дочірній елемент з класом 'line-before' всередині елемента, з якого миша була відведена
    const lineBefore = event.target.querySelector('.line-before');
    // Зменшує ширину лінії до 0 при відведенні миші
    lineBefore.style.width = '0';
}

// Проходить по кожному елементу меню і додає до нього лінію підкреслення
menuLinks.forEach((menuLink) => {
    // Створює новий елемент span, який буде використовуватися як лінія підкреслення
    const lineBefore = document.createElement('span');
    lineBefore.classList.add('line-before'); // Додає клас 'line-before' до створеного span
    lineBefore.style.position = 'absolute'; // Встановлює позицію як абсолютну
    lineBefore.style.left = '0'; // Вирівнює лінію з лівого краю батьківського елемента
    lineBefore.style.bottom = '-5px'; // Розміщує лінію на 5 пікселів нижче від нижньої частини батьківського елемента
    lineBefore.style.width = '0'; // Початкова ширина лінії — 0
    lineBefore.style.height = '2px'; // Висота лінії — 2 пікселя
    lineBefore.style.backgroundColor = '#000'; // Колір лінії — чорний
    lineBefore.style.transition = 'width 0.35s'; // Додає плавний перехід для ширини лінії

    // Додає створену лінію як дочірній елемент до поточного елемента меню
    menuLink.appendChild(lineBefore);

    // Додає обробники подій для наведення та відведення миші
    menuLink.addEventListener('mouseenter', handleMouseEnter);
    menuLink.addEventListener('mouseleave', handleMouseLeave);
});
