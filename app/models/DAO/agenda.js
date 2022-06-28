const mPessoa = require("../pessoa")

module.exports = class PessoaDao{
    constructor(){

    };
    
    listarTodos(){
        try{
            const oPessoa = mPessoa.findAll();
            return oPessoa;
        }catch (error){
            return error;
        }
    }
    
    adicionar(pessoa){
        try {
            const oPessoa = mPessoa.create({
                nome: pessoa.nome,
                email: pessoa.email,
                numero: pessoa.numero
            });
            return oPessoa;
        } catch (error) {
            return error;
        }

    }

}