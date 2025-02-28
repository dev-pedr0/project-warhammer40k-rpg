const mongoose = require('mongoose');

const fateSchema = new mongoose.Schema({
    fateDiceNumber: { type: String, required: true },
    fateProfecy: { type: String, required: true },
    fateEffect: { type: String, required: true },
    
});

const Fate = mongoose.model('TwistofFate', fateSchema);

module.exports = Fate;