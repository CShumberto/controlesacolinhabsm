// Importe o SDK do Firebase
import firebase from "firebase/app";
import "firebase/firestore";

// Função para redirecionar para index.html ao clicar em "Sair"
document.getElementById("btnSair").addEventListener("click", function() {
    // Redirecionar para index.html
    window.location.href = "index.html";
});

// Recupere o email do usuário do Local Storage
var userEmail = localStorage.getItem("userEmail");

// Exiba o email onde desejar, por exemplo, na navbar
document.getElementById("userEmailDisplay").textContent = userEmail;

// Event listener para exportar para PDF
document.getElementById("exportarPDF").addEventListener("click", function() {
    const data = $("#tabela-dados").DataTable();
    data.buttons.info(0, data.page.info().length - 1);
    data.buttons.info("D", 0, 0);
    data.button(0).trigger();
});

// Event listener para exportar para Excel
document.getElementById("exportarExcel").addEventListener("click", function() {
    const data = $("#tabela-dados").DataTable();
    data.buttons.info(0, data.page.info().length - 1);
    data.buttons.info("D", 0, 0);
    data.button(1).trigger();
});

// Função para filtrar a tabela com base nos campos "Operador" e "Loja"
function filtrarTabela() {
    const filtroOperador = document.getElementById('filtroOperador').value.toLowerCase();
    const filtroLoja = document.getElementById('filtroLoja').value.toLowerCase();
    const userEmail = document.getElementById('userEmailDisplay').textContent;

    const tbody = document.querySelector('tbody');
    const linhas = tbody.getElementsByTagName('tr');

    // Defina as regras de filtragem com base no usuário logado (userEmail)
    let lojasFiltradas = [];

    // Mapeie os e-mails dos usuários para as lojas correspondentes
    const userEmailToLojaMap = {
        'gestaofrentecaixa@gmail.com': [],
        'fcaixa01@barbosasm.com.br': ['1001'],
        'fcaixa02@barbosasm.com.br': ['1002'],
        // Adicione outras correspondências de e-mail para lojas aqui
    };

    if (userEmail in userEmailToLojaMap) {
        lojasFiltradas = userEmailToLojaMap[userEmail];
    }

    // Iterar pelas linhas da tabela e mostrar/ocultar com base nos filtros
    for (let i = 0; i < linhas.length; i++) {
        const linha = linhas[i];
        const colunaOperador = linha.getElementsByTagName('td')[2];
        const colunaLoja = linha.getElementsByTagName('td')[1];

        if (colunaOperador && colunaLoja) { 
            const operador = colunaOperador.textContent.toLowerCase();
            const loja = colunaLoja.textContent.toLowerCase();

            // Verificar se a linha atende aos critérios de filtro
            if (operador.includes(filtroOperador) && (lojasFiltradas.length === 0 || lojasFiltradas.includes(loja))) {
                linha.style.display = '';
            } else {
                linha.style.display = 'none';
            }
        }
    }
}

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "sua-api-key-aqui",
    authDomain: "seu-dominio.firebaseapp.com",
    databaseURL: "https://seu-database.firebaseio.com",
    projectId: "seu-projeto-id",
    storageBucket: "seu-bucket.appspot.com",
    messagingSenderId: "seu-sender-id",
    appId: "seu-app-id"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Função para verificar o usuário atual e exibir o email na navbar
function verificarUsuario() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // O usuário está logado
            const emailUsuarioLogado = user.email;

            // Exiba o email do usuário na navbar
            document.getElementById("userEmailDisplay").textContent = emailUsuarioLogado;
        } else {
            // O usuário não está logado, redirecione-o para a página de login
            window.location.href = "index.html";
        }
    });
}

// Obtenha uma referência para a coleção onde deseja armazenar os dados
const db = firebase.firestore();
const dadosCollection = db.collection('controlemensal-sacolinhas');

// Função para calcular campos dependentes
function calcularCamposDependentes() {
    const easyOpenBagG = parseFloat($("#totalEasyOpenBagG").val()) || 0;
    const planetaAgradeceP = parseFloat($("#totalPlanetaAgradeceP").val()) || 0;
    const vendaMensal = parseFloat($("#vendaTotalMensal").val()) || 0;

    const totalSacolinhasUN = easyOpenBagG + planetaAgradeceP;
    const valorTotalSacolinhaG = (easyOpenBagG * 0.07).toFixed(2);
    const valorTotalSacolinhaP = (planetaAgradeceP * 0.09).toFixed(2);
    const valorTotalSacolinhaTOTAL = (parseFloat(valorTotalSacolinhaG) + parseFloat(valorTotalSacolinhaP)).toFixed(2);
    const percentualFaturamento = ((parseFloat(valorTotalSacolinhaTOTAL) / vendaMensal) * 100).toFixed(2);

    $("#totalSacolinhas").val(totalSacolinhasUN);
    $("#valorSacolinhaG").val(valorTotalSacolinhaG);
    $("#valorSacolinhaP").val(valorTotalSacolinhaP);
    $("#valorTotalSacolinha").val(valorTotalSacolinhaTOTAL);
    $("#percentualFaturamento").val(percentualFaturamento);
}

// Função para limpar o formulário no modal
function limparFormulario() {
    $("#registroId").val("");
    $("#dia").val("");
    $("#numeroLoja").val("");
    $("#nomeOperador").val("");
    $("#totalEasyOpenBagG").val("");
    $("#totalPlanetaAgradeceP").val("");
    $("#vendaTotalMensal").val("");
    $("#observacao").val("");
    calcularCamposDependentes();
}

// Função para adicionar um novo registro
function adicionarRegistro() {
    const dia = $("#dia").val();
    const numeroLoja = $("#numeroLoja").val();
    const nomeOperador = $("#nomeOperador").val();
    const totalEasyOpenBagG = parseFloat($("#totalEasyOpenBagG").val()) || 0;
    const totalPlanetaAgradeceP = parseFloat($("#totalPlanetaAgradeceP").val()) || 0;
    const vendaTotalMensal = parseFloat($("#vendaTotalMensal").val()) || 0;
    const totalSacolinhasUN = parseFloat($("#totalSacolinhas").val()) || 0;
    const valorTotalSacolinhaG = parseFloat($("#valorSacolinhaG").val()) || 0;
    const valorTotalSacolinhaP = parseFloat($("#valorSacolinhaP").val()) || 0;
    const valorTotalSacolinhaTOTAL = parseFloat($("#valorTotalSacolinha").val()) || 0;
    const percentualFaturamento = parseFloat($("#percentualFaturamento").val()) || 0;
    const observacao = $("#observacao").val();

    // Verifique se todos os campos obrigatórios estão preenchidos
    if (!dia || !numeroLoja || !nomeOperador || !vendaTotalMensal) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    // Crie um objeto com os dados do registro
    const registro = {
        dia: dia,
        numeroLoja: numeroLoja,
        nomeOperador: nomeOperador,
        totalEasyOpenBagG: totalEasyOpenBagG,
        totalPlanetaAgradeceP: totalPlanetaAgradeceP,
        vendaTotalMensal: vendaTotalMensal,
        totalSacolinhasUN: totalSacolinhasUN,
        valorTotalSacolinhaG: valorTotalSacolinhaG,
        valorTotalSacolinhaP: valorTotalSacolinhaP,
        valorTotalSacolinhaTOTAL: valorTotalSacolinhaTOTAL,
        percentualFaturamento: percentualFaturamento,
        observacao: observacao
    };

    // Adicione o registro ao Firestore
    dadosCollection
        .add(registro)
        .then(function(docRef) {
            console.log("Registro adicionado com ID: ", docRef.id);
            limparFormulario();
            // Feche o modal após adicionar
            $("#modalRegistro").modal("hide");
        })
        .catch(function(error) {
            console.error("Erro ao adicionar registro: ", error);
        });
}

// Função para atualizar um registro existente
function atualizarRegistro(id) {
    const dia = $("#dia").val();
    const numeroLoja = $("#numeroLoja").val();
    const nomeOperador = $("#nomeOperador").val();
    const totalEasyOpenBagG = parseFloat($("#totalEasyOpenBagG").val()) || 0;
    const totalPlanetaAgradeceP = parseFloat($("#totalPlanetaAgradeceP").val()) || 0;
    const vendaTotalMensal = parseFloat($("#vendaTotalMensal").val()) || 0;
    const totalSacolinhasUN = parseFloat($("#totalSacolinhas").val()) || 0;
    const valorTotalSacolinhaG = parseFloat($("#valorSacolinhaG").val()) || 0;
    const valorTotalSacolinhaP = parseFloat($("#valorSacolinhaP").val()) || 0;
    const valorTotalSacolinhaTOTAL = parseFloat($("#valorTotalSacolinha").val()) || 0;
    const percentualFaturamento = parseFloat($("#percentualFaturamento").val()) || 0;
    const observacao = $("#observacao").val();

    // Verifique se todos os campos obrigatórios estão preenchidos
    if (!dia || !numeroLoja || !nomeOperador || !vendaTotalMensal) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    // Crie um objeto com os dados do registro a ser atualizado
    const registroAtualizado = {
        dia: dia,
        numeroLoja: numeroLoja,
        nomeOperador: nomeOperador,
        totalEasyOpenBagG: totalEasyOpenBagG,
        totalPlanetaAgradeceP: totalPlanetaAgradeceP,
        vendaTotalMensal: vendaTotalMensal,
        totalSacolinhasUN: totalSacolinhasUN,
        valorTotalSacolinhaG: valorTotalSacolinhaG,
        valorTotalSacolinhaP: valorTotalSacolinhaP,
        valorTotalSacolinhaTOTAL: valorTotalSacolinhaTOTAL,
        percentualFaturamento: percentualFaturamento,
        observacao: observacao
    };

    // Atualize o registro no Firestore
    dadosCollection
        .doc(id)
        .update(registroAtualizado)
        .then(function() {
            console.log("Registro atualizado com sucesso.");
            limparFormulario();
            // Feche o modal após atualizar
            $("#modalRegistro").modal("hide");
        })
        .catch(function(error) {
            console.error("Erro ao atualizar registro: ", error);
        });
}

// Função para preencher o formulário com os dados de um registro existente
function preencherFormulario(id) {
    // Obtenha o registro do Firestore com base no ID
    dadosCollection
        .doc(id)
        .get()
        .then(function(doc) {
            if (doc.exists) {
                // Preencha o formulário com os dados do registro
                const data = doc.data();
                $("#registroId").val(id);
                $("#dia").val(data.dia);
                $("#numeroLoja").val(data.numeroLoja);
                $("#nomeOperador").val(data.nomeOperador);
                $("#totalEasyOpenBagG").val(data.totalEasyOpenBagG);
                $("#totalPlanetaAgradeceP").val(data.totalPlanetaAgradeceP);
                $("#vendaTotalMensal").val(data.vendaTotalMensal);
                $("#totalSacolinhas").val(data.totalSacolinhasUN);
                $("#valorSacolinhaG").val(data.valorTotalSacolinhaG);
                $("#valorSacolinhaP").val(data.valorTotalSacolinhaP);
                $("#valorTotalSacolinha").val(data.valorTotalSacolinhaTOTAL);
                $("#percentualFaturamento").val(data.percentualFaturamento);
                $("#observacao").val(data.observacao);
            } else {
                console.log("Nenhum documento encontrado!");
            }
        })
        .catch(function(error) {
            console.log("Erro ao obter documento:", error);
        });
}

// Função para excluir um registro existente
function excluirRegistro(id) {
    // Exclua o registro do Firestore com base no ID
    dadosCollection
        .doc(id)
        .delete()
        .then(function() {
            console.log("Registro excluído com sucesso.");
            // Feche o modal após excluir
            $("#modalExcluir").modal("hide");
        })
        .catch(function(error) {
            console.error("Erro ao excluir registro: ", error);
        });
}

// Função para inicializar a tabela de dados usando DataTables
function inicializarTabelaDados() {
    const tabela = $("#tabela-dados").DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'pdf',
                text: 'Exportar para PDF',
                title: 'Relatório de Controle Mensal de Sacolinhas',
                className: 'btn btn-primary'
            },
            {
                extend: 'excel',
                text: 'Exportar para Excel',
                title: 'Relatório de Controle Mensal de Sacolinhas',
                className: 'btn btn-primary'
            }
        ],
        order: [[0, "desc"]]
    });

    // Event listener para selecionar uma linha da tabela
    $('#tabela-dados tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            tabela.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    // Botão para abrir o modal de edição com os dados da linha selecionada
    $('#editarRegistro').on('click', function () {
        const linhaSelecionada = tabela.row('.selected').index();
        if (linhaSelecionada >= 0) {
            const idRegistro = tabela.row(linhaSelecionada).data()[0];
            preencherFormulario(idRegistro);
            $('#modalRegistro').modal('show');
        } else {
            alert('Selecione uma linha para editar.');
        }
    });

    // Botão para abrir o modal de exclusão com os dados da linha selecionada
    $('#excluirRegistro').on('click', function () {
        const linhaSelecionada = tabela.row('.selected').index();
        if (linhaSelecionada >= 0) {
            const idRegistro = tabela.row(linhaSelecionada).data()[0];
            $('#modalExcluir').modal('show');
            $('#confirmarExclusao').on('click', function () {
                excluirRegistro(idRegistro);
            });
        } else {
            alert('Selecione uma linha para excluir.');
        }
    });
}

// Função para carregar os registros do Firestore na tabela
function carregarRegistros() {
    // Limpe a tabela antes de carregar novos registros
    $('#tabela-dados').DataTable().clear().draw();

    // Obtenha todos os documentos da coleção 'controlemensal-sacolinhas'
    dadosCollection
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                const data = doc.data();
                const id = doc.id;

                // Adicione os dados do documento à tabela
                $('#tabela-dados').DataTable().row.add([
                    id,
                    data.numeroLoja,
                    data.nomeOperador,
                    data.dia,
                    data.totalEasyOpenBagG,
                    data.totalPlanetaAgradeceP,
                    data.vendaTotalMensal,
                    data.totalSacolinhasUN,
                    data.valorTotalSacolinhaTOTAL,
                    data.percentualFaturamento,
                    `<button type="button" class="btn btn-primary btn-sm editar">Editar</button>`
                ]).draw();
            });

            // Inicialize a tabela de dados após carregar os registros
            inicializarTabelaDados();
        })
        .catch(function(error) {
            console.log("Erro ao carregar registros:", error);
        });
}

// Função para inicializar a página
function inicializarPagina() {
    verificarUsuario();
    carregarRegistros();

    // Event listener para o botão "Limpar Filtros"
    document.getElementById('limparFiltros').addEventListener('click', function() {
        document.getElementById('filtroOperador').value = '';
        document.getElementById('filtroLoja').value = '';
        filtrarTabela();
    });

    // Event listener para os campos de filtro
    document.getElementById('filtroOperador').addEventListener('input', filtrarTabela);
    document.getElementById('filtroLoja').addEventListener('input', filtrarTabela);

    // Event listener para o botão "Filtrar"
    document.getElementById('filtrar').addEventListener('click', filtrarTabela);

    // Event listener para o botão "Adicionar Registro"
    document.getElementById('adicionarRegistro').addEventListener('click', function() {
        limparFormulario();
        $('#modalRegistro').modal('show');
    });

    // Event listener para o botão "Salvar Registro"
    document.getElementById('salvarRegistro').addEventListener('click', function() {
        const idRegistro = $("#registroId").val();
        if (idRegistro) {
            // Se o ID do registro existir, atualize-o
            atualizarRegistro(idRegistro);
        } else {
            // Caso contrário, adicione um novo registro
            adicionarRegistro();
        }
    });

    // Event listener para o botão "Cancelar Registro"
    document.getElementById('cancelarRegistro').addEventListener('click', function() {
        limparFormulario();
        $('#modalRegistro').modal('hide');
    });
}

// Chame a função de inicialização da página
inicializarPagina();
// Função para preencher o formulário no modal com os dados do registro a ser editado
function preencherFormularioEditar(docId) {
    // Buscar os dados do Firestore com base no ID do documento
    dadosCollection.doc(docId).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            $("#registroId").val(docId);
            $("#dia").val(data.Dia || '');
            $("#numeroLoja").val(data['Número da Loja'] || '');
            $("#nomeOperador").val(data['Nome do Operador'] || '');
            $("#totalEasyOpenBagG").val(data['TOTAL Easy Open Bag G'] || '');
            $("#totalPlanetaAgradeceP").val(data['TOTAL Planeta Agradece P'] || '');
            $("#vendaTotalMensal").val(data['Venda total mensal (R$)'] || '');
            $("#totalSacolinhas").val(data['Total de Sacolinhas (UN)'] || '');
            $("#valorSacolinhaG").val(data['Valor total sacolinha G (R$)'] || '');
            $("#valorSacolinhaP").val(data['Valor total sacolinha P (R$)'] || '');
            $("#valorTotalSacolinha").val(data['Valor Total sacolinha (R$)'] || '');
            $("#percentualFaturamento").val(data['% Faturamento'] || '');
            $("#observacao").val(data['Observação'] || '');
            calcularCamposDependentes();
            $("#modalRegistroLabel").text("Editar Registro");
            $("#salvarRegistro").off("click").click(() => editarRegistro(docId));
            $("#modalRegistro").modal("show");
        } else {
            console.error('Documento não encontrado.');
        }
    }).catch((error) => {
        console.error('Erro ao obter documento:', error);
    });
}

// Função para carregar dados do Firebase e preencher a tabela
function carregarDados() {
    dadosCollection.get().then((querySnapshot) => {
        const tabela = $('#tabela-dados').DataTable();
        tabela.clear().draw(); // Limpa a tabela antes de adicionar dados
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const rowData = [
                data.Dia || '',
                data['Número da Loja'] || '',
                data['Nome do Operador'] || '',
                data['TOTAL Easy Open Bag G'] || '',
                data['TOTAL Planeta Agradece P'] || '',
                data['Venda total mensal (R$)'] || '',
                data['Total de Sacolinhas (UN)'] || '',
                data['Valor total sacolinha G (R$)'] || '',
                data['Valor total sacolinha P (R$)'] || '',
                data['Valor Total sacolinha (R$)'] || '',
                data['% Faturamento'] || '',
                data['Observação'] || '',
                `<button onclick="preencherFormularioEditar('${doc.id}')" class="btn btn-warning" data-toggle="modal" data-target="#modalRegistro"><i class="fas fa-edit"></i></button>`,
                `<button onclick="excluirRegistro('${doc.id}')" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>`,
            ];
            tabela.row.add(rowData).draw();
        });
    }).catch((error) => {
        console.error('Erro ao carregar dados:', error);
    });
}

// Chame a função para carregar dados quando a página carregar
$(document).ready(function () {
    carregarDados();
});

// Ao clicar no botão "Adicionar Registro", limpar o formulário e abrir o modal
$("#adicionarRegistro").click(function () {
    limparFormulario();
    $("#modalRegistroLabel").text("Adicionar Registro");
    $("#salvarRegistro").off("click").click(adicionarRegistro);
    $("#modalRegistro").modal("show");
});

// Ao fechar o modal, limpar o formulário
$("#modalRegistro").on("hidden.bs.modal", function () {
    limparFormulario();
});

// Calcular campos dependentes ao alterar os valores
$("#totalEasyOpenBagG, #totalPlanetaAgradeceP, #vendaTotalMensal").change(function () {
    calcularCamposDependentes();
});

// Chame a função para verificar o usuário quando a página carregar
$(document).ready(function () {
    verificarUsuario();
    carregarDados(); // Carregue os dados da tabela, se necessário
});

// Coloque esse código no final do seu script JavaScript existente
document.addEventListener("DOMContentLoaded", function () {
    const userEmail = document.getElementById('userEmailDisplay').textContent;
    const filtroLoja = document.getElementById('filtroLoja');

    if (userEmail === 'gestaofrentecaixa@gmail.com') {
        // Se o usuário for "gestaofrentecaixa@gmail.com", selecione a opção "Todas as Lojas" automaticamente
        filtroLoja.value = 'Todas as Lojas';
    } else if (userEmail === 'fcaixa01@barbosasm.com.br') {
        // Se o usuário for "fcaixa01@barbosasm.com.br", selecione a loja 1001 automaticamente
        filtroLoja.value = '1001';
    } else if (userEmail === 'fcaixa02@barbosasm.com.br') {
        // Se o usuário for "fcaixa02@barbosasm.com.br", selecione a loja 1002 automaticamente
        filtroLoja.value = '1002';
    } else if (userEmail === 'fcaixa03@barbosasm.com.br') {
        // Se o usuário for "fcaixa03@barbosasm.com.br", selecione a loja 1003 automaticamente
        filtroLoja.value = '1003';
    } // Continue adicionando as condições para outros usuários e lojas

    // Dispare o evento onchange para que a tabela seja filtrada automaticamente
    filtroLoja.dispatchEvent(new Event('change'));
});
