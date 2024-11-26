const today = new Date().getDay();
function dayHello(){
    var today = new Date().getDay();

    switch(today){//Switch is easier than all those if statements. 
        case 0://it is also easier to put the whole thing in one line instead of using an extra variable.
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this fine Sunday! 🥜";
            break;
        case 1:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this fine Monday! 🥜";
            break;
        case 2:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this fine Tuesday! 🥜";
            break;
        case 3:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this fine Wednesday! 🥜";
            break;
        case 4:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this fine Thursday! 🥜";
            break;
        case 5:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this fine Friday! 🥜";
            break;
        case 6:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store on this fine Saturday! 🥜";
            break;
        default:
            document.getElementById('dynamic-message').innerHTML = "🥜 Welcome to our store! 🥜";
        }
}
dayHello();


function scroll(){
    t= window.scrollY;
    para= document.getElementById('para');
    m=-.25;
    b= 0;
    newY = m*t + b;
    para.style.backgroundPositionY = newY + 'px';




    var t = window.scrollY;
   var nav= document.getElementById('nav');

   var l1= document.getElementById('about-link');
   var l2= document.getElementById('products-link');
   var l3= document.getElementById('contact-link');
   var l4= document.getElementById('references-link');


   var s1= document.getElementById('about');
   var s2= document.getElementById('products');
   var s3= document.getElementById('contact');
   var s4= document.getElementById('references');

   var t1= s1.offsetTop;
   var t2= s2.offsetTop;
   var t3= s3.offsetTop;
   var t4= s4.offsetTop;

    l1.style.fontStyle= 'normal';
    l2.style.fontStyle= 'normal';   
    l3.style.fontStyle= 'normal';
    l4.style.fontStyle= 'normal';

   if(t>t4){
    l4.style.fontStyle= 'italic';
   } else if (t> t3){
    l3.style.fontStyle= 'italic';
   } else if (t> t2){
    l2.style.fontStyle= 'italic';
   }    else if (t> t1){
    l1.style.fontStyle= 'italic';
   }

}
