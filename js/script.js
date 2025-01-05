document.querySelectorAll('.select-number, .select-name').forEach(el => {
    el.addEventListener('click', () => {
        navigator.clipboard.writeText(el.textContent.trim()).then(() => {
            alert('Скопировано в буфер обмена!');
        }).catch(err => console.error('Ошибка копирования', err));
    });
});
