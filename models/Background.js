const mongoose = require('mongoose');

const backgroundSchema = new mongoose.Schema({
    backgroundName: { type: String, required: true },
    backgroundSkills: {
        0: {
            name: { type: String, default: "Acrobacia" },
            trained: { type: Boolean, default: false },
        },
        1: {
            name: { type: String, default: "Atletismo" },
            trained: { type: Boolean, default: false },
        },
        2: {
            name: { type: String, default: "Atenção" },
            trained: { type: Boolean, default: false },
        },
        3: {
            name: { type: String, default: "Charme" },
            trained: { type: Boolean, default: false },
        },
        4: {
            name: { type: String, default: "Comando" },
            trained: { type: Boolean, default: false },
        },
        5: {
            name: { type: String, default: "Comercio" },
            trained: { type: Boolean, default: false },
        },
        6: {
            name: { type: String, default: "Con. Comum 1" },
            trained: { type: Boolean, default: false },
        },
        7: {
            name: { type: String, default: "Con. Comum 2" },
            trained: { type: Boolean, default: false },
        },
        8: {
            name: { type: String, default: "Con. Comum 3" },
            trained: { type: Boolean, default: false },
        },
        9: {
            name: { type: String, default: "Con. Comum 4" },
            trained: { type: Boolean, default: false },
        },
        10: {
            name: { type: String, default: "Enganação" },
            trained: { type: Boolean, default: false },
        },
        11: {
            name: { type: String, default: "Esquiva" },
            trained: { type: Boolean, default: false },
        },
        12: {
            name: { type: String, default: "Con. Proibido 1" },
            trained: { type: Boolean, default: false },
        },
        13: {
            name: { type: String, default: "Con. Proibido 2" },
            trained: { type: Boolean, default: false },
        },
        14: {
            name: { type: String, default: "Con. Proibido 3" },
            trained: { type: Boolean, default: false },
        },
        15: {
            name: { type: String, default: "Con. Proibido 4" },
            trained: { type: Boolean, default: false },
        },
        16: {
            name: { type: String, default: "Investigação" },
            trained: { type: Boolean, default: false },
        },
        17: {
            name: { type: String, default: "Interrogatório" },
            trained: { type: Boolean, default: false },
        },
        18: {
            name: { type: String, default: "Intimidação" },
            trained: { type: Boolean, default: false },
        },
        19: {
            name: { type: String, default: "Linguística 1" },
            trained: { type: Boolean, default: false },
        },
        20: {
            name: { type: String, default: "Linguística 2" },
            trained: { type: Boolean, default: false },
        },
        21: {
            name: { type: String, default: "Lógica" },
            trained: { type: Boolean, default: false },
        },
        22: {
            name: { type: String, default: "Medicina" },
            trained: { type: Boolean, default: false },
        },
        23: {
            name: { type: String, default: "Navegação Superfície" },
            trained: { type: Boolean, default: false },
        },
        24: {
            name: { type: String, default: "Navegação Estelar" },
            trained: { type: Boolean, default: false },
        },
        25: {
            name: { type: String, default: "Navegação Warp" },
            trained: { type: Boolean, default: false },
        },
        26: {
            name: { type: String, default: "Operar Superfície" },
            trained: { type: Boolean, default: false },
        },
        27: {
            name: { type: String, default: "Operar Aeronautica" },
            trained: { type: Boolean, default: false },
        },
        28: {
            name: { type: String, default: "Operar Warp" },
            trained: { type: Boolean, default: false },
        },
        29: {
            name: { type: String, default: "Bloqueio" },
            trained: { type: Boolean, default: false },
        },
        30: {
            name: { type: String, default: "Senso Psíquico" },
            trained: { type: Boolean, default: false },
        },
        31: {
            name: { type: String, default: "Con. Escolástico 1" },
            trained: { type: Boolean, default: false },
        },
        32: {
            name: { type: String, default: "Con. Escolástico 2" },
            trained: { type: Boolean, default: false },
        },
        33: {
            name: { type: String, default: "Con. Escolástico 3" },
            trained: { type: Boolean, default: false },
        },
        34: {
            name: { type: String, default: "Con. Escolástico 4" },
            trained: { type: Boolean, default: false },
        },
        35: {
            name: { type: String, default: "Con. Escolástico 5" },
            trained: { type: Boolean, default: false },
        },
        36: {
            name: { type: String, default: "Intuição" },
            trained: { type: Boolean, default: false },
        },
        37: {
            name: { type: String, default: "Segurança" },
            trained: { type: Boolean, default: false },
        },
        38: {
            name: { type: String, default: "Prestidigitação" },
            trained: { type: Boolean, default: false },
        },
        39: {
            name: { type: String, default: "Furtividade" },
            trained: { type: Boolean, default: false },
        },
        40: {
            name: { type: String, default: "Sobrevivência" },
            trained: { type: Boolean, default: false },
        },
        41: {
            name: { type: String, default: "Uso Tecnológico" },
            trained: { type: Boolean, default: false },
        },
        42: {
            name: { type: String, default: "Negócio 1" },
            trained: { type: Boolean, default: false },
        },
        43: {
            name: { type: String, default: "Negócio 2" },
            trained: { type: Boolean, default: false },
        },
        44: {
            name: { type: String, default: "Negócio 3" },
            trained: { type: Boolean, default: false },
        },     
    },
    backgroundSkillChoices: [
        {
            option1: { type: String, required: true },
            option2: { type: String, required: true },
        },
    ],
    backgroundTalent: { type: String, required: true },
    backgroundEquipment: [
        {
            name: { type: String, default: "" },
        }   
    ],
    backgroundBonus: {
        name: { type: String, required: true },
        description: { type: String, required: true },
    },
    backgroundAptitude: {
        general: { type: Boolean, default: true },
        weaponSkill: { type: Boolean, default: false },
        balisticSkill: { type: Boolean, default: false },
        strength: { type: Boolean, default: false },
        toughness: { type: Boolean, default: false },
        agility: { type: Boolean, default: false },
        intelligence: { type: Boolean, default: false },
        perception: { type: Boolean, default: false },
        willpower: { type: Boolean, default: false },
        fellowship: { type: Boolean, default: false },
        ofensive: { type: Boolean, default: false },
        finesse: { type: Boolean, default: false },
        defensive: { type: Boolean, default: false },
        psychic: { type: Boolean, default: false },
        tech: { type: Boolean, default: false },
        knowledge: { type: Boolean, default: false },
        leadership: { type: Boolean, default: false },
        survival: { type: Boolean, default: false },
        social: { type: Boolean, default: false },
    },
});

const Background = mongoose.model('Background', backgroundSchema);

module.exports = Background;