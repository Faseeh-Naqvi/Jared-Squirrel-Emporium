window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.scrollfire');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});


const today = new Date().getDay();
function dayHello(){
    var today = new Date().getDay();

    switch(today){//Switch is easier than all those if statements. 
        case 0://it is also easier to put the whole thing in one line instead of using an extra variable.
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this Sunday! 🥜";
            break;
        case 1:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this Monday! 🥜";
            break;
        case 2:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this Tuesday! 🥜";
            break;
        case 3:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this Wednesday! 🥜";
            break;
        case 4:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this Thursday! 🥜";
            break;
        case 5:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this Friday! 🥜";
            break;
        case 6:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this Saturday! 🥜";
            break;
        default:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store! 🥜";
        }
}
dayHello();


sc



var topper = document.getElementById('back-to-top');

document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
