document.addEventListener("DOMContentLoaded", function () {
    // Crie um objeto que mapeie os emails para os valores das opções do dropdown
    const emailToOptionValue = {
        'gestaofrentecaixa@gmail.com': 'Todas as Lojas',
        'fcaixa01@barbosasm.com.br': '1001',
        'fcaixa02@barbosasm.com.br': '1002',
        // Adicione os demais emails e valores das opções aqui...
    };

    // Obtenha o email do usuário logado
    const userEmail = document.getElementById('userEmailDisplay').textContent;

    // Obtenha o elemento do dropdown
    const filtroLoja = document.getElementById('filtroLoja');

    // Obtenha o valor da opção correspondente ao email do usuário
    const optionValue = emailToOptionValue[userEmail];

    // Se a opção correspondente for encontrada, selecione-a no dropdown e acione o evento de clique
    if (optionValue) {
        // Selecione a opção correspondente
        filtroLoja.value = optionValue;

        // Crie um evento de clique
        const eventoClick = new Event('click');

        // Acione o evento de clique no dropdown
        filtroLoja.dispatchEvent(eventoClick);
    }
});
