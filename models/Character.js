const mongoose = require('mongoose');


const characterSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    class: { type: String, required: true },
    level: { type: Number, required: true },
    stats: {
        strength: { type: Number, required: true },
        dexterity: { type: Number, required: true },
        intelligence: { type: Number, required: true },
    },
});

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;