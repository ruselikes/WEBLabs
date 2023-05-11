
var ToBuy = require("../models/ToBuy");
var User = require("../models/user");
const toBuysController = {};

toBuysController.index = async function (req, res)  {
        const username = req.params.username || null;
        const respondWithToDos = (query) => {
            return ToBuy.find(query).exec();
        };
        try {
            let query = {};
            if (username) {
                const result = await User.find({ "username": username }).exec();
                if (result.length === 0) {
                    return res.status(404).json({ "result_length": 0 });
                }
                query = { "owner": result[0]._id };
            }
            const toBuys = await respondWithToDos(query);
            res.status(200).json(toBuys);
        } catch (err) {
            res.status(500).json(err);
        }
    };
toBuysController.create = async function (req, res) {
    var username = req.params.username||null;
    var tbDB = new ToBuy({
        "title": req.body.title,
        "description": req.body.description
    });
    // tbDB.save()
    // let allTB = ToBuy.find()
    // return res.json(tbDB)
    const result = await User.find({ "username": username }).exec();
    User.find({"username": username}, function (err, result) {
        if (err) {
            res.send(500);
        }
        else {
            if (result.length === 0) {
                tbDB.owner = null;
            }
            else {
                tbDB.owner = result[0]._id;
            }
            tbDB.save().then(  (err, result) => {
                if (err !== null) {
                    res.json(500, err);
                }
                else {
                    res.status(200).json(result);
                }
            });
        }
    });
};
module.exports = toBuysController;