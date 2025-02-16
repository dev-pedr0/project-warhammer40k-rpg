const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    roleName: { type: String, required: true },
    roleAptitude: {
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
    roleAptitudeOption: {
        option1: { type: String, default: "" },
        option2: { type: String, default: "" },
    },
    roleTalentOption: {
        option1: { type: String, default: "" },
        option2: { type: String, default: "" },
    },
    roleBonus: {
        name: { type: String, required: true },
        description: { type: String, required: true },
    },
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;