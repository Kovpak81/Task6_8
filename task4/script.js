const changeText = document.querySelector('#changeText');

changeText.addEventListener('click', function(event) {
    event.preventDefault();
    this.textContent = prompt('Введите текст ссылки');
});


