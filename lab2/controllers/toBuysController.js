const ToBuy = require("../models/toBuy");

// Обработка запроса на получение всех элементов
class toBuysController {
    async get(req, res) {
        try {
            const allTB = await ToBuy.find();
            return res.json(allTB);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Внутренняя ошибка сервера"});
        }
    };


// Обработка запроса на создание элемента
    async create(req, res) {
        try {
            const {title, description} = req.body;
            const tbDB = new ToBuy({
                title,
                description
            });
            await tbDB.save();
            return res.json(tbDB);
        } catch (error) {
            console.log(error);
            res.status(400).json({message: "Ошибка при добавлении tb"});
        }
    };

// Обработка запроса на обновление элемента
    async update(req, res) {
        try {
            const {id} = req.params;
            const {title, description} = req.body;
            const updatedTB = await ToBuy.findByIdAndUpdate(id, {title, description}, {new: true});
            if (!updatedTB) {
                return res.status(404).json({message: "Элемент не найден"});
            }
            return res.json(updatedTB);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Внутренняя ошибка сервера"});
        }
    };

// Обработка запроса на удаление элемента
    async delete(req, res) {
        try {
            const {id} = req.params;
            const deletedTB = await ToBuy.findByIdAndRemove(id);
            if (!deletedTB) {
                return res.status(404).json({message: "Элемент не найден"});
            }
            return res.json(deletedTB);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Внутренняя ошибка сервера"});
        }
    };
}


module.exports = new toBuysController;
