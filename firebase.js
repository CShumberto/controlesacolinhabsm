
// configuração do firebase
const firebaseConfig = {
    apiKey: "AIzaSyC28CYNjHhUi8rOwrASXdRJ1cm2PV6fEW4",
    authDomain: "controlemensal-sacolinhas.firebaseapp.com",
    databaseURL: "https://controlemensal-sacolinhas-default-rtdb.firebaseio.com",
    projectId:"controlemensal-sacolinhas",
    storageBucket: "controlemensal-sacolinhas.appspot.com",
    messagingSenderId: "925424065013",
    appId: "1:925424065013:web:cf961586c6300ceb1468bc"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function cadastrar() {
    var auth = null;
    // função de cadastro do firebase com email e senha 
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
        .then(function (user) {
            alert("seus dados foi cadastrado com sucesso");
            auth = user;
            //para atualizar o navegador
            document.getElementById('email').value = ''
            document.getElementById('senha').value = ''
        }).catch(function (error) {
            alert("falhar ao cadastrar");
        });
}
