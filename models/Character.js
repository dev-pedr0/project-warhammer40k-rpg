const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    characterName: { type: String, required: true },
    homePlanet: {type: String, required: true},
    background: {type: String, required: true},
    role: {type: String, required: true},
    eliteAdvance: {type: String, default: ""},
    destiny: {type: String, default: ""},
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
        insanityText: {type: String, default: ""},
    },
    fatePoints: {
        limit: { type: Number, default: 0 },
        current: { type: Number, default: 0 },
    },
    corruption: {
        corruptionPoints: { type: Number, default: 0 },
        corruptionBonus: { type: Number, default: 0 },
        malignances: {type: String,  default: ""},
        mutations: {type: String,  default: ""},
    },
    aptitude: {
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
    skills: [
        {
            name: { type: String },
            known: { type: Boolean, default: false },
            plus10: { type: Boolean, default: false },
            plus20: { type: Boolean, default: false },
            plus30: { type: Boolean, default: false }
        }
    ],
    talentsAndTraces: [
        {
            name: { type: String, default: "" },
            description: { type: String, default: "" },
        }
    ],
    weapons: [
        {
            name: { type: String, default: "" },
            class: { type: String, default: "" },
            range: { type: String, default: ""},
            rateOfFire: { type: String, default: ""},
            damage: { type: String, default: "" },
            penetration: { type: String, default: "" },
            munition: { type: String, default: ""},
            reload: { type: String, default: ""},
            weight: { type: String, default: "" },
            availability: { type: String, default: "" },
            special: { type: String, default: ""},
        }
    ],
    equipments: [
        {
            name: { type: String, default: "" },
            weight: { type: String, default: "" },
            description: { type: String, default: "Descrição:" },
        }
    ],
    defense: {
        head: {
            armour: { type: Number, default: 0 },
            totalArmour: { type: Number, default: 0 },
        },
        leftArm: {
            armour: { type: Number, default: 0 },
            totalArmour: { type: Number, default: 0 },
        },
        rightArm: {
            armour: { type: Number, default: 0 },
            totalArmour: { type: Number, default: 0 },
        },
        body: {
            armour: { type: Number, default: 0 },
            totalArmour: { type: Number, default: 0 },
        },
        leftLeg: {
            armour: { type: Number, default: 0 },
            totalArmour: { type: Number, default: 0 },
        },
        rightLeg: {
            armour: { type: Number, default: 0 },
            totalArmour: { type: Number, default: 0 },
        },
    },
    health: {
        total: { type: Number, default: 0 },
        current: { type: Number, default: 0 },
        criticalDamage: { type: Number, default: 0 },
    },
    conditions: [
        {
            name: { type: String, default: "" },
            description: { type: String, default: "" },
        }
    ],
    movement: {
        half: { type: Number, default: 0 },
        full: { type: Number, default: 0 },
        charge: { type: Number, default: 0 },
        run: { type: Number, default: 0 },
    },
    fatigue: {
        limit: { type: Number, default: 0 },
        current: { type: Number, default: 0 },
    },
    psiLevel: { type: Number, default: 0 },
    powers: [
        {
            name: { type: String, default: "" },
            description: { type: String, default: "" },
        }
    ],
    notes:{ type: String, default: "" },
});

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;