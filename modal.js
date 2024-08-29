const buyNowButton = document.getElementById('buyNowButton');
const orderModal = document.getElementById('orderModal');
const closeModalButton = document.getElementById('closeModal');

// Показати модальне вікно при натисканні на кнопку "BUY NOW"
buyNowButton.addEventListener('click', () => {
    orderModal.style.display = 'block';
});

// Сховати модальне вікно при натисканні на кнопку "Закрити"
closeModalButton.addEventListener('click', () => {
    orderModal.style.display = 'none';
});