// Вибирає всі елементи з класом 'productCardHover' і зберігає їх у змінній productCardHoverElements
const productCardHoverElements = document.querySelectorAll('.productCardHover');

// Створює масив з елементів, які будуть змінюватися при наведенні миші
const featuredBlocks = [
    document.getElementById('myFeaturedBlock1'),
    document.getElementById('myFeaturedBlock2'),
    document.getElementById('myFeaturedBlock3'),
    document.getElementById('myFeaturedBlock4')
];

// Функція обробника події, яка викликається при наведенні миші
function handleMouseEnter(featuredBlock, bgColor, textColor) {
    // Змінює фон і колір тексту для блоків
    featuredBlock.style.backgroundColor = bgColor;
    featuredBlock.style.color = textColor;
}

// Функція обробника події, яка викликається при відведенні миші
function handleMouseLeave(featuredBlock) {
    // Скидає фон і колір тексту до значень за замовчуванням
    featuredBlock.style.backgroundColor = ''; // Можна встановити значення за замовчуванням, якщо потрібно
    featuredBlock.style.color = '';
}

// Додає обробники подій для кожного елемента 'productCardHover'
productCardHoverElements.forEach((productCardHover, index) => {
    // Додає обробник події для наведення миші
    productCardHover.addEventListener('mouseenter', () => {
        handleMouseEnter(featuredBlocks[index], 'black', '#fff'); // Змінює фон на чорний і колір тексту на білий
    });

    // Додає обробник події для відведення миші
    productCardHover.addEventListener('mouseleave', () => {
        handleMouseLeave(featuredBlocks[index]); // Скидає стилі до значень за замовчуванням
    });
});
