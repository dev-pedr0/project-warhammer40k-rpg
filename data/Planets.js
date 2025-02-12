const Planet = require('../models/Planet');

//current list of existing types of planets. Able to create more
const planetsData = [
    {
        planetName: "Planeta Selvagem",
        statsModifier: {
            strength: 1,
            toughness: 1,
            influence: -1,
        },
        planetFatePoint: {
            limit: 2,
            emperorBlessing: 3,
        },
        planetTalent: {
            name: "O Caminho Antigo",
            description: "Qualquer arma arcaica (low-tech) perde sua qualidade primitiva (primitive) e ganha a qualidade Confiável 3 (Proven 3)",
        },
        planetAptitude: {
            toughness: true,
        },
        planetHealth: 9,
    },
    {
        planetName: "Planeta Forja",
        statsModifier: {
            intelligence: 1,
            toughness: 1,
            fellowship: -1,
        },
        planetFatePoint: {
            limit: 3,
            emperorBlessing: 8,
        },
        planetTalent: {
            name: "Escolhido do Omnissiah",
            description: "O personagem começa com um dos talentos a seguir a escolha do jogador (Talento Técnico ou Tecnólogo de Armas)",
        },
        planetAptitude: {
            intelligence: true,
        },
        planetHealth: 8,
    },
    {
        planetName: "Região Nobre",
        statsModifier: {
            fellowship: 1,
            influence: 1,
            toughness: -1,
        },
        planetFatePoint: {
            limit: 4,
            emperorBlessing: 10,
        },
        planetTalent: {
            name: "Berço de Ouro",
            description: "A qualquer momento que o personagem reduzir sua Influência ele reduz o valor indicado -1 (até o mínimo de 1)",
        },
        planetAptitude: {
            fellowship: true,
        },
        planetHealth: 9,
    },
    {
        planetName: "Planeta Colmeia",
        statsModifier: {
            agility: 1,
            perception: 1,
            willpower: -1,
        },
        planetFatePoint: {
            limit: 2,
            emperorBlessing: 6,
        },
        planetTalent: {
            name: "Vivendo na Multidão",
            description: "O personagem ignora multidões para propósitos de movimento, tratando elas como terreno aberto. Em espaços fechados ele recebe +20 em testes de Navegação (superfície)",
        },
        planetAptitude: {
            perception: true,
        },
        planetHealth: 8,
    },
    {
        planetName: "Planeta Religioso",
        statsModifier: {
            willpower: 1,
            fellowship: 1,
            perception: -1,
        },
        planetFatePoint: {
            limit: 3,
            emperorBlessing: 6,
        },
        planetTalent: {
            name: "Fé no Credo",
            description: "Quando o personagem gasta um ponto de destino ele rola 1d10. Em um valor 1, ele não reduz a pontuação de pontos de destino dele",
        },
        planetAptitude: {
            willpower: true,
        },
        planetHealth: 7,
    },
    {
        planetName: "Nascido no Espaço",
        statsModifier: {
            willpower: 1,
            intelligence: 1,
            strength: -1,
        },
        planetFatePoint: {
            limit: 3,
            emperorBlessing: 5,
        },
        planetTalent: {
            name: "Filho do Vazio",
            description: "O personagem começa com o talento: Mente Fortalecida e ganha +30 para se mover em ambientes de gravidade 0",
        },
        planetAptitude: {
            intelligence: true,
        },
        planetHealth: 7,
    },
];

//Function that verify existing planets and add new planets to the database
const insertPlanets = async() => {
    try {
        for (const planet of planetsData) {
            const existingPlanet = await Planet.findOne({ planetName: planet.planetName });
            if (!existingPlanet) {
                await Planet.create(planet);
                //console.log(`Planeta ${planet.planetName} inserido com sucesso.`);
            } else {
                //console.log(`Planeta ${planet.planetName} já existe no banco.`);
            }
        }
    } catch (error) {
        console.error('Erro ao inserir planetas:', err);
    }
}

module.exports = {
    insertPlanets
};