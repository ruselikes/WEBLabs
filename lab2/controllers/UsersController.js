
var User = require("../models/user.js"),
    mongoose = require("mongoose");

// User.find()
//     .then((result) => {
//         if (result.length === 0) {
//             console.log("Создание тестового пользователя...");
//             const exampleUser = new User({ "username": "usertest" });
//             return exampleUser.save();}
//
//     })
//     .then(() => {
//         console.log("Тестовый пользователь сохранен");
//     })
//     .catch((err) => {
//         console.log("Что-то идет не так");
//         console.log(err);
//     });


var UsersController = {};
UsersController.index = function (req, res) {
    console.log("вызвано действие: индекс");
    res.send(200);
};
// Отобразить пользователя
UsersController.show = function (req, res) {
    console.log("вызвано действие: показать");
    res.send(200);
};
// Создать нового пользователя
UsersController.create = function (req, res) {
    console.log("вызвано действие: создать");
    res.send(200);
};
// Обновить существующего пользователя
UsersController.update = function (req, res) {
    console.log("вызвано действие: обновить");
    res.send(200);
};
// Удалить существующего пользователя
UsersController.destroy = function (req, res) {
    console.log("destroy action called");
    res.send(200);
};
module.exports = UsersController