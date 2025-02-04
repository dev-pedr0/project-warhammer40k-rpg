//Funcionamento dos botões de Aliados
const areaAliados = document.getElementById('area-aliados');
const aliadosMais = document.getElementById('mais-alidados');
const aliadosMenos = document.getElementById('menos-aliados');

let aliadoCount = areaAliados.querySelectorAll('.container-aliados .input-aliado').length;

aliadosMais.addEventListener('click', (event) => {
    event.preventDefault();
    aliadoCount++;
    const novaDivInput = document.createElement('div');
    novaDivInput.classList.add('container-aliados');
    novaDivInput.innerHTML = `
        <input type="text" id="al${aliadoCount}" name="allies[${aliadoCount}]">
    `;
    areaAliados.appendChild(novaDivInput);
});

aliadosMenos.addEventListener('click', (event) => {
    event.preventDefault();
    if (areaAliados.children.length > 0) {
        areaAliados.lastElementChild.remove();
        aliadoCount--;
    }
});

//Funcionamento dos botões de Inimigos
const areaInimigos = document.getElementById('area-inimigos');
const inimigosMais = document.getElementById('mais-inimigos');
const inimigosMenos = document.getElementById('menos-inimigos');

let inimigoCount = areaInimigos.querySelectorAll('.container-inimigos .input-aliado').length;

inimigosMais.addEventListener('click', (event) => {
    event.preventDefault();
    inimigoCount++;
    const novaDivInput = document.createElement('div');
    novaDivInput.classList.add('container-inimigos');
    novaDivInput.innerHTML = `
        <input type="text" id="al${inimigoCount}" name="enemies[${inimigoCount}]">
    `;
    areaInimigos.appendChild(novaDivInput);
});

inimigosMenos.addEventListener('click', (event) => {
    event.preventDefault();
    if (areaInimigos.children.length > 0) {
        areaInimigos.lastElementChild.remove();
        inimigoCount--;
    }
});

//Funcionamento dos Botões de Talento e Traço
const ttMais = document.getElementById("ttmais");
const ttMenos = document.getElementById("ttmenos");
const containerDescricao = document.getElementById("container-descricao");

let ttCount = containerDescricao.querySelectorAll('.item-descricao').length;

ttMais.addEventListener('click', (event) => {
    event.preventDefault();
    ttCount++;

    const novaDiv = document.createElement('div');
    novaDiv.classList.add('item-descricao');

    const novaInput = document.createElement('input');
    novaInput.type = 'text';
    novaInput.name = `talentsAndTraces[${ttCount}][name]`;
    novaInput.id = `tt${ttCount}`;
    novaInput.placeholder = 'Nome do Talento ou Traço';

    const novoTextarea = document.createElement('textarea');
    novoTextarea.name = `talentsAndTraces[${ttCount}][description]`;
    novoTextarea.id = `descricao${ttCount}`;
    novoTextarea.rows = 1;
    novoTextarea.textContent = 'Descrição:';

    novaDiv.appendChild(novaInput);
    novaDiv.appendChild(novoTextarea);
    containerDescricao.appendChild(novaDiv);
});

ttMenos.addEventListener('click', (event) => {
    event.preventDefault();
    if (ttCount > 0) {
        containerDescricao.lastElementChild.remove();
        ttCount--;
    }
});

//Funcionamento dos Botões de Armas
const armasContainer = document.getElementById('armas-container');
const armaMais = document.getElementById('arma-mais');
const armaMenos = document.getElementById('arma-menos');

let armaCount = armasContainer.querySelectorAll('.grid-container').length;

armaMais.addEventListener('click', (event) => {
    event.preventDefault();
    armaCount++;

    const originalArma = document.querySelector('.grid-container');
    const novaArma = originalArma.cloneNode(true);
    
    const inputs = novaArma.querySelectorAll('input');
    inputs.forEach(input => {
        const velhodId = input.id;
        const velhoName = input.name;
        const novoId = velhodId.replace(/_\d+$/, `_${armaCount}`);
        const novoName = velhoName.replace(/\[\d+\]/, `[${armaCount}]`);

        input.id = novoId;
        input.name = novoName;
        input.value = '';
    });

    armasContainer.appendChild(novaArma);
});

armaMenos.addEventListener('click', (event) => {
    event.preventDefault();
    const armas = document.querySelectorAll('.grid-container');
    if (armas.length > 0) {
        armas[armas.length - 1].remove();
        armaCount--;
    }
});

//Funcionamento dos Botões de Equipamento
const equipamentoContainer = document.getElementById('equipamento-container');
const equipMais = document.getElementById('equip-mais');
const equipMenos = document.getElementById('equip-menos');

let equipCount = equipamentoContainer.querySelectorAll('.equipamento-lista').length;

equipMais.addEventListener('click', (event) => {
    event.preventDefault();
    equipCount++;

    const originalEquip = document.querySelector('.equipamento-lista');
    const novoEquip = originalEquip.cloneNode(true);

    const inputs = novoEquip.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        const velhoId = input.id;
        const velhoName = input.name;
        const novoId = velhoId.replace(/\d+$/, equipCount);
        const novoName = velhoName.replace(/\[\d+\]/, `[${equipCount}]`);

        input.id = novoId;
        input.name = novoName;
        input.value = '';
    });

    equipamentoContainer.appendChild(novoEquip);
});

equipMenos.addEventListener('click', (event) => {
    event.preventDefault();
    const equipamentos = document.querySelectorAll('.equipamento-lista');
    if (equipamentos.length > 0) {
        equipamentos[equipamentos.length - 1].remove();
        equipCount--;
    }
});

//Funcionamento dos Botões de Poderes Psíquicos
const poderContainer = document.getElementById('poder-container');
const poderMais = document.getElementById('poder-mais');
const poderMenos = document.getElementById('poder-menos');

let poderCount = poderContainer.querySelectorAll('.lista-poder').length;

poderMais.addEventListener('click', (event) => {
    event.preventDefault();
    poderCount++;

    const originalPoder = document.querySelector('.lista-poder');
    const novoPoder = originalPoder.cloneNode(true);

    const inputs = novoPoder.querySelectorAll('input');
    inputs.forEach(input => {
        const velhoId = input.id;
        const velhoName = input.name;

        const novoId = velhoId.replace(/\d+$/, poderCount);
        const novoName = velhoName.replace(/\[\d+\]/, `[${equipCount}]`);

        input.id = novoId;
        input.name = novoName;
        input.value = '';
    });

    poderContainer.appendChild(novoPoder);
});

poderMenos.addEventListener('click', (event) => {
    event.preventDefault();

    const poderes = document.querySelectorAll('.lista-poder');
    if (poderes.length > 0) {
        poderes[poderes.length - 1].remove();
        poderCount--;
    }
});

//Funcionamento do Botão que mostra e esconde a aba de Poderes
const mostrarEsconderPoderes = document.getElementById('mostrar-esconder-poder');
const containerPsiquico = document.querySelector('.psiquico');

mostrarEsconderPoderes.addEventListener('click', (event) => {
    event.preventDefault();

    if(containerPsiquico.style.display === "none") {
        containerPsiquico.style.display = "flex";
        mostrarEsconderPoderes.innerHTML = "Esconder Poderes";
    } else {
        containerPsiquico.style.display = "none";
        mostrarEsconderPoderes.innerHTML = "Mostrar Poderes";
    } 
});

//Conexão do valor de dezena da característica com o campo de bônus de característica
const inputsValores = document.querySelectorAll('input.caracteristica-valor');

inputsValores.forEach(input => {
    input.addEventListener('input', () => {
        const id = input.id;
        const secundarioId = id + 'b';
        const secundarioInput = document.getElementById(secundarioId);

        if(secundarioInput) {
            const valor = parseInt(input.value, 10) || 0;
            const dezena = Math.floor(valor / 10);
            secundarioInput.value = dezena;
        }
    });
});


//Conexão do valor de limite de pontos de destino com o valor máximo que a pontuação atual de pontos de destino pode chegar
const limiteInput = document.getElementById('limite');
const atualInput = document.getElementById('atual');

limiteInput.addEventListener('input', () => {
    const limiteValue = parseInt(limiteInput.value, 10) || 0;
    atualInput.max = limiteValue;
    if (parseInt(atualInput.value, 10) > limiteValue) {
        atualInput.value = limiteValue;
    }
});

//Garantir que apenas uma checkbox seja preenchida em cada perícia
const periciaDiv = document.querySelector(".container-tabelas");
const checkboxes = periciaDiv.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            const grupo = checkbox.dataset.group;

            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox.dataset.group === grupo && otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});

//Somatório de armadura total - armadura e resistência
const inputsArmaduraTotal = document.querySelectorAll(".armadura-total");
const bonusResistencia = document.getElementById("rb");
const resistencia = document.getElementById("r");

inputsArmaduraTotal.forEach(input => {
    const novoId = input.id.replace(/t$/, 'a');
    const inputArmadura = document.getElementById(novoId);

    inputArmadura.addEventListener('input', () => {
        const bonusResistenciaValor = Number(bonusResistencia.value);
        const valorArmadura = Number(inputArmadura.value);
        input.value = valorArmadura + bonusResistenciaValor;
    });

    bonusResistencia.addEventListener('input', () => {
        const bonusResistenciaValor = Number(bonusResistencia.value);
        const valorArmadura = Number(inputArmadura.value);
        input.value = valorArmadura + bonusResistenciaValor;
    });

    resistencia.addEventListener('input', () => {
        const bonusResistenciaValor = Number(bonusResistencia.value);
        const valorArmadura = Number(inputArmadura.value);
        input.value = valorArmadura + bonusResistenciaValor;
    });
});


//Conexão do valor de limite de pontos de vida com o valor máximo que a pontuação atual de pontos de vida pode chegar
const limiteVida = document.getElementById('vida_total');
const atualVida = document.getElementById('vida_atual');

limiteVida.addEventListener('input', () => {
    const limiteValue = parseInt(limiteVida.value, 10) || 0;
    atualVida.max = limiteValue;
    if (parseInt(atualVida.value, 10) > limiteValue) {
        atualVida.value = limiteValue;
    }
});

//Cálculo do Valor limite de fadiga e Conexão do valor de limite de pontos de fadiga com o valor máximo que a pontuação atual de pontos de fadiga pode chegar
bonusResistencia;
resistencia;
const bonusVontade = document.getElementById("vonb");
const vontade = document.getElementById("von");
const limiteFadiga = document.getElementById("fadiga_limite");
const atualFadiga = document.getElementById("fadiga_atual");

bonusResistencia.addEventListener('input', () => {
    const bonusResistenciaValor = Number(bonusResistencia.value);
    const bonusVontadeValor = Number(bonusVontade.value);
    limiteFadiga.value = bonusResistenciaValor + bonusVontadeValor;

    const limiteFadigaValor = parseInt(limiteFadiga.value, 10) || 0;
    atualFadiga.max = limiteFadigaValor;
    if (parseInt(atualFadiga.value, 10) > limiteFadigaValor) {
        atualFadiga.value = limiteFadigaValor;
    }
});

resistencia.addEventListener('input', () => {
    const bonusResistenciaValor = Number(bonusResistencia.value);
    const bonusVontadeValor = Number(bonusVontade.value);
    limiteFadiga.value = bonusResistenciaValor + bonusVontadeValor;

    const limiteFadigaValor = parseInt(limiteFadiga.value, 10) || 0;
    atualFadiga.max = limiteFadigaValor;
    if (parseInt(atualFadiga.value, 10) > limiteFadigaValor) {
        atualFadiga.value = limiteFadigaValor;
    } 
});

bonusVontade.addEventListener('input', () => {
    const bonusResistenciaValor = Number(bonusResistencia.value);
    const bonusVontadeValor = Number(bonusVontade.value);
    limiteFadiga.value = bonusResistenciaValor + bonusVontadeValor;

    const limiteFadigaValor = parseInt(limiteFadiga.value, 10) || 0;
    atualFadiga.max = limiteFadigaValor;
    if (parseInt(atualFadiga.value, 10) > limiteFadigaValor) {
        atualFadiga.value = limiteFadigaValor;
    }
});

vontade.addEventListener('input', () => {
    const bonusResistenciaValor = Number(bonusResistencia.value);
    const bonusVontadeValor = Number(bonusVontade.value);
    limiteFadiga.value = bonusResistenciaValor + bonusVontadeValor;

    const limiteFadigaValor = parseInt(limiteFadiga.value, 10) || 0;
    atualFadiga.max = limiteFadigaValor;
    if (parseInt(atualFadiga.value, 10) > limiteFadigaValor) {
        atualFadiga.value = limiteFadigaValor;
    }
});

limiteFadiga.addEventListener('input', () => {
    const limiteFadigaValor = parseInt(limiteFadiga.value, 10) || 0;
    atualFadiga.max = limiteFadigaValor;
    if (parseInt(atualFadiga.value, 10) > limiteFadigaValor) {
        atualFadiga.value = limiteFadigaValor;
    }
});

//Identificador que marca características cujo bônus sejam menorque o valor de fadiga;
bonusHabilidadeCombate = document.getElementById("hecb");
bonusHabilidadeBalistica = document.getElementById("hbb");
bonusForca = document.getElementById("fb");
bonusResistencia;
bonusAgilidade = document.getElementById("agb");
bonusInteligencia = document.getElementById("intb");
bonusPercepcao = document.getElementById("perb");
bonusVontade;
bonusSocializacao = document.getElementById("socb");
bonusInfluencia = document.getElementById("iflb");
atualFadiga;

atualFadiga.addEventListener('input', () => {
    if(Number(atualFadiga.value) > Number(bonusHabilidadeCombate.value)) {
        bonusHabilidadeCombate.parentNode.parentNode.style.backgroundColor = "red";
    } else {
        bonusHabilidadeCombate.parentNode.parentNode.style.backgroundColor = "#140D0B";
    }
    if(Number(atualFadiga.value) > Number(bonusHabilidadeBalistica.value)) {
        bonusHabilidadeBalistica.parentNode.parentNode.style.backgroundColor = "red";
    } else {
        bonusHabilidadeBalistica.parentNode.parentNode.style.backgroundColor = "#140D0B";
    }
    if(Number(atualFadiga.value) > Number(bonusForca.value)) {
        bonusForca.parentNode.parentNode.style.backgroundColor = "red";
    } else {
        bonusForca.parentNode.parentNode.style.backgroundColor = "#140D0B";
    }
    if(Number(atualFadiga.value) > Number(bonusResistencia.value)) {
        bonusResistencia.parentNode.parentNode.style.backgroundColor = "red";
    } else {
        bonusResistencia.parentNode.parentNode.style.backgroundColor = "#140D0B";
    }
    if(Number(atualFadiga.value) > Number(bonusAgilidade.value)) {
        bonusAgilidade.parentNode.parentNode.style.backgroundColor = "red";
    } else {
        bonusAgilidade.parentNode.parentNode.style.backgroundColor = "#140D0B";
    }
    if(Number(atualFadiga.value) > Number(bonusInteligencia.value)) {
        bonusInteligencia.parentNode.parentNode.style.backgroundColor = "red";
    } else {
        bonusInteligencia.parentNode.parentNode.style.backgroundColor = "#140D0B";
    }
    if(Number(atualFadiga.value) > Number(bonusPercepcao.value)) {
        bonusPercepcao.parentNode.parentNode.style.backgroundColor = "red";
    } else {
        bonusPercepcao.parentNode.parentNode.style.backgroundColor = "#140D0B";
    }
    if(Number(atualFadiga.value) > Number(bonusVontade.value)) {
        bonusVontade.parentNode.parentNode.style.backgroundColor = "red";
    } else {
        bonusVontade.parentNode.parentNode.style.backgroundColor = "#140D0B";
    }
    if(Number(atualFadiga.value) > Number(bonusSocializacao.value)) {
        bonusSocializacao.parentNode.parentNode.style.backgroundColor = "red";
    } else {
        bonusSocializacao.parentNode.parentNode.style.backgroundColor = "#140D0B";
    }
    if(Number(atualFadiga.value) > Number(bonusInfluencia.value)) {
        bonusInfluencia.parentNode.parentNode.style.backgroundColor = "red";
    } else {
        bonusInfluencia.parentNode.parentNode.style.backgroundColor = "#140D0B";
    }
});

//Calculo de todos os tipos de movimento da ficha
bonusAgilidade;
const agilidade = document.getElementById("ag");

bonusAgilidade.addEventListener('input', () => {
    const movimentoMetade = document.getElementById("movi_metade");
    const movimentoTotal = document.getElementById("movi_total");
    const movimentoDisparada = document.getElementById("movi_disparada");
    const movimentoCorrida = document.getElementById("movi_corrida");

    movimentoMetade.value = Number(bonusAgilidade.value);
    movimentoTotal.value = Number(bonusAgilidade.value) * 2;
    movimentoDisparada.value = Number(bonusAgilidade.value) * 3;
    movimentoCorrida.value = Number(bonusAgilidade.value) * 6;
});

agilidade.addEventListener('input', () => {
    const movimentoMetade = document.getElementById("movi_metade");
    const movimentoTotal = document.getElementById("movi_total");
    const movimentoDisparada = document.getElementById("movi_disparada");
    const movimentoCorrida = document.getElementById("movi_corrida");

    movimentoMetade.value = Number(bonusAgilidade.value);
    movimentoTotal.value = Number(bonusAgilidade.value) * 2;
    movimentoDisparada.value = Number(bonusAgilidade.value) * 3;
    movimentoCorrida.value = Number(bonusAgilidade.value) * 6;
});