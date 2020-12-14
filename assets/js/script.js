
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

if (!json.email) {



console.error('É necessário digitar o e-mail');


} else if (!json.password) {

console.error('É necessário digitar a senha');


} else {


console.info('Login realizado com sucesso');

}






});

