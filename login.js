// Adicione este código em um arquivo chamado login.js

const loginForm = document.getElementById('login-form');
const loginStatus = document.getElementById('login-status');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login bem-sucedido
            const user = userCredential.user;
            loginStatus.textContent = `Login bem-sucedido. Bem-vindo, ${user.email}!`;
        })
        .catch((error) => {
            // Tratar erros de login
            const errorCode = error.code;
            const errorMessage = error.message;
            loginStatus.textContent = `Erro ao fazer login: ${errorMessage}`;
        });
});
