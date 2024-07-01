const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name : String,
    email: String,
    pass: String
})

const FormDataModel = mongoose.model('customers', Schema);

module.exports = FormDataModel;