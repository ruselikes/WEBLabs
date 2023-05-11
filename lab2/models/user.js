var mongoose = require("mongoose");
// Это модель Mongoose для пользователей
const UserSchema = mongoose.Schema({
    username: String,
    id: String
});
var User = mongoose.model("User", UserSchema);
module.exports = User;