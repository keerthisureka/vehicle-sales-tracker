const model = require('../models/model');

// ADD NEW SALE
// post http://localhost:8080/api/Cars
const addCars = async (req, res) => {
    try {
        if(!req.body) return res.status(400).json("Post HTTP data not provided");

        let { type, mod, units, year} = req.body;
        const create = new model.Cars({
            type,
            mod,
            units,
            year
        })
        await create.save();
        res.json(create);
    } catch (err) {
        res.status(400).json({ message: `Error while creating Cars ${err.message}` });
    }
};

// get http://localhost:8080/api/Cars
const getCars = async (req, res) => {
    let data = await model.Cars.find({})
    await data.map(v => Object.assign({}, {type: v.type, color:v.color}))
    return res.json(data)
;}

module.exports = {
    addCars,
    getCars
}