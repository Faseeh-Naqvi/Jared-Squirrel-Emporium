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

    l1.style.fontWeight= 'normal';
    l2.style.fontWeight= 'normal';  
    l3.style.fontWeight= 'normal';
    l4.style.fontWeight= 'normal';


   if(t>t4){
    l4.style.fontStyle= 'italic';
    l4.style.fontWeight= 'bold';
   } else if (t> t3){
    l3.style.fontStyle= 'italic';
    l3.style.fontWeight= 'bold';
   } else if (t> t2){
    l2.style.fontStyle= 'italic';
    l2.style.fontWeight= 'bold';
   }    else if (t> t1){
    l1.style.fontStyle= 'italic';
    l1.style.fontWeight= 'bold';
   }

}



function updateStatus(){var productChoice = document.getElementById('product-info-radio');
    var prodChoiceLabel = document.getElementById('product-info-label');
    var prodInput = document.getElementById('productId');
    
    if (productChoice.checked){
        prodChoiceLabel.className = 'form-label';
        prodInput.className = 'form-control';
    }
    else{
        prodChoiceLabel.className = 'hidden';
        prodInput.className = 'hidden';
    }
}



function validateName() {
    const nameField = document.getElementById("name");
    var name =nameField.value;
    
    if (name.length >4 && isNaN(name)){
        nameField.style.borderColor = "green";
    } else {
        nameField.style.borderColor = "red";
    }
}

function validatePhoneNumber() {
    const phoneField = document.getElementById("phoneNumber");
    const isValid = /^\d{3}\s\d{3}\s\d{4}$/.test(phoneField.value);
    if (isValid) {
        phoneField.style.borderColor = "green";
    } else {
        phoneField.style.borderColor = "red";
    }
}

function validateProductID() {
    const productField = document.getElementById("productId");
    const validProductIDs = ["2213FFGH", "2224RFRH", "0007SFFH", "2222CFHE"];
    const isValid = validProductIDs.includes(productField.value);
    if (isValid) {
        productField.style.borderColor = "green";
    } else {
        productField.style.borderColor = "red";
    }
}

function validateMessage() {
    const messageField = document.getElementById("message");

    if (messageField.value.length >= 10 && messageField.value.length <= 30) {
        messageField.style.borderColor = "green";
    } else {
        messageField.style.borderColor = "red";
    }
}
