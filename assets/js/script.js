console.log('Teste');



document.querySelector('#btn-submit').addEventListener('click', e =>{

console.log('O botão foi clicado');


});


document.querySelector('#form-login').addEventListener('submit', e=>{


e.preventDefault();



let email = document.querySelector('#email').value;
let password = document.querySelector('#password').value;


console.log(email, password);


let json = {


email,
password





}






});

