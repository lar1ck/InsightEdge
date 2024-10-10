const mongoose = require('mongoose');

const teachersSchema = new mongoose.Schema(
    {
        name: {
            type: 'String',
            required: true,
        },
        class: {
            type: 'String',
            required: true,
        },
        email: {
            type: 'String',
            required: true,
        },
        name: {
            type: 'Number',
            required: true,
        },
        fullTime: {
            type: 'Boolean',
            required: true,
            default: true,
        }
    }
);

const Teachers = mongoose.model('Teacher', teachersSchema);

module.exports = Teachers;