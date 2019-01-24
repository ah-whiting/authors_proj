const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/authors');

const quoteSchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 3},
    vote: {type: Number, required: true, default: 0}
})

const authorSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quotes: [quoteSchema]
}, 
    {timestamps: true}
);
module.exports = mongoose.model('Author', authorSchema);

