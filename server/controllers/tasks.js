// setup bcrypt
// const bcrypt = require('bcrypt-as-promised');

    User= require('../models/task.js')
module.exports = {
    index: function (req , res){
      return res.sendFile('index');
    },
    tasks: function (req , res){
        console.log("in tasks")
        User.find({}, (err, _user) => {
            if (err) {
                // Code...
                console.log("IN ERRORS")
                return (res.json("errs:err"));
            }
            else {
                // Code...
                console.log("IN Success")
            console.log("Success")
            return res.json({_user});
            }
        })

      },
      new: function (req , res){
        // Create a a new Quote with the name and age
        var user = new User({title: req.body.title, description:req.body.description, completed: req.body.completed, updated_at: new Date(), created_at: new Date()});
        // Try and save that user to the database(this method that actually insets intot the DB)
        user.save(function(err){
            if(err){
                console.log("Something went Wrong");
            } else{
                console.log("successfully Created User");
                res.redirect('/tasks');
            }
        });
},
update: function (req , res){

    User.findOne({_id: req.params.id}, (err, _user) => {
        console.log("Found USer")
        console.log(_user)
        if (err) {
            // Code...
            return res.json({error: "notfound"})
        }
        else {
            _user.review.push({rating:req.body.rating, comment:req.body.comment});
            _user.save(function(err){
                if(err){
                    console.log("Something went Wrong");
                } else{
                    console.log("successfully Created User");
                    return res.json({_user});
                }
        });
    }
    });





},
remove: function (req , res){
    User.remove({_id: req.params.id}, (err, _user) => {
        if (err) {
            // Code...
            res.redirect("/")
        }
        else {
            // Code...
        console.log("DElete Success")

        res.redirect('/tasks')
        }
    })
},
name: function (req , res){
    User.findOne({id: req.params.id}, (err, _user) => {
        if (err) {
            // Code...
            res.json("notfound")
        }
        else {
            // Code...
        console.log("Found USer")

        res.json({_user})
        }
    })
}
      
}


