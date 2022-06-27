var agendaController = require('../controllers/agendaController');

module.exports = function(app){
    app.get('/',function(req,res){
        agendaController.index(req,res);

    });

    app.post('/',function(req,res){
        agendaController.store(req,res);

    });

    app.get('/detalhe/:id',function(req,res){
        agendaController.show(req,res);
    });
}