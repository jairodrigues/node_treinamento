module.exports = (app) => {

  var connection = app.infra.connectionFactory();
  var produtosDAO = new app.infra.ProdutosDAO(connection);

  const PromocoesController = {

    formulario(req,res){
      produtosDAO.lista(function(erros,resultados){
        res.render('promocoes/form',{lista:resultados});
      });
      connection.end();
    },

    send(req,res){
      var promocao = req.body;
      app.get('io').emit('novaPromocao',promocao);
      res.redirect('promocoes/form');
    }
  }


  return PromocoesController
}

// module.exports = function(app) {
//     app.get("/promocoes/form",function(req,res){
//
//         produtosDAO.lista(function(erros,resultados){
//             console.log(resultados)
//             res.render('promocoes/form',{lista:resultados});
//         });
//         connection.end();
//     });

//     app.post("/promocoes",function(req,res){
//         var promocao = req.body;
//         app.get('io').emit('novaPromocao',promocao);
//         res.redirect('promocoes/form');
//     });
// }
