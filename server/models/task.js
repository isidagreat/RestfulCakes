// Create MOngoose schemas
const mongoose = require('mongoose'),
Review = new mongoose.Schema({
    rating:{type: Number, default:0},
    comment:{type: String, default:''}
});
TaskSchema =new mongoose.Schema({
    title: String,
    updated_at: Date,
    created_at: Date,
    completed: { type: Boolean, default: false },
    description: { type: String, default: '' },
    review:[
        {rating:{type:Number, default:0}, comment:{type:String, default:''}}
    ]
});


module.exports = mongoose.model('Task', TaskSchema);


