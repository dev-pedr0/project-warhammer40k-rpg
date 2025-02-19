const Weapon = require('../models/Weapon');

//current list of existing types of weapons. Able to create more
const weaponsData = [
    {
        weaponName: "Pistola Bolter",
        weaponType: "Armas Bolter",
        weaponClass: "Pistola",
        weaponRange: "30m",
        weaponRateOfFire: "S/2/-",
        weapondDamage: "1d10+5 X",
        weaponPenetration: 4,
        weaponMunition: 8,
        weaponRecharge: "Padrão",
        weaponSpecial: "Dilacerante",
        weaponWeight: "3.5kg",
        weaponAvailability: "Muito Raro",
    },
];

//Function that verify existing planets and add new planets to the database
const insertWeapons = async() => {
    try {
        for (const weapon of weaponsData) {
            const existingWeapons = await Weapon.findOne({ weaponName: weapon.weaponName });
            if (!existingWeapons) {
                await Weapon.create(weapon);
                //console.log(`${weapon.weaponName} inserido com sucesso.`);
            } else {
                //console.log(`${weapon.weaponName} já existe no banco.`);
            }
        }
    } catch (error) {
        console.error('Erro ao inserir planetas:', error);
    }
}

module.exports = {
    insertWeapons
};