function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {
    this._connection.query('select * from produtos', callback);
}

ProdutosDAO.prototype.salva = function(produto, callback) {
    this._connection.query('insert into produtos set ?', produto, callback);
}

module.exports = function() {
    return ProdutosDAO;
};


// class ProdutosDAO{

//     constructor(connection){
//         this._connection = connection
//     }

//     lista(callback){
//         console.log(connection)
//         const query = this._connection.query('select * from produtos', callback)
//         return query
//     }

//     salva(produto,callback){
//         const query = this._connection.query('insert into produtos set ?', produto, callback)
//         return query
//     }
// }

// module.exports = ProdutosDAO
