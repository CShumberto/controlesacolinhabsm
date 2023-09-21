// ...

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = form['email'].value;
    const loja = parseInt(form['loja'].value); // Converter para número inteiro
    const operador = form['operador'].value;
    const senha = form['senha'].value;

    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, senha);
        console.log(`Usuário autenticado: ${user.user.email}`);

        // Redirecionar para a página "sacola.html" após o login bem-sucedido
        window.location.href = 'sacola.html';
    } catch (error) {
        console.error(error);
        alert('Erro ao fazer login. Verifique suas credenciais.');
    }
});

// ...
