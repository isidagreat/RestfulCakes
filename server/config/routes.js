module.exports = function(app){ 
    const routes = require('../controllers/tasks.js')
    app.get('/tasks', function(req, res){
        routes.tasks(req, res)
    });
    app.post('/tasks', function(req, res){
        routes.new(req, res)
    });
    app.post('/update/:id/', function(req, res){
        routes.update(req, res)
    });
    app.get('/remove/:id/', function(req, res){
        routes.remove(req, res)
    });
    app.get('/:name/', function(req, res){
        routes.name(req, res)
    });  

}