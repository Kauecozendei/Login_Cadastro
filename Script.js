
// Função para cadastrar usuário
function cadastrarUsuario(event) {
    event.preventDefault();
    const nome = document.getElementById('NomeCadastro').value;
    const senha = document.getElementById('SenhaCadastro').value;

    if (!nome || !senha) {
        alert('Preencha todos os campos!');
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('@usuarios')) || [];
    // Verifica se já existe usuário
    const existe = usuarios.find(u => u.nome === nome);
    if (existe) {
        alert('Usuário já cadastrado!');
        return;
    }
    usuarios.push({ nome, senha });
    localStorage.setItem('@usuarios', JSON.stringify(usuarios));
    alert('Cadastro realizado com sucesso!');
}

// Função para login
function loginUsuario(event) {
    event.preventDefault();
    const nome = document.getElementById('NomeUsuario').value;
    const senha = document.getElementById('Senha').value;

    let usuarios = JSON.parse(localStorage.getItem('@usuarios')) || [];
    const usuarioValido = usuarios.find(u => u.nome === nome && u.senha === senha);
    if (usuarioValido) {
        alert('Login realizado com sucesso!');
        // Redirecionar ou mostrar área logada
    } else {
        alert('Usuário ou senha incorretos!');
    }
}