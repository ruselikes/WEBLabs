const ToBuy = require('../models/ToBuy')
var express = require("express"),
    http = require("http"),
    mongoose = require("mongoose")
    app = express(),
    // настраиваем список задач копированием
// содержимого из файла todos.OLD.json
    tabs = [
    ],
    pokupki = [];

try {
    const result = mongoose.connect("mongodb+srv://ruslan:123@webdb.vxrpqlk.mongodb.net/?retryWrites=true&w=majority").then((res)=> console.log("БД успешно подключена")).catch((er) => {console.log("DB Error Occured:\n\tError description"+er);throw new Error()})
}
catch (e){
    console.log("Сервер не запустился",e.message)
    process.exit(1) //выходим из процесса node.js
}

const cors = require('cors');
const {all} = require("express/lib/application");

app.use(express.json())
app.use(cors({origin: 'http://localhost:63342'}));
PORT = 3000;
app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(PORT, ()=> {console.log(`Cлушаю ${PORT}`)});
console.log(__dirname)

// этот маршрут замещает наш файл
// todos.json в примере из части 5
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/main.html")
//
// });
let c = 0

app.use(express.json())
app.get("/tabs.json", function (req, res) {
    console.log(c+"Табсы ")
    c +=1;
    res.json(tabs);
});
app.get("/pokupki", function (req, res) {
    // console.log(c+"Покупки получены")
    try {

        ToBuy.find().then((allTB) => {
            // console.log(allTB);
            return res.json(allTB);
        });

    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'Ошибка при получении tb'})
    }

});
app.post("/tobuy", async function (req, res) {
    // var newToBuy = req.body;
    // console.log("Данные были отправлены на сервер!"/*+ {newToBuy}*/);
    // pokupki.push(newToBuy);
    // tbDB = new ToBuy(newToBuy)
    // tbDB.save(function (err, result) {
    //     if (err !== null) {
    //         console.log();
    //         res.send("Ошибка  при сохранении tb");
    //     } else {
    //         ToBuy.find(function (err, data) {
    //             if (err !== null) {
    //
    //                 res.send("Ошибка при получении tb");
    //             }
    //             res.json(data);
    //         })
    //     }
    // })})
    try {
        var tbDB = new ToBuy({
            "title": req.body.title,
            "description": req.body.description
        });
        tbDB.save()
        let allTB = ToBuy.find()
        return res.json(tbDB)

    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'Ошибка при добавлении tb'})
    }
})