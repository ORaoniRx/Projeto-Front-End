// Função para Salvar Usuário (Cadastro)
const cadastrar = (event) => {
    event.preventDefault();
    const nome = document.getElementById('cadNome').value;
    const email = document.getElementById('cadEmail').value;
    const senha = document.getElementById('cadSenha').value;

    const usuario = { nome, email, senha };
    
    // Mock de persistência: salva no array de usuários do LocalStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
};

// Lógica de Login
const login = (event) => {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const userExists = usuarios.find(u => u.email === email && u.senha === senha);

    if (userExists) {
        alert(`Bem-vindo, ${userExists.nome}!`);
        window.location.href = "contato.html";
    } else {
        alert("Usuário ou senha inválidos.");
    }
};

// Mapeamento do DOM
document.getElementById('loginForm')?.addEventListener('submit', login);
document.getElementById('cadForm')?.addEventListener('submit', cadastrar);

//Valida o envio de contato

const enviarContato = (event) => {
    event.preventDefault(); // impede recarregar antes de processar

}

//captura do DOM: pegando os campos do formulário do contato

const form = document.getElementById('contatoform');
const assunto = document.getElementById('input').value.trim();
const mensagem = document.getElementById('textarea').value.trim();

//Validação de campos obrigatória

if (assunto==="" || mensagem==="") {
    alert("deu B.O, os campos devem ser obrigatórios!!!")
    return;
}

//Lógica de persistência mockada

const novaMensagem = {
    assunto,
    mensagem,
    data: new Date().toLocaleDateString()
}

let historico = JSON.parse(localStorage.getItem('mensagens')) || [];
historico.push(novaMensagem);
localStorage.setItem('mensagens', JSON.stringify(historico));

alert('deu certo');

form.reset();
//};


//MAPEAMENTO DO DOM
document.getElementById('contactForm')?.addEventListener('submit', enviarContato);