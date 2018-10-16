//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,objectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("unable to connect to server");
    }
      console.log("connected to data base");
      db.collection('Users').find({name:'sasi'}).toArray().then((docs)=>{
          console.log(JSON.stringify(docs,undefined,2));
      },(err)=>{
          console.log("nothing in todo list");
      });
    //   db.collection('TodoApp').find({completed:false}).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log("nothing in todo list");
    // });

    // db.collection('TodoApp').find().count().then((count)=>{
    //     console.log("Todos count:", count);
    // },(err)=>{
    //     console.log("nothing in todo list");
    // });
      db.close();
});

