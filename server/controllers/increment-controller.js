const Increment = require("../models/Increment");

class incrementController {
    // Получение значения
    async getCount(req, res) {
        try {
            const count = await Increment.findOne();
            res.status(200).json(count);
        } catch (error) {
            res.status(500).json({ count: "Ошибка" })
            console.log(error);
        }
    }

    // Увеличение на +1
    async incrementCount(req, res) {
        try {
            const updateCount = await Increment.findOneAndUpdate({}, { $inc: {count: 1} }, { new: true});
            res.status(200).json(updateCount);
        } catch (error) {
            res.status(500).json({ count: "Ошибка при учеличении" })
            console.log(error);
        }
    }

    // Уменьшение на -1
    async decrementCount(req, res) {
        try {
            const updateCount = await Increment.findOneAndUpdate({}, { $inc: {count: -1} }, { new: true});
            res.status(200).json(updateCount);
        } catch (error) {
            res.status(500).json({ count: "Ошибка при уменьшении" })
            console.log(error);
        }
    }
};

module.exports = new incrementController();