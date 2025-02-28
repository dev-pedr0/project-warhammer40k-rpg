const Fate = require('../models/TwistOfFate');

//current list of existing types of twist of fates. Able to create more
const fateData = [
    {
        fateDiceNumber: "01",
        fateProfecy: "Mutação por fora, corrupção por dentro",
        fateEffect: "Role uma vez na tabela Malignancias",
    },
    {
        fateDiceNumber: "02/05",
        fateProfecy: "Confie em seus medos",
        fateEffect: "Percepção + 5. Ganha a Desordem de Fobia Mental",
    },
    {
        fateDiceNumber: "06/09",
        fateProfecy: "Humanos precisam morrer para a humanidade perdurar",
        fateEffect: "Ganha o talento Saturado. Se possuir ganha Vontade + 2",
    },
    {
        fateDiceNumber: "10/13",
        fateProfecy: "A dor dos tiros é um êxtase comparado a perdição total",
        fateEffect: "Agilidade - 3. 1/sessão ao sofrer Dano Crítico role 1d10. Em um 10: ignora Efeitos Críticos, mas sofre o dano",
    },
    {
        fateDiceNumber: "14/17",
        fateProfecy: "Benção para aliados, tormento para inimigos",
        fateEffect: "Ganha o talento Ódio (escolha um). Se possuir ganha Força + 2",
    },
    {
        fateDiceNumber: "18/21",
        fateProfecy: "O sábio aprende pela morte dos outros",
        fateEffect: "Agilidade ou Inteligência + 3. Habilidade com Combate ou Habilidade Balística - 3",
    },
    {
        fateDiceNumber: "22/25",
        fateProfecy: "Mate o alien antes que ele possa dizer mentiras",
        fateEffect: "Ganha o talento Reação Rápida. Se possuir ganha Agilidade + 2",
    },
    {
        fateDiceNumber: "26/29",
        fateProfecy: "Confiança é subjetivo",
        fateEffect: "Percepção + 3. 1/sessão: ao ganhar corrupção ganha 1 ponto a mais",
    },
    {
        fateDiceNumber: "30/33",
        fateProfecy: "Pensar semeia heresia",
        fateEffect: "Inteligência - 3. 1/sessão: ao ganhar corrupção ganha 1 ponto a menos",
    },
    {
        fateDiceNumber: "34/38",
        fateProfecy: "Heresia gera vingança",
        fateEffect: "Socialização ou Força + 3. Resistência ou Vontade - 3",
    },
    {
        fateDiceNumber: "39/43",
        fateProfecy: "Uma mente sem propósito caminha por lugares sombrios",
        fateEffect: "Ao ganhar uma Desordem Mental, pode escolher ganhar uma nova desordem ao invés de piorar outra",
    },
    {
        fateDiceNumber: "44/49",
        fateProfecy: "Se vale a pena trabalhar por isso, vale a pena morrer por isso",
        fateEffect: "Resistência ou Vontade + 3. Socialização ou Força - 3",
    },
    {
        fateDiceNumber: "50/54",
        fateProfecy: "Se vale a pena trabalhar por isso, vale a pena morrer por isso",
        fateEffect: "Resistência ou Vontade + 3. Socialização ou Força - 3",
    },
    {
        fateDiceNumber: "55/59",
        fateProfecy: "Violência resolve tudo",
        fateEffect: "Habilidade com Combate ou Habilidade Balística + 3. Agilidade ou Inteligência - 3",
    },
    {
        fateDiceNumber: "60/63",
        fateProfecy: "Ignorância é uma sabedoria por si só",
        fateEffect: "Percepção - 3. 1/sessão: ao ganhar corrupção ganha 1 ponto a menos",
    },
    {
        fateDiceNumber: "64/67",
        fateProfecy: "Apenas os insanos tem força suficiente para prosperar",
        fateEffect: "Vontade + 3. 1/sessão: ao ganhar corrupção ganha 1 ponto a mais",
    },
    {
        fateDiceNumber: "68/71",
        fateProfecy: "Uma mente alerta é uma mente saudável",
        fateEffect: "Percepção + 2. Pode re-rolar testes de Atenção para não ser Surpreso",
    },
    {
        fateDiceNumber: "72/75",
        fateProfecy: "Sofrimento é um instrutor incansável",
        fateEffect: "Resistência - 3. 1/sessão: ao levar dano ganha +20 no próximo teste até o final do próximo turno",
    },
    {
        fateDiceNumber: "76/79",
        fateProfecy: "O verdadeiro medo é morrer sem cumprir o seu dever",
        fateEffect: "Ganha o talento Resistente (frio, calor ou medo). Se possuir ganha Resistência + 2",
    },
    {
        fateDiceNumber: "80/83",
        fateProfecy: "Apenas na morte o dever termina",
        fateEffect: "1/sessão: ao sofrer Fadiga, sofre 1 ponto a menos de Fadiga",
    },
    {
        fateDiceNumber: "84/87",
        fateProfecy: "Inocência é uma ilusão",
        fateEffect: "Ganha o talento Intuição Precisa. Se possuir ganha Inteligência + 2",
    },
    {
        fateDiceNumber: "88/91",
        fateProfecy: "Guerrear é humano",
        fateEffect: "Ganha perícia Esquiva rank 1. Se possuir ganha Agilidade + 2",
    },
    {
        fateDiceNumber: "92/95",
        fateProfecy: "Não há substituto para zelo",
        fateEffect: "Ganha o talento Pistas das Multidões. Se possuir ganha Socialização + 2",
    },
    {
        fateDiceNumber: "96/99",
        fateProfecy: "Mesmo o que não tem nada pode oferecer sua vida",
        fateEffect: "Ao usar pontos de destino para não morrer role 1d10. No valor 10: não gasta o ponto",
    },
    {
        fateDiceNumber: "100",
        fateProfecy: "Não pergunte porque servir, apenas como servir",
        fateEffect: "Limite de pontos de destino + 1",
    },
];

//Function that verify existing fates and add/updates fates to the database
const insertFate = async() => {
    try {
        for (const fate of fateData) {
            await Fate.findOneAndUpdate(
                { fateDiceNumber: fate.fateDiceNumber }, // Search fate by name
                { $set: fate }, // Data to be updated or added
                { upsert: true, new: true } // Added new fate or update it
            );
            console.log(`Destino ${fate.fateDiceNumber} inserido/atualizado com sucesso.`);
        }
    } catch (error) {
        console.error('Erro ao inserir reviravolta do destino:', error);
    }
}

module.exports = {
    insertFate
};