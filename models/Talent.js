const mongoose = require('mongoose');

const talentSchema = new mongoose.Schema({
    talentName: { type: String, required: true },
    talentLevel: { type: Number, required: true },
    telentRequisite: [
        {
            name: { type: String, default: "" },
        }
    ],
    talentAptitude: [
        {
            name: { type: String, default: "" },
        }
    ],
    talentText: {
        description: { type: String, required: true },
        specialist: { type: String, default: "" },
    },
});

const Talent = mongoose.model('Talent', talentSchema);

module.exports = Talent;