// Mapeamento de emails para lojas
const mapeamentoEmailLojas = {
    'gestaofrentecaixa@gmail.com': [], // Se o usuário for "gestaofrentecaixa@gmail.com", não aplique nenhum filtro, exiba todas as lojas
    'fcaixa01@barbosasm.com.br': ['1001'], // Se o usuário for "fcaixa01@barbosasm.com.br", filtre apenas a loja 1001
    'fcaixa02@barbosasm.com.br': ['1002'],
    'fcaixa03@barbosasm.com.br': ['1003'],
    // Adicione outras entradas de acordo com os emails dos usuários e as lojas correspondentes
};

function carregarDados() {
    // Obtenha as lojas correspondentes ao email do usuário
    const lojasFiltradas = mapeamentoEmailLojas[userEmail] || [];

    dadosCollection.get().then((querySnapshot) => {
        const tabela = $('#tabela-dados').DataTable();
        tabela.clear().draw(); // Limpa a tabela antes de adicionar dados

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            // Verifique se a loja atual está na lista de lojas permitidas para o usuário
            if (lojasFiltradas.includes(data['Número da Loja'])) {
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
            }
        });
    }).catch((error) => {
        console.error('Erro ao carregar dados:', error);
    });
}
