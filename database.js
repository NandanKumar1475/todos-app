const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nk47615:nandan123@cluster0.uwrexsr.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
},{timestamps:true});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
    Todo: Todo
};
