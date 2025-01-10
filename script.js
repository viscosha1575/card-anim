document.querySelectorAll('.card').forEach(card => {
    // Проверяем, поддерживает ли устройство касание
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
        // Если устройство не поддерживает касание, добавляем обработчик клика
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    } else {
        // Для устройств с тач-скрином добавляем touchstart
        card.addEventListener('touchstart', () => {
            card.classList.toggle('flipped');
        });
    }
});
