document.addEventListener("DOMContentLoaded", function () {
    // Crie um objeto que mapeie os emails para as lojas correspondentes
    const emailToLoja = {
        'gestaofrentecaixa@gmail.com': null, // null representa todas as lojas
        'fcaixa01@barbosasm.com.br': '1001',
        'fcaixa02@barbosasm.com.br': '1002',
        // Adicione os demais emails e lojas aqui...
    };

    // Obtenha o email do usuário logado
    const userEmail = document.getElementById('userEmailDisplay').textContent;

    // Obtenha a tabela DataTable (substitua 'tabela' pelo seletor correto)
const data = $("#tabela-dados").DataTable();

    // Defina a função de filtro com base no email do usuário
    tabela.column(2).search(emailToLoja[userEmail] || '', true, false).draw();
});
