const mongoose = require('mongoose');


const characterSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    characterName: { type: String, required: true },
    homePlanet: {type: String, required: true},
    background: {type: String, required: true},
    role: {type: String, required: true},
    eliteAdvance: {type: String, required: true},
    destiny: {type: String, required: true},
    allies: [{type: String }],
    enemies: [{type: String }],
    stats: {
        weaponSkill: {
            value: { type: Number, required: true },
            bonus: { type: Number, default: 0 },
            improvements: { type: Number, default: 0 }
        },
        balisticSkill: {
            value: { type: Number, required: true },
            bonus: { type: Number, default: 0 },
            improvements: { type: Number, default: 0 }
        },
        strength: {
            value: { type: Number, required: true },
            bonus: { type: Number, default: 0 },
            improvements: { type: Number, default: 0 }
        },
        toughness: {
            value: { type: Number, required: true },
            bonus: { type: Number, default: 0 },
            improvements: { type: Number, default: 0 }
        },
        agility: {
            value: { type: Number, required: true },
            bonus: { type: Number, default: 0 },
            improvements: { type: Number, default: 0 }
        },
        intelligence: {
            value: { type: Number, required: true },
            bonus: { type: Number, default: 0 },
            improvements: { type: Number, default: 0 }
        },
        perception: {
            value: { type: Number, required: true },
            bonus: { type: Number, default: 0 },
            improvements: { type: Number, default: 0 }
        },
        willpower: {
            value: { type: Number, required: true },
            bonus: { type: Number, default: 0 },
            improvements: { type: Number, default: 0 }
        },
        fellowship: {
            value: { type: Number, required: true },
            bonus: { type: Number, default: 0 },
            improvements: { type: Number, default: 0 }
        },
        influence: {
            value: { type: Number, required: true },
            bonus: { type: Number, default: 0 },
            improvements: { type: Number, default: 0 }
        },
    },
    exp: {
        expToSpend: { type: Number, default: 0 },
        expSpent: { type: Number, default: 0 },
    },
    insanity: {
        insanityPoints: { type: Number, default: 0 },
        insanityBonus: { type: Number, default: 0 },
        insanityText: {type: String},
    },
    fatePoints: {
        limit: { type: Number, default: 0 },
        current: { type: Number, default: 0 },
    },
    corruption: {
        corruptionPoints: { type: Number, default: 0 },
        corruptionBonus: { type: Number, default: 0 },
        malignances: {type: String},
        mutations: {type: String},
    },
    aptitude: {
        general: { type: Boolean, default: false },
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
    skills: [
        {
            nome: { type: String, required: true },
            conhecida: { type: Boolean, default: false },
            mais10: { type: Boolean, default: false },
            mais20: { type: Boolean, default: false },
            mais30: { type: Boolean, default: false }
        }
    ],
    talentosETracos: [
        {
            nome: { type: String, required: true },
            descricao: { type: String, required: true },
        }
    ],
});

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;