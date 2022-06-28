//var agendaController = require('../controllers/agendaController');
//const agendaModel = require('../models/agendaModel');
const express = require("express"),
    router = express.Router();
    const agendaController = require("../controllers/agendaController");

router.get("/",agendaController.listar);
router.post("/adicionar",agendaController.adicionar);

module.exports = router;

//module.exports = function(app){

//   app.get('/',agendaController.listar);
//   app.post('/',agendaController.adicionar);
//   app.get('/detalhe/:id',agendaController.listarPessoa);
//   app.put('',agendaController.modificar);
//   app.delete('/:id',agendaController.remover);
//}



    //app.get('/detalhe/:id',function(req,res){
    //    agendaController.show(req,res);
    //});
    
    // app.post('/',function(req,res){
    //     agendaController.store(req,res);
    // });

    //   app.get('/',function(req,res){
    //       agendaController.index(req,res);
    //  });