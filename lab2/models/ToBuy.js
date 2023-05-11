const {Schema,model,Types} = require("mongoose")
const ToBuySchema = new Schema({
    title: String,
    description: String,
    owner : { type: Types.ObjectId, ref: "User" }
});
// export default ToBuy = mongoose.model("ToBuy", ToBuySchema)
module.exports = model('ToBuy', ToBuySchema);