
var ToBuy = require("../models/ToBuy");
var User = require("../models/user");
const toBuysController = {};

toBuysController.index = async function (req, res)  {
    try {
        const username = req.params.username || null;

        if (username) {
            const result = await User.find({ username });
            if (result.length === 0) {
                res.status(404).json({ message: "Пользователь не найден" });
            } else {
                const toBuys = await ToBuy.find({});
                res.status(200).json(toBuys);
            }
        } else {
            res.status(404).json({ username });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = toBuysController;