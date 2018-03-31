var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController',function(){

    beforeEach(function(done) {
        var connection = express.infra.connectionFactory();
        connection.query("delete from produtos", function(error, result) {
            if(!error) {
                done();
            }
        });
    });

    it('#listagem json',function(done){
        request.get('/produtos')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200,done);
    });

    it('#cadastro de novo produto com dados invalidos', function(done){
        request.post('/produtos')
            .send({titulo:'',preco:'12.00',descricao:'novo livro'})
            .expect(400,done)
    })

    it('#cadastro de novo produto com dados validos', function(done){
        request.post('/produtos')
            .send({titulo:'teste',preco:'12.00',descricao:'novo livro'})
            .expect(302,done)
    })

    afterEach(function(done) {
        var connection = express.infra.connectionFactory();
        connection.query("delete from produtos", function(error, result) {
            if(!error) {
                done();
            }
        });
    });
});