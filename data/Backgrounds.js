const Background = require('../models/Background');

//current list of existing types of backgrounds. Able to create more
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
        backgroundAptitudeOptions: {
            option1: "fellowship",
            option2: "knowledge",
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
                name: "Stimm (3)",
            },
            {
                name: "Algemas",
            },
            {
                name: "Cigarro (12)",
            },
        ],
        backgroundBonus: {
            name: "A Face da Lei",
            description: "O personagem pode re-rolar qualquer teste de Intimidar ou Interrogar e pode substituir o bônus de Vontade pelos graus de sucesso nesses testes caso seja aplicável",
        },
        backgroundAptitudeOptions: {
            option1: "defensive",
            option2: "ofensive",
        },
    },
    {
        backgroundName: "Adeptus Astra Telepathica",
        backgroundSkills: {
            2: {
                name: "Atenção",
                trained: true,
            },
            6: {
                name: "Adeptus Astra Telepathica",
                trained: true,
            },
            12: {
                name: "Warp",
                trained: true,
            },
            30: {
                name: "Senso Psíquico",
                trained: true,
            },
            36: {
                name: "Intuição",
                trained: true,
            },    
        },
        backgroundSkillChoices: [
            {
                option1: "Enganação",
                option2: "Interrogatório",
            },
        ],
        backgroundTalent: "Treinamento em Armas (Las ou Arcaica)",
        backgroundEquipment: [
            {
                name: "Pistola-Las",
            },
            {
                name: "Bordão ou Chicote",
            },
            {
                name: "Manto Leve de Flak ou Vestimenta de Flak",
            },
            {
                name: "Micro Rádio ou Foco Psíquico",
            },
        ],
        backgroundBonus: {
            name: "Ameaça Constante",
            description: "Quando o personagem ou aliado dentro de 10 metros rolar na tabela Fenômeno Psíquico, o personagem pode aumentar ou diminuir a rolagem por um valor igual ao seu bônus de Vontade. Se o personagem adquirir o Avanço de Elite Psíquico, ele recebe o traço Sancionado;",
        },
        backgroundAptitudeOptions: {
            option1: "defensive",
            option2: "psychic",
        },
    },
    {
        backgroundName: "Adeptus Mechanicus",
        backgroundSkills: {
            6: {
                name: "Adeptus Mechanicus",
                trained: true,
            },
            21: {
                name: "Lógica",
                trained: true,
            },
            37: {
                name: "Segurança",
                trained: true,
            },
            41: {
                name: "Uso Tecnológico",
                trained: true,
            },    
        },
        backgroundSkillChoices: [
            {
                option1: "Atenção",
                option2: "Operar",
            },
        ],
        backgroundTalent: "Uso de Mecandritos (Utilidade), Treinamento em Armas (Projétil Sólido)",
        backgroundTrait: "Implantes Mecânicos",
        backgroundEquipment: [
            {
                name: "Metralhadora ou Canhão de Mão",
            },
            {
                name: "Servo-Crânio (Utilidade) ou Mecandrito Ótico",
            },
            {
                name: "Robes Imperiais",
            },
            {
                name: "Unguentos Sagrados (2)",
            },
        ],
        backgroundBonus: {
            name: "Substitua a Carne Fraca",
            description: "O personagem considera qualquer item cibernético com disponibilidade 2 níveis menores (ou 2 níveis mais fácil de achar)",
        },
        backgroundAptitudeOptions: {
            option1: "knowledge",
            option2: "tech",
        },
    },
    {
        backgroundName: "Adeptus Ministorum",
        backgroundSkills: {
            3: {
                name: "Charme",
                trained: true,
            },
            4: {
                name: "Comando",
                trained: true,
            },
            6: {
                name: "Adeptus Ministorum",
                trained: true,
            },
            19: {
                name: "Alto Gótico",
                trained: true,
            },    
        },
        backgroundSkillChoices: [
            {
                option1: "Investigação",
                option2: "Intuição",
            },
        ],
        backgroundTalent: "Treinamento em Armas (Chamas ou Arcaico, Projétil Sólido)",
        backgroundEquipment: [
            {
                name: "Lança Chamas de Mão ou Martelo de Guerra e Revolver",
            },
            {
                name: "Robes Imperiais ou Vestimenta de Flak",
            },
            {
                name: "Mochila",
            },
            {
                name: "Lanterna",
            },
            {
                name: "Servo-Crânio (Amplificador)",
            },
        ],
        backgroundBonus: {
            name: "Fé é Tudo",
            description: "Ao gastar pontos de destino para receber um bônus em um teste ele recebe +20 ao invés de +10",
        },
        backgroundAptitudeOptions: {
            option1: "leadership",
            option2: "social",
        },
    },
    {
        backgroundName: "Guarda Imperial",
        backgroundSkills: {
            1: {
                name: "Atletismo",
                trained: true,
            },
            4: {
                name: "Comando",
                trained: true,
            },
            6: {
                name: "Guarda Imperial",
                trained: true,
            },
            23: {
                name: "Navegação (Superfície)",
                trained: true,
            },    
        },
        backgroundSkillChoices: [
            {
                option1: "Medicina",
                option2: "Operar (Superfície)",
            },
        ],
        backgroundTalent: "Treinamento em Armas (Las, Arcaico)",
        backgroundEquipment: [
            {
                name: "Arma Las ou Pistola Las e Espada",
            },
            {
                name: "Vestimenta de Combate",
            },
            {
                name: "Armadura de Guarda Imperial Flak",
            },
            {
                name: "Arpéu e Linha",
            },
            {
                name: "Cigarro (12)",
            },
            {
                name: "Visor Amplificador",
            },
        ],
        backgroundBonus: {
            name: "Martelo do Imperador",
            description: "Quando atacar um alvo que foi atacado por um aliado desde o final do seu último turno o personagem pode re-rolar valores 1 e 2 de dano",
        },
        backgroundAptitudeOptions: {
            option1: "leadership",
            option2: "survival",
        },
    },
    {
        backgroundName: "Desgarrado",
        backgroundSkills: {
            6: {
                name: "Submundo",
                trained: true,
            },
            10: {
                name: "Enganação",
                trained: true,
            },
            11: {
                name: "Esquiva",
                trained: true,
            },
            39: {
                name: "Furtividade",
                trained: true,
            },    
        },
        backgroundSkillChoices: [
            {
                option1: "Acrobacia",
                option2: "Prestidigitação",
            },
        ],
        backgroundTalent: "Treinamento em Armas (Corrente e Las ou Projetil Sólido)",
        backgroundEquipment: [
            {
                name: "Arma Las ou Pistola Las e Espada",
            },
            {
                name: "Espada Corrente",
            },
            {
                name: "Armadura Corporal ou Vestimenta Flak",
            },
            {
                name: "Injetor",
            },
            {
                name: "Obscura ou Slaught (2)",
            },
        ],
        backgroundBonus: {
            name: "Nunca Desistir",
            description: "O personagem utiliza seu bônus de Resistência + 2 para determinar fadiga",
        },
        backgroundAptitudeOptions: {
            option1: "social",
            option2: "survival",
        },
    },
];

//Function that verify existing backgrounds and add new backgrounds to the database
const insertBackgrounds = async() => {
    try {
        for (const background of backgroundData) {
            await Background.findOneAndUpdate(
                { backgroundName: background.backgroundName }, // Search background by name
                { $set: background }, // Data to be updated or added
                { upsert: true, new: true } // Added new background or update it
            );
            //console.log(`${background.backgroundName} inserido/atualizado com sucesso.`);
        }
    } catch (error) {
        console.error('Erro ao inserir backgrounds:', error);
    }
}

module.exports = {
    insertBackgrounds
};