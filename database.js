const mongoose = require("mongoose");
const { string, boolean } = require("zod");
mongoose.connect("mongodb+srv://nk47615:nandan123@cluster0.uwrexsr.mongodb.net/");
const todoSchema = mongoose.Schema({
    title: string,
    description: string,
    completed : boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo : todo
}
