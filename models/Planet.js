const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    planetName: { type: String, required: true },
    statsModifier: {
        weaponSkill: {type: Number, default: 0},
        balisticSkill: {type: Number, default: 0},
        strength: {type: Number, default: 0},
        toughness: {type: Number, default: 0},
        agility: {type: Number, default: 0},
        intelligence: {type: Number, default: 0},
        perception: {type: Number, default: 0},
        willpower: {type: Number, default: 0},
        fellowship: {type: Number, default: 0},
        influence: {type: Number, default: 0},
    },
    planetFatePoint: {
        limit: {type: Number, required: true},
        emperorBlessing: {type: Number, required: true},
    },
    planetTalent: {
        name: { type: String, required: true },
        description: { type: String, required: true },
    },
    planetAptitude: {
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
    planetHealth: {type: Number, required: true},
});

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;