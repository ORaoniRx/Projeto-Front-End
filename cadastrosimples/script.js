//função para salvar usuario

const cadastrar = (event) => {
    event.preventdefault();
    const nome = document.getElementById('cadNome').value
    const email = document.getElementById('cadEmail').value
    const senha = document.getElementById('cadPass').value

    const usuario = (nome, email, senha);

    //mock de persistência: salvar array de usuarios no LocalStorage

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const userExists = usuarios.find(u.email === email && u.senha === senha);

    if (userExists) {
        alert(`Bem-Vindo, ${userExists.nome}`)
        window.location.href = "contato.html";
    } else {
        alert(`Usuário inexistente.`)
    }
}

//mapeamento do DOM

document.getElementById('formLog')?.addEventListener('submit', login)
document.getElementById('formCad')?.addEventListener('submit', cadastrar)