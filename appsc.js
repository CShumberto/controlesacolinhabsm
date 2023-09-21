
// Função para filtrar a tabela com base nos campos "Operador" e "Loja"
function filtrarTabela() {
    const filtroOperador = document.getElementById('filtroOperador').value.toLowerCase();
    const filtroLoja = document.getElementById('filtroLoja').value.toLowerCase();
    const userEmail = document.getElementById('userEmailDisplay').textContent;

    const tbody = document.querySelector('tbody');
    const linhas = tbody.getElementsByTagName('tr');

    // Defina aqui as regras de filtragem com base no usuário logado (userEmail)
    let lojasFiltradas = [];

    if (userEmail === 'gestaofrentecaixa@gmail.com') {
        // Se o usuário for "gestaofrentecaixa@gmail.com", não aplique nenhum filtro, exiba todas as lojas
        lojasFiltradas = [];
    } else if (userEmail === 'fcaixa01@barbosasm.com.br') {
        // Se o usuário for "fcaixa01@barbosasm.com.br", filtre apenas a loja 1001
        lojasFiltradas = ['1001'];
    } else if (userEmail === 'fcaixa02@barbosasm.com.br') {
        // Se o usuário for "fcaixa02@barbosasm.com.br", filtre apenas a loja 1002
        lojasFiltradas = ['1002'];
    } else if (userEmail === 'fcaixa03@barbosasm.com.br') {
        // Se o usuário for "fcaixa03@barbosasm.com.br", filtre apenas a loja 1003
        lojasFiltradas = ['1003'];
    } else if (userEmail === 'fcaixa04@barbosasm.com.br') {
        // Se o usuário for "fcaixa04@barbosasm.com.br", filtre apenas a loja 1004
        lojasFiltradas = ['1004'];
    } else if (userEmail === 'fcaixa05@barbosasm.com.br') {
        // Se o usuário for "fcaixa05@barbosasm.com.br", filtre apenas a loja 1005
        lojasFiltradas = ['1005'];
    } else if (userEmail === 'fcaixa06@barbosasm.com.br') {
        // Se o usuário for "fcaixa06@barbosasm.com.br", filtre apenas a loja 1006
        lojasFiltradas = ['1006'];
    } else if (userEmail === 'fcaixa07@barbosasm.com.br') {
        // Se o usuário for "fcaixa07@barbosasm.com.br", filtre apenas a loja 1007
        lojasFiltradas = ['1007'];
    } else if (userEmail === 'fcaixa08@barbosasm.com.br') {
        // Se o usuário for "fcaixa08@barbosasm.com.br", filtre apenas a loja 1008
        lojasFiltradas = ['1008'];
    } else if (userEmail === 'fcaixa09@barbosasm.com.br') {
        // Se o usuário for "fcaixa09@barbosasm.com.br", filtre apenas a loja 1009
        lojasFiltradas = ['1009'];
    } else if (userEmail === 'fcaixa10@barbosasm.com.br') {
        // Se o usuário for "fcaixa10@barbosasm.com.br", filtre apenas a loja 1010
        lojasFiltradas = ['1010'];
    } else if (userEmail === 'fcaixa11@barbosasm.com.br') {
        // Se o usuário for "fcaixa11@barbosasm.com.br", filtre apenas a loja 1011
        lojasFiltradas = ['1011'];
    } else if (userEmail === 'fcaixa12@barbosasm.com.br') {
        // Se o usuário for "fcaixa12@barbosasm.com.br", filtre apenas a loja 1012
        lojasFiltradas = ['1012'];
    } else if (userEmail === 'fcaixa13@barbosasm.com.br') {
        // Se o usuário for "fcaixa13@barbosasm.com.br", filtre apenas a loja 1013
        lojasFiltradas = ['1013'];
    } else if (userEmail === 'fcaixa14@barbosasm.com.br') {
        // Se o usuário for "fcaixa14@barbosasm.com.br", filtre apenas a loja 1014
        lojasFiltradas = ['1014'];
    } else if (userEmail === 'fcaixa15@barbosasm.com.br') {
        // Se o usuário for "fcaixa15@barbosasm.com.br", filtre apenas a loja 1015
        lojasFiltradas = ['1015'];
    } else if (userEmail === 'fcaixa16@barbosasm.com.br') {
        // Se o usuário for "fcaixa16@barbosasm.com.br", filtre apenas a loja 1016
        lojasFiltradas = ['1016'];
    } else if (userEmail === 'fcaixa17@barbosasm.com.br') {
        // Se o usuário for "fcaixa17@barbosasm.com.br", filtre apenas a loja 1017
        lojasFiltradas = ['1017'];
    } else if (userEmail === 'fcaixa18@barbosasm.com.br') {
        // Se o usuário for "fcaixa18@barbosasm.com.br", filtre apenas a loja 1018
        lojasFiltradas = ['1018'];
    } else if (userEmail === 'fcaixa19@barbosasm.com.br') {
        // Se o usuário for "fcaixa19@barbosasm.com.br", filtre apenas a loja 1019
        lojasFiltradas = ['1019'];
    } else if (userEmail === 'fcaixa20@barbosasm.com.br') {
        // Se o usuário for "fcaixa20@barbosasm.com.br", filtre apenas a loja 1020
        lojasFiltradas = ['1020'];
    } else if (userEmail === 'fcaixa21@barbosasm.com.br') {
        // Se o usuário for "fcaixa21@barbosasm.com.br", filtre apenas a loja 1021
        lojasFiltradas = ['1021'];
    } else if (userEmail === 'fcaixa22@barbosasm.com.br') {
        // Se o usuário for "fcaixa22@barbosasm.com.br", filtre apenas a loja 1022
        lojasFiltradas = ['1022'];
    } else if (userEmail === 'fcaixa23@barbosasm.com.br') {
        // Se o usuário for "fcaixa23@barbosasm.com.br", filtre apenas a loja 1023
        lojasFiltradas = ['1023'];
    } else if (userEmail === 'fcaixa24@barbosasm.com.br') {
        // Se o usuário for "fcaixa24@barbosasm.com.br", filtre apenas a loja 1024
        lojasFiltradas = ['1024'];
    } else if (userEmail === 'fcaixa25@barbosasm.com.br') {
        // Se o usuário for "fcaixa25@barbosasm.com.br", filtre apenas a loja 1025
        lojasFiltradas = ['1025'];
    } else if (userEmail === 'fcaixa26@barbosasm.com.br') {
        // Se o usuário for "fcaixa26@barbosasm.com.br", filtre apenas a loja 1026
        lojasFiltradas = ['1026'];
    } else if (userEmail === 'fcaixa27@barbosasm.com.br') {
        // Se o usuário for "fcaixa27@barbosasm.com.br", filtre apenas a loja 1027
        lojasFiltradas = ['1027'];
    } else if (userEmail === 'fcaixa28@barbosasm.com.br') {
        // Se o usuário for "fcaixa28@barbosasm.com.br", filtre apenas a loja 1028
        lojasFiltradas = ['1028'];
    } else if (userEmail === 'fcaixa29@barbosasm.com.br') {
        // Se o usuário for "fcaixa29@barbosasm.com.br", filtre apenas a loja 1029
        lojasFiltradas = ['1029'];
    } else if (userEmail === 'fcaixa30@barbosasm.com.br') {
        // Se o usuário for "fcaixa30@barbosasm.com.br", filtre apenas a loja 1030
        lojasFiltradas = ['1030'];
    } else if (userEmail === 'fcaixa31@barbosasm.com.br') {
        // Se o usuário for "fcaixa31@barbosasm.com.br", filtre apenas a loja 1031
        lojasFiltradas = ['1031'];
    } else if (userEmail === 'fcaixa32@barbosasm.com.br') {
        // Se o usuário for "fcaixa32@barbosasm.com.br", filtre apenas a loja 1032
        lojasFiltradas = ['1032'];
    } else if (userEmail === 'fcaixa33@barbosasm.com.br') {
        // Se o usuário for "fcaixa33@barbosasm.com.br", filtre apenas a loja 1033
        lojasFiltradas = ['1033'];
    } else if (userEmail === 'fcaixa34@barbosasm.com.br') {
        // Se o usuário for "fcaixa34@barbosasm.com.br", filtre apenas a loja 1034
        lojasFiltradas = ['1034'];
    } else if (userEmail === 'fcaixa35@barbosasm.com.br') {
        // Se o usuário for "fcaixa35@barbosasm.com.br", filtre apenas a loja 1035
        lojasFiltradas = ['1035'];
    } else if (userEmail === 'fcaixa36@barbosasm.com.br') {
        // Se o usuário for "fcaixa36@barbosasm.com.br", filtre apenas a loja 1036
        lojasFiltradas = ['1036'];
    } else if (userEmail === 'fcaixa37@barbosasm.com.br') {
        // Se o usuário for "fcaixa37@barbosasm.com.br", filtre apenas a loja 1037
        lojasFiltradas = ['1037'];
    } else if (userEmail === 'fcaixa38@barbosasm.com.br') {
        // Se o usuário for "fcaixa38@barbosasm.com.br", filtre apenas a loja 1038
        lojasFiltradas = ['1038'];
    } else if (userEmail === 'fcaixa39@barbosasm.com.br') {
        // Se o usuário for "fcaixa39@barbosasm.com.br", filtre apenas a loja 1039
        lojasFiltradas = ['1039'];
    } else if (userEmail === 'fcaixa40@barbosasm.com.br') {
        // Se o usuário for "fcaixa40@barbosasm.com.br", filtre apenas a loja 1040
        lojasFiltradas = ['1040'];
    } else if (userEmail === 'fcaixa41@barbosasm.com.br') {
        // Se o usuário for "fcaixa41@barbosasm.com.br", filtre apenas a loja 1041
        lojasFiltradas = ['1041'];
    } else if (userEmail === 'fcaixa42@barbosasm.com.br') {
        // Se o usuário for "fcaixa42@barbosasm.com.br", filtre apenas a loja 1042
        lojasFiltradas = ['1042'];
    } else if (userEmail === 'fcaixa43@barbosasm.com.br') {
        // Se o usuário for "fcaixa43@barbosasm.com.br", filtre apenas a loja 1043
        lojasFiltradas = ['1043'];
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
} else if (userEmail === 'fcaixa04@barbosasm.com.br') {
    // Se o usuário for "fcaixa04@barbosasm.com.br", selecione a loja 1004 automaticamente
    filtroLoja.value = '1004';
} else if (userEmail === 'fcaixa05@barbosasm.com.br') {
    // Se o usuário for "fcaixa05@barbosasm.com.br", selecione a loja 1005 automaticamente
    filtroLoja.value = '1005';
} else if (userEmail === 'fcaixa06@barbosasm.com.br') {
    // Se o usuário for "fcaixa06@barbosasm.com.br", selecione a loja 1006 automaticamente
    filtroLoja.value = '1006';
} else if (userEmail === 'fcaixa07@barbosasm.com.br') {
    // Se o usuário for "fcaixa07@barbosasm.com.br", selecione a loja 1007 automaticamente
    filtroLoja.value = '1007';
} else if (userEmail === 'fcaixa08@barbosasm.com.br') {
    // Se o usuário for "fcaixa08@barbosasm.com.br", selecione a loja 1008 automaticamente
    filtroLoja.value = '1008';
} else if (userEmail === 'fcaixa09@barbosasm.com.br') {
    // Se o usuário for "fcaixa09@barbosasm.com.br", selecione a loja 1009 automaticamente
    filtroLoja.value = '1009';
} else if (userEmail === 'fcaixa10@barbosasm.com.br') {
    // Se o usuário for "fcaixa10@barbosasm.com.br", selecione a loja 1010 automaticamente
    filtroLoja.value = '1010';
} else if (userEmail === 'fcaixa11@barbosasm.com.br') {
    // Se o usuário for "fcaixa11@barbosasm.com.br", selecione a loja 1011 automaticamente
    filtroLoja.value = '1011';
} else if (userEmail === 'fcaixa12@barbosasm.com.br') {
    // Se o usuário for "fcaixa12@barbosasm.com.br", selecione a loja 1012 automaticamente
    filtroLoja.value = '1012';
} else if (userEmail === 'fcaixa13@barbosasm.com.br') {
    // Se o usuário for "fcaixa13@barbosasm.com.br", selecione a loja 1013 automaticamente
    filtroLoja.value = '1013';
} else if (userEmail === 'fcaixa14@barbosasm.com.br') {
    // Se o usuário for "fcaixa14@barbosasm.com.br", selecione a loja 1014 automaticamente
    filtroLoja.value = '1014';
} else if (userEmail === 'fcaixa15@barbosasm.com.br') {
    // Se o usuário for "fcaixa15@barbosasm.com.br", selecione a loja 1015 automaticamente
    filtroLoja.value = '1015';
} else if (userEmail === 'fcaixa16@barbosasm.com.br') {
    // Se o usuário for "fcaixa16@barbosasm.com.br", selecione a loja 1016 automaticamente
    filtroLoja.value = '1016';
} else if (userEmail === 'fcaixa17@barbosasm.com.br') {
    // Se o usuário for "fcaixa17@barbosasm.com.br", selecione a loja 1017 automaticamente
    filtroLoja.value = '1017';
} else if (userEmail === 'fcaixa18@barbosasm.com.br') {
    // Se o usuário for "fcaixa18@barbosasm.com.br", selecione a loja 1018 automaticamente
    filtroLoja.value = '1018';
} else if (userEmail === 'fcaixa19@barbosasm.com.br') {
    // Se o usuário for "fcaixa19@barbosasm.com.br", selecione a loja 1019 automaticamente
    filtroLoja.value = '1019';
} else if (userEmail === 'fcaixa20@barbosasm.com.br') {
    // Se o usuário for "fcaixa20@barbosasm.com.br", selecione a loja 1020 automaticamente
    filtroLoja.value = '1020';
} else if (userEmail === 'fcaixa21@barbosasm.com.br') {
    // Se o usuário for "fcaixa21@barbosasm.com.br", selecione a loja 1021 automaticamente
    filtroLoja.value = '1021';
} else if (userEmail === 'fcaixa22@barbosasm.com.br') {
    // Se o usuário for "fcaixa22@barbosasm.com.br", selecione a loja 1022 automaticamente
    filtroLoja.value = '1022';
} else if (userEmail === 'fcaixa23@barbosasm.com.br') {
    // Se o usuário for "fcaixa23@barbosasm.com.br", selecione a loja 1023 automaticamente
    filtroLoja.value = '1023';
} else if (userEmail === 'fcaixa24@barbosasm.com.br') {
    // Se o usuário for "fcaixa24@barbosasm.com.br", selecione a loja 1024 automaticamente
    filtroLoja.value = '1024';
} else if (userEmail === 'fcaixa25@barbosasm.com.br') {
    // Se o usuário for "fcaixa25@barbosasm.com.br", selecione a loja 1025 automaticamente
    filtroLoja.value = '1025';
} else if (userEmail === 'fcaixa26@barbosasm.com.br') {
    // Se o usuário for "fcaixa26@barbosasm.com.br", selecione a loja 1026 automaticamente
    filtroLoja.value = '1026';
} else if (userEmail === 'fcaixa27@barbosasm.com.br') {
    // Se o usuário for "fcaixa27@barbosasm.com.br", selecione a loja 1027 automaticamente
    filtroLoja.value = '1027';
} else if (userEmail === 'fcaixa28@barbosasm.com.br') {
    // Se o usuário for "fcaixa28@barbosasm.com.br", selecione a loja 1028 automaticamente
    filtroLoja.value = '1028';
} else if (userEmail === 'fcaixa29@barbosasm.com.br') {
    // Se o usuário for "fcaixa29@barbosasm.com.br", selecione a loja 1029 automaticamente
    filtroLoja.value = '1029';
} else if (userEmail === 'fcaixa30@barbosasm.com.br') {
    // Se o usuário for "fcaixa30@barbosasm.com.br", selecione a loja 1030 automaticamente
    filtroLoja.value = '1030';
} else if (userEmail === 'fcaixa31@barbosasm.com.br') {
    // Se o usuário for "fcaixa31@barbosasm.com.br", selecione a loja 1031 automaticamente
    filtroLoja.value = '1031';
} else if (userEmail === 'fcaixa32@barbosasm.com.br') {
    // Se o usuário for "fcaixa32@barbosasm.com.br", selecione a loja 1032 automaticamente
    filtroLoja.value = '1032';
} else if (userEmail === 'fcaixa33@barbosasm.com.br') {
    // Se o usuário for "fcaixa33@barbosasm.com.br", selecione a loja 1033 automaticamente
    filtroLoja.value = '1033';
} else if (userEmail === 'fcaixa34@barbosasm.com.br') {
    // Se o usuário for "fcaixa34@barbosasm.com.br", selecione a loja 1034 automaticamente
    filtroLoja.value = '1034';
} else if (userEmail === 'fcaixa35@barbosasm.com.br') {
    // Se o usuário for "fcaixa35@barbosasm.com.br", selecione a loja 1035 automaticamente
    filtroLoja.value = '1035';
} else if (userEmail === 'fcaixa36@barbosasm.com.br') {
    // Se o usuário for "fcaixa36@barbosasm.com.br", selecione a loja 1036 automaticamente
    filtroLoja.value = '1036';
} else if (userEmail === 'fcaixa37@barbosasm.com.br') {
    // Se o usuário for "fcaixa37@barbosasm.com.br", selecione a loja 1037 automaticamente
    filtroLoja.value = '1037';
} else if (userEmail === 'fcaixa38@barbosasm.com.br') {
    // Se o usuário for "fcaixa38@barbosasm.com.br", selecione a loja 1038 automaticamente
    filtroLoja.value = '1038';
} else if (userEmail === 'fcaixa39@barbosasm.com.br') {
    // Se o usuário for "fcaixa39@barbosasm.com.br", selecione a loja 1039 automaticamente
    filtroLoja.value = '1039';
} else if (userEmail === 'fcaixa40@barbosasm.com.br') {
    // Se o usuário for "fcaixa40@barbosasm.com.br", selecione a loja 1040 automaticamente
    filtroLoja.value = '1040';
} else if (userEmail === 'fcaixa41@barbosasm.com.br') {
    // Se o usuário for "fcaixa41@barbosasm.com.br", selecione a loja 1041 automaticamente
    filtroLoja.value = '1041';
} else if (userEmail === 'fcaixa42@barbosasm.com.br') {
    // Se o usuário for "fcaixa42@barbosasm.com.br", selecione a loja 1042 automaticamente
    filtroLoja.value = '1042';
} else if (userEmail === 'fcaixa43@barbosasm.com.br') {
    // Se o usuário for "fcaixa43@barbosasm.com.br", selecione a loja 1043 automaticamente
    filtroLoja.value = '1043';
}

// Dispare o evento onchange para que a tabela seja filtrada automaticamente
filtroLoja.dispatchEvent(new Event('change'));
});

