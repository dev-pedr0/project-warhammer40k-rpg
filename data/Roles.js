const Role = require('../models/Role');

//current list of existing types of roles. Able to create more
const roleData = [
    {
        roleName: "Assassino",
        roleAptitude: {
            agility: true,
            perception: true,
            finesse: true,
            survival: true,
        },
        roleAptitudeOption: {
            option1: "Habilidade Balística",
            option2: "Habilidade de Combate",
        },
        roleTalentOption: {
            option1: "Saturado",
            option2: "De Pé",
        },
        roleBonus: {
            name: "Morte Certa",
            description: "O personagem pode gastar um ponto de destino após ser bem-sucedido em um ataque e causar dano adicional igual aos graus de sucesso no teste do ataque no primeiro acerto",
        },
    },
    {
        roleName: "Cirurgião",
        roleAptitude: {
            intelligence: true,
            knowledge: true,
            strength: true,
            survival: true,
            toughness: true,
        },
        roleAptitudeOption: {
            option1: "",
            option2: "",
        },
        roleTalentOption: {
            option1: "Resistente (escolha um)",
            option2: "Derrubada",
        },
        roleBonus: {
            name: "Curador Dedicado",
            description: "Ao falhar em um teste de Primeiros Socorros o personagem pode gastar um ponto de destino para ser bem-sucedido automaticamente com graus de sucesso iguais ao seu bônus de inteligência",
        },
    },
    {
        roleName: "Rufião",
        roleAptitude: {
            agility: true,
            balisticSkill: true,
            defensive: true,
            social: true,
            finesse: true,
        },
        roleAptitudeOption: {
            option1: "",
            option2: "",
        },
        roleTalentOption: {
            option1: "Queda Leve",
            option2: "Reação Rápida",
        },
        roleBonus: {
            name: "Correr e Atirar",
            description: "Uma vez por rodada, após realizar uma ação de movimento, o personagem pode realizar um Ataque Padrão com uma arma tipo Pistola como Ação Livre",
        },
    },
    {
        roleName: "Hierofante",
        roleAptitude: {
            social: true,
            fellowship: true,
            ofensive: true,
            toughness: true,
            willpower: true,
        },
        roleAptitudeOption: {
            option1: "",
            option2: "",
        },
        roleTalentOption: {
            option1: "Trabalho em Equipe",
            option2: "Ódio (escolha um)",
        },
        roleBonus: {
            name: "Manipular as Massas",
            description: "O personagem pode gastar um ponto de destino para ser automaticamente bem-sucedido em um teste de Charme, Comando ou Intimidação com uma quantidade de graus de sucesso igual ao seu bônus de Vontade",
        },
    },
    {
        roleName: "Místico",
        roleAptitude: {
            defensive: true,
            intelligence: true,
            knowledge: true,
            perception: true,
            willpower: true,
        },
        roleAptitudeOption: {
            option1: "",
            option2: "",
        },
        roleTalentOption: {
            option1: "Resistente (Poderes Psíquicos)",
            option2: "Sentir o Imaterium",
        },
        roleBonus: {
            name: "Encarar o Imaterium",
            description: "O personagem começa com o Avanço de Elite Psíquico",
        },
    },
    {
        roleName: "Sábio",
        roleAptitude: {
            intelligence: true,
            knowledge: true,
            perception: true,
            tech: true,
            willpower: true,
        },
        roleAptitudeOption: {
            option1: "",
            option2: "",
        },
        roleTalentOption: {
            option1: "Ambidestria",
            option2: "Pistas das Multidões",
        },
        roleBonus: {
            name: "Busca por Conhecimento",
            description: "O personagem pode gastar pontos de destino para ser automaticamente bem-sucedido em testes de Lógica ou de qualquer tipo de conhecimento com um número de graus de sucesso igual ao seu bônus de Inteligência",
        },
    },
    {
        roleName: "Buscador",
        roleAptitude: {
            fellowship: true,
            social: true,
            perception: true,
            intelligence: true,
            tech: true,
        },
        roleAptitudeOption: {
            option1: "",
            option2: "",
        },
        roleTalentOption: {
            option1: "Intuição Precisa",
            option2: "Desarmar",
        },
        roleBonus: {
            name: "Nada me Escapa",
            description: "O personagem pode gastar pontos de destino para ser automaticamente bem-sucedido em testes de Atenção ou Investigação com uma quantidade de graus de sucesso igual ao seu bônus de Percepção",
        },
    },
    {
        roleName: "Guerreiro",
        roleAptitude: {
            balisticSkill: true,
            ofensive: true,
            defensive: true,
            strength: true,
            weaponSkill: true,
        },
        roleAptitudeOption: {
            option1: "",
            option2: "",
        },
        roleTalentOption: {
            option1: "Mandíbula de Ferro",
            option2: "Recarga Rápida",
        },
        roleBonus: {
            name: "Expert em Violência",
            description: "Após um ataque bem-sucedido, mas antes de determinar número de acertos, o personagem pode gastar um ponto de destino para substituir os graus de sucesso atingidos por graus de sucesso iguais ao bônus de Habilidade de Combate (para ataques corpo a corpo) ou ao bônus de Habilidade Balística (para ataques a distância)",
        },
    },
];

//Function that verify existing backgrounds and add/update backgrounds to the database
const insertRoles = async() => {
    try {
        for (const role of roleData) {
            await Role.findOneAndUpdate(
                { roleName: role.roleName }, // Search role by name
                { $set: role }, // Data to be updated or added
                { upsert: true, new: true } // Added new role or update it
            );
            //console.log(`${role.roleName} inserido/atualizado com sucesso.`);
        }
    } catch (error) {
        console.error('Erro ao inserir roles:', error);
    }
}

module.exports = {
    insertRoles
};