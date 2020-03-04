const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    Title:{
        type: String,
        required: true
    },

    Tasks:{
        type: Array,
        required: true
    }
});

mongoose.model('Project', ProjectSchema);