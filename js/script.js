// Monitora o envio do formulário de contato exigido pelo professor
document.getElementById('form-contato').addEventListener('submit', function (evento) {
    // Captura os valores preenchidos nos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação 1: Verifica se há campos vazios
    if (nome === "" || email === "" || mensagem === "") {
        alert("Opa! Por favor, preencha todos os campos do formulário.");
        evento.preventDefault(); // Interrompe o envio
        return;
    }

    // Validação 2: Verifica se o e-mail possui um formato válido
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, digite um endereço de e-mail válido (exemplo: usuario@dominio.com).");
        evento.preventDefault(); // Interrompe o envio
        return;
    }

    // Se estiver tudo correto, o JavaScript permite o envio natural 
    // e o FormSubmit encaminhará a mensagem para matheusantunesreis6@gmail.com
});