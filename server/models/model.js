const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const carsModel = new Schema({
    type: {type: String, default: "Car"},
    brand: {type: String, default: "Hyundai"},
    mod: {type: String, default: "Verna"},
    units: {type: Number, default: "1"},
    year: {type: String, default: "2023"}
})

const Cars = mongoose.model("cars", carsModel)

module.exports = {
    Cars
}