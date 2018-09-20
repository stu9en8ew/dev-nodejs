function AnimesDAO(connection){
  this._connection = connection;
}

AnimesDAO.prototype.lista = function(callback){

  this._connection.query("select * from animes", callback);

}


AnimesDAO.prototype.salvar = function(anime, callback){

  this._connection.query('insert into animes set ?', anime, callback);

}

module.exports = function(){

  return AnimesDAO;

}
