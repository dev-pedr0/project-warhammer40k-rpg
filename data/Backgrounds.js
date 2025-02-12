const Background = require('../models/Background');

//current list of existing types of planets. Able to create more
const backgroundData = [
    {
        backgroundName: "Adeptus Administratum",
        backgroundSkills: {
            6: {
                name: "Adeptus Administratum",
                trained: true,
            },
            19: {
                name: "Alto Gótico",
                trained: true,
            },
            21: {
                name: "Lógica",
                trained: true,
            },
            31: {
                name: "Escolha Um",
                trained: true,
            },    
        },
        backgroundSkillChoices: [
            {
                option1: "Comercio",
                option2: "Medicina",
            },
        ],
        backgroundTalent: "Treinamento em Armas (Las ou Projétil Sólido)",
        backgroundEquipment: [
            {
                name: "Pistola-Las ou Stub Automática",
            },
            {
                name: "Robes Imperiais",
            },
            {
                name: "Pena Automática",
            },
            {
                name: "Relógio",
            },
            {
                name: "Computador Portátil",
            },
            {
                name: "Kit Médico",
            },
        ],
        backgroundBonus: {
            name: "Mestre de Burocracia",
            description: "O personagem considera a disponibilidade dos itens um nível mais disponível ou um menos mais difícil",
        },
        backgroundAptitude: {
            fellowship: true,
            knowledge: true,
        },
    },
    {
        backgroundName: "Adeptus Arbites",
        backgroundSkills: {
            2: {
                name: "Atenção",
                trained: true,
            },
            6: {
                name: "Adeptus Arbites",
                trained: true,
            },
            7: {
                name: "Submundo",
                trained: true,
            },
            18: {
                name: "Intimidação",
                trained: true,
            },
            36: {
                name: "Intuição",
                trained: true,
            },    
        },
        backgroundSkillChoices: [
            {
                option1: "Investigação",
                option2: "Interrogatório",
            },
        ],
        backgroundTalent: "Treinamento em Armas (Choque ou Projétil Sólido)",
        backgroundEquipment: [
            {
                name: "Escopeta ou Marreta de Choque",
            },
            {
                name: "Armadura de Carapaça da Milícia ou Peitoral de Carapaça",
            },
            {
                name: "Stimm x3)",
            },
            {
                name: "Algemas",
            },
            {
                name: "Cigarro (12)",
            },
        ],
        backgroundBonus: {
            name: ": A Face da Lei",
            description: "O personagem pode re-rolar qualquer teste de Intimidar ou Interrogar e pode substituir o bônus de Vontade pelos graus de sucesso nesses testes caso seja aplicável",
        },
        backgroundAptitude: {
            ofensive: true,
            defensive: true,
        },
    },
];

//Function that verify existing backgrounds and add new backgrounds to the database
const insertBackgrounds = async() => {
    try {
        for (const background of backgroundData) {
            const existingBackground = await Background.findOne({ backgroundName: background.backgroundName });
            if (!existingBackground) {
                await Background.create(background);
                //console.log(`${background.backgroundName } inserido com sucesso.`);
            } else {
                //console.log(`${background.backgroundName} já existe no banco.`);
            }
        }
    } catch (error) {
        console.error('Erro ao inserir backgrounds:', err);
    }
}

module.exports = {
    insertBackgrounds
};