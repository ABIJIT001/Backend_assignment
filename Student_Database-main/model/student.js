const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    isStudent: {
        type: Boolean,
        required: true
    },
    highestQualification: {
        type: String,
        required: true
    },
    interests: {
        type: [
            { type:String }
        ],
        default: ["This person has no interests"]
    }
},{strict: false});
//REMOVING _ID AND __V FROM RESPONSE
studentSchema.set('toJSON', {
    virtuals: false,
    transform: (doc, ret, options) => {
        delete ret.__v;
        delete ret._id;
    }
});

module.exports = mongoose.model('Student',studentSchema);
