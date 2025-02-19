const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
    weaponName: {type: String, required: true},
    weaponType: {type: String, required: true},
    weaponClass: {type: String, required: true},
    weaponRange: {type: String, default: ""},
    weaponRateOfFire: {type: String, required: true},
    weapondDamage: {type: String, required: true},
    weaponPenetration: {type: Number, default: 0},
    weaponMunition: {type: Number, default: 0},
    weaponRecharge: {type: String, default: ""},
    weaponSpecial: {type: String, default: ""},
    weaponWeight: {type: String, required: true},
    weaponAvailability: {type: String, required: true},
});

const Weapon = mongoose.model('Weapon', weaponSchema);

module.exports = Weapon;