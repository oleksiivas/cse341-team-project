const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://alex_vasiuk:Nza3gNBynAOCEjeJ@clustercse341.nqiqg.mongodb.net/<dbname>?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected!!!');
        callback(client);
    })
    .catch(err => 
    {
        console.log(err);
    });
};

module.exports = mongoConnect;