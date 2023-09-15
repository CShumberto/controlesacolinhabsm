// Configuração do Firebase
const firebaseConfig = {
   
    appId: "1:925424065013:web:cf961586c6300ceb1468bc"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Obtenha uma referência para a coleção onde deseja armazenar os dados
const db = firebase.firestore();
const dadosCollection = db.collection('controlemensal-sacolinhas');

// Variável global para armazenar o ID do documento que está sendo editado
let documentoEditando = null;

// Função para preencher o modal de edição com os dados atuais
function preencherModalEdicao(data) {
    document.getElementById('dia').value = data.dia;
    document.getElementById('numeroLoja').value = data.numeroLoja;
    document.getElementById('nomeOperador').value = data.nomeOperador;
    document.getElementById('easyOpenBagG').value = data.easyOpenBagG;
    document.getElementById('planetaAgradeceP').value = data.planetaAgradeceP;
    document.getElementById('vendaMensal').value = data.vendaMensal;
    document.getElementById('observacao').value = data.observacao;
}

// Função para calcular valores automaticamente
function calcularValores() {
    // Obtenha os valores dos campos "easyOpenBagG" e "planetaAgradeceP"
    const easyOpenBagG = parseInt(document.getElementById('easyOpenBagG').value) || 0;
    const planetaAgradeceP = parseInt(document.getElementById('planetaAgradeceP').value) || 0;

    // Realize os cálculos
    const totalSacolinhasUN = easyOpenBagG + planetaAgradeceP;
    const valorTotalSacolinhaG = easyOpenBagG * 0.07;
    const valorTotalSacolinhaP = planetaAgradeceP * 0.09;
    const valorTotalSacolinhaTOTAL = valorTotalSacolinhaG + valorTotalSacolinhaP;
    const vendaMensal = parseFloat(document.getElementById('vendaMensal').value) || 0;
    const percentualFaturamento = (valorTotalSacolinhaTOTAL / vendaMensal) * 100;

    // Preencha os campos calculados
    document.getElementById('totalSacolinhasUN').value = totalSacolinhasUN;
    document.getElementById('valorTotalSacolinhaG').value = valorTotalSacolinhaG.toFixed(2);
    document.getElementById('valorTotalSacolinhaP').value = valorTotalSacolinhaP.toFixed(2);
    document.getElementById('valorTotalSacolinhaTOTAL').value = valorTotalSacolinhaTOTAL.toFixed(2);
    document.getElementById('percentualFaturamento').value = percentualFaturamento.toFixed(2);
}

// Função para buscar e exibir os dados na tabela
function mostrarDados() {
    // Limpar os dados da tabela
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    // Buscar os dados do Firestore
    dadosCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${data.dia}</td>
                <td>${data.numeroLoja}</td>
                <td>${data.nomeOperador}</td>
                <td>${data.easyOpenBagG}</td>
                <td>${data.planetaAgradeceP}</td>
                <td>${data.totalSacolinhasUN}</td>
                <td>${data.valorTotalSacolinhaG.toFixed(2)}</td>
                <td>${data.valorTotalSacolinhaP.toFixed(2)}</td>
                <td>${data.valorTotalSacolinhaTOTAL.toFixed(2)}</td>
                <td>${data.vendaMensal}</td>
                <td>${data.percentualFaturamento.toFixed(2)}</td>
                <td>${data.observacao}</td>
                <td>${criarIconeEdicao(doc.id).outerHTML}</td>
                <td>${criarIconeExclusao(doc.id).outerHTML}</td>
            `;
            tbody.appendChild(row);
        });
    }).catch((error) => {
        console.error("Erro ao buscar dados: ", error);
    });
}

// Chame a função para mostrar dados quando a página for carregada
window.addEventListener('load', mostrarDados);

// Inicialize o Datepicker
$('.datepicker').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true
});

// Função para inserir ou atualizar dados
function inserirDados() {
    // Obtenha o valor do campo "vendaMensal"
    const vendaMensal = parseFloat(document.getElementById('vendaMensal').value) || 0;

    // Verifique se o campo "vendaMensal" está vazio
    if (vendaMensal === 0) {
        // Exiba o alerta de erro
        document.getElementById('vendaMensalError').style.display = 'block';
    } else {
        // Caso contrário, oculte o alerta de erro (caso esteja visível)
        document.getElementById('vendaMensalError').style.display = 'none';

        // Continue com a inserção ou atualização de dados
        const dia = document.getElementById('dia').value;
        const numeroLoja = document.getElementById('numeroLoja').value;
        const nomeOperador = document.getElementById('nomeOperador').value;
        const easyOpenBagG = parseInt(document.getElementById('easyOpenBagG').value) || 0;
        const planetaAgradeceP = parseInt(document.getElementById('planetaAgradeceP').value) || 0;
        const observacao = document.getElementById('observacao').value;

        // Realize os cálculos
        const totalSacolinhasUN = easyOpenBagG + planetaAgradeceP;
        const valorTotalSacolinhaG = easyOpenBagG * 0.07;
        const valorTotalSacolinhaP = planetaAgradeceP * 0.09;
        const valorTotalSacolinhaTOTAL = valorTotalSacolinhaG + valorTotalSacolinhaP;
        const percentualFaturamento = (valorTotalSacolinhaTOTAL / vendaMensal) * 100;

        // Verifique se estamos inserindo um novo documento ou atualizando um existente
        if (documentoEditando === null) {
            // Inserir um novo documento no Firestore
            dadosCollection.add({
                dia,
                numeroLoja,
                nomeOperador,
                easyOpenBagG,
                planetaAgradeceP,
                totalSacolinhasUN,
                valorTotalSacolinhaG,
                valorTotalSacolinhaP,
                valorTotalSacolinhaTOTAL,
                vendaMensal,
                percentualFaturamento,
                observacao
            }).then(() => {
                // Limpar o formulário
                limparFormulario();
                // Atualizar a tabela
                mostrarDados();
                // Fechar o modal
                document.getElementById('adicionarDadosModal').classList.remove('show');
                document.body.classList.remove('modal-open');
                document.querySelector('.modal-backdrop').remove();
            }).catch((error) => {
                console.error("Erro ao inserir dados: ", error);
            });
        } else {
            // Atualizar o documento existente no Firestore
            dadosCollection.doc(documentoEditando).update({
                dia,
                numeroLoja,
                nomeOperador,
                easyOpenBagG,
                planetaAgradeceP,
                totalSacolinhasUN,
                valorTotalSacolinhaG,
                valorTotalSacolinhaP,
                valorTotalSacolinhaTOTAL,
                vendaMensal,
                percentualFaturamento,
                observacao
            }).then(() => {
                // Limpar o formulário
                limparFormulario();
                // Atualizar a tabela
                mostrarDados();
                // Fechar o modal
                document.getElementById('adicionarDadosModal').classList.remove('show');
                document.body.classList.remove('modal-open');
                document.querySelector('.modal-backdrop').remove();
                // Redefinir a variável de edição
                documentoEditando = null;
            }).catch((error) => {
                console.error("Erro ao atualizar dados: ", error);
            });
        }
    }
}

// Função para criar um ícone de edição
function criarIconeEdicao(id) {
    const icone = document.createElement('i');
    icone.classList.add('fas', 'fa-edit', 'text-primary', 'cursor-pointer');
    icone.addEventListener('click', () => editarDados(id));
    return icone;
}

// Função para criar um ícone de exclusão
function criarIconeExclusao(id) {
    const icone = document.createElement('i');
    icone.classList.add('fas', 'fa-trash-alt', 'text-danger', 'cursor-pointer');
    icone.addEventListener('click', () => excluirDados(id));
    return icone;
}

// Função para editar dados
function editarDados(id) {
    // Atualize a variável global com o ID do documento que está sendo editado
    documentoEditando = id;

    // Obtenha o documento do Firestore
    dadosCollection.doc(id).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            // Preencha o modal de edição com os dados atuais
            preencherModalEdicao(data);
            // Abra o modal de edição
            document.getElementById('adicionarDadosModal').classList.add('show');
            document.body.classList.add('modal-open');
            const backdrop = document.createElement('div');
            backdrop.classList.add('modal-backdrop', 'fade', 'show');
            document.body.appendChild(backdrop);
        } else {
            console.error("Documento não encontrado!");
        }
    }).catch((error) => {
        console.error("Erro ao obter documento: ", error);
    });
}

// Função para excluir dados
function excluirDados(id) {
    // Solicitar confirmação antes de excluir
    if (confirm("Tem certeza de que deseja excluir este registro?")) {
        // Excluir o documento do Firestore
        dadosCollection.doc(id).delete().then(() => {
            // Atualizar a tabela após a exclusão
            mostrarDados();
        }).catch((error) => {
            console.error("Erro ao excluir documento: ", error);
        });
    }
}

// Função para limpar o formulário
function limparFormulario() {
    document.getElementById('dia').value = '';
    document.getElementById('numeroLoja').value = '';
    document.getElementById('nomeOperador').value = '';
    document.getElementById('easyOpenBagG').value = '';
    document.getElementById('planetaAgradeceP').value = '';
    document.getElementById('totalSacolinhasUN').value = '';
    document.getElementById('valorTotalSacolinhaG').value = '';
    document.getElementById('valorTotalSacolinhaP').value = '';
    document.getElementById('valorTotalSacolinhaTOTAL').value = '';
    document.getElementById('vendaMensal').value = '';
    document.getElementById('percentualFaturamento').value = '';
    document.getElementById('observacao').value = '';
    // Redefinir a variável de edição
    documentoEditando = null;
}
