var express = require("express"),
    http = require("http"),
    app = express(),
    // настраиваем список задач копированием
// содержимого из файла todos.OLD.json
    tabs = [  {    "title": "Iphone 14",    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus necessitatibus possimus.",    "videoUrl": "https://www.youtube.com/embed/C8nSe_D24hA"  },
        {    "title": "Iphone 13",    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus necessitatibus possimus.",    "videoUrl": "https://www.youtube.com/embed/C8nSe_D24hA"  },
        {    "title": "Iphone 12",    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam esse voluptas minus autem, veniam",    "videoUrl": "https://www.youtube.com/embed/C8nSe_D24hA"  },
        {    "title": "Iphone 11",    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam esse voluptas minus autem, veniam",    "videoUrl": "https://www.youtube.com/embed/C8nSe_D24hA"  }
    ],
    pokupki = [];

const cors = require('cors');

app.use(cors({origin: 'http://localhost:63342'}));
PORT = 3000;
app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(PORT, ()=> {console.log(`Cлушаю ${PORT}`)});
console.log(__dirname)

// этот маршрут замещает наш файл
// todos.json в примере из части 5
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html")
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
    console.log(c+"Покупки получены")
    c +=1;
    res.json(pokupki);
});
app.post("/tobuy", function (req, res) {
    var newToBuy = req.body;
    console.log("Данные были отправлены на сервер!"+ {newToBuy});
    pokupki.push(newToBuy);
    // простой объект отправлен обратно
    res.json(newToBuy);
});