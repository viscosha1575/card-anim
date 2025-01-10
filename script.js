document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    card.addEventListener('touchstart', () => {
        card.classList.toggle('flipped');
    });
});
