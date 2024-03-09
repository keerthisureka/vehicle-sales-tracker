const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const carsModel = new Schema({
    type: {type: String, default: "Car"},
    mod: {type: String, default: "Suzuki"},
    units: {type: String, default: "1"},
    year: {type: String, default: "2023"}
})

const Cars = mongoose.model("cars", carsModel)

module.exports = {
    Cars
}