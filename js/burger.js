document.querySelector('.icon__menu').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
});


const burger = document.querySelectorAll('.icon__menu');
burger.forEach(icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});