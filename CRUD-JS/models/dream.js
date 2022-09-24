const mongoose = require('mongoose');

const dreamSchema = new mongoose.Schema({
    'dream_name': {
        type: String,
        required: true,
    },
    'difficulty':{
        type: String,
        required: true,
    },
    'fear_level':{
        type: String,
        required: true,
    },
    'completion_date':{
        type: Date,
    }
})

module.exports = mongoose.model('Dream', dreamSchema);