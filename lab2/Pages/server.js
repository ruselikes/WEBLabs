var express = require("express"),
    http = require("http"),
    app = express(),
    // настраиваем список задач копированием
// содержимого из файла todos.OLD.json
    toDos = [  {    "title": "Iphone 14",    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus necessitatibus possimus.",    "videoUrl": "https://www.youtube.com/embed/C8nSe_D24hA"  },
        {    "title": "Iphone 13",    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus necessitatibus possimus.",    "videoUrl": "https://www.youtube.com/embed/C8nSe_D24hA"  },
        {    "title": "Iphone 12",    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam esse voluptas minus autem, veniam",    "videoUrl": "https://www.youtube.com/embed/C8nSe_D24hA"  },
        {    "title": "Iphone 11",    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam esse voluptas minus autem, veniam",    "videoUrl": "https://www.youtube.com/embed/C8nSe_D24hA"  }
    ];

app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3000, ()=> {console.log("Cлушаю 3000")});
console.log(__dirname)

// этот маршрут замещает наш файл
// todos.json в примере из части 5
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html")
//
// });
let c = 0

app.get("/todos.json", function (req, res) {
    console.log(c+"Подключился")
    c +=1;
    res.json(toDos);
});
app.post("/todos", function (req, res) {
    console.log("Данные были отправлены на сервер!");
// простой объект отправлен обратно
    res.json({"message":"Вы размещаетесь на сервере!"});
});