// Página de login

var Login;
var Senha;

var loginesenha = JSON.parse(localStorage.getItem("@usuario")) || [];

function login(event){
    event.preventDefault();
    Login = document.getElementById('NomeUsuario').value;
    Senha = document.getElementById('Senha').value;

    console.log(Login);
    console.log(Senha);
}
function salvarDados(){
    localStorage.setItem("@ListaTarefas", JSON.stringify(login));
}