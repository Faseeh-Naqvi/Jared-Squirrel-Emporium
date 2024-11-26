window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.scrollfire');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date().getDay();
document.querySelector('#dynamic-message').textContent = `Welcome to our store on this ${days[today]}!`;


document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
