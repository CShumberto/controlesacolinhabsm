// Função para filtrar a tabela com base nos campos "Operador" e "Loja"
function filtrarTabela() {
    const filtroOperador = document.getElementById('filtroOperador').value.toLowerCase();
    const filtroLoja = document.getElementById('filtroLoja').value.toLowerCase();
    const userEmail = document.getElementById('userEmailDisplay').textContent;

    const tbody = document.querySelector('tbody');
    const linhas = tbody.getElementsByTagName('tr');

    // Crie um objeto que mapeie os emails para os números das lojas
    const emailToLoja = {
        'gestaofrentecaixa@gmail.com': 'Todas as Lojas',
        'fcaixa01@barbosasm.com.br': '1001',
        'fcaixa02@barbosasm.com.br': '1002',
        // Adicione os demais emails e números das lojas aqui...
    };

    // Obtenha a loja correspondente ao email do usuário ou defina como "Todas as Lojas" por padrão
    const lojaSelecionada = emailToLoja[userEmail] || 'Todas as Lojas';

    // Itere pelas linhas da tabela e mostre/oculte com base nos filtros
    for (let i = 0; i < linhas.length; i++) {
        const linha = linhas[i];
        const colunaOperador = linha.getElementsByTagName('td')[2];
        const colunaLoja = linha.getElementsByTagName('td')[1];

        if (colunaOperador && colunaLoja) {
            const operador = colunaOperador.textContent.toLowerCase();
            const loja = colunaLoja.textContent.toLowerCase();

            // Verifique se a linha atende aos critérios de filtro
            if (operador.includes(filtroOperador) && (loja === lojaSelecionada || lojaSelecionada === 'Todas as Lojas')) {
                linha.style.display = '';
            } else {
                linha.style.display = 'none';
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const filtroLoja = document.getElementById('filtroLoja');

    // Dispare o evento onchange para que a tabela seja filtrada automaticamente
    filtroLoja.dispatchEvent(new Event('change'));
});
