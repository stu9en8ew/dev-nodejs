module.exports = function(app){

    app.get('/', function(req, res){
      res.render('index');
    });

    app.get('/form', function(req, res){
      res.render('form');
    });

    app.get('/lista', function(req, res){

      var connection = app.infra.connectionFactory();
      var animesBanco = new app.infra.AnimesDAO(connection);

      animesBanco.lista(function(err, results){
        res.render('lista', {listResults : results});
      });

      connection.end();

    });

    app.post('/create', function(req, res, next){

      var anime = req.body;
      var connection = app.infra.connectionFactory();
      var animesBanco = new app.infra.AnimesDAO(connection);

      animesBanco.salvar(anime, function(err, results){

          // Tratamento de erros
  			if(err){
  				return next(err);
  			}

        res.redirect('/lista');


      });

      connection.end();

    });


    app.get('/edit/:id', function(req, res, next){

      var connection = app.infra.connectionFactory();
      var id = req.params.id;

      connection.query('select * from animes where id = ?',  [ id ] , function(err, results){

        if(err){
          return next(err);
        }

        res.render('edicao', {anime : results});

      });

        connection.end();

    });


    app.get('/delete/:id', function(req, res){

      console.log('Passei aqui');

      var connection = app.infra.connectionFactory();
      var id = req.params.id;

      connection.query('delete from animes where id = ?',  [ id ] , function(err, results){

        if(err){
          return next(err);
        }

          res.redirect('/lista');

      });

      connection.end();

    });


    app.post('/atualizar', function(req, res, next){

      var connection = app.infra.connectionFactory();

      connection.query('update animes set nome = ?, categoria = ?, descricao = ?, faixaEtaria = ?, paisOrigem = ?, siteOficial = ? where id = ?',
      [req.body.nome, req.body.categoria, req.body.descricao, req.body.faixaEtaria, req.body.paisOrigem, req.body.siteOficial, req.body.id], function(err, results, fields){

      console.log(results);

      if(err){
        return next(err);
      }

      res.redirect('/lista');

      });

      connection.end();

    });



}
