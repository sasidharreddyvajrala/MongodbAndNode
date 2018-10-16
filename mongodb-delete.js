//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,objectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("unable to connect to server");
    }
      console.log("connected to data base");
      //deleteMany
      db.collection('TodoApp').deleteMany({text:"Eat Lunch"}).then((result)=>{
       console.log(result);
      });
      //deleteOne
      db.collection('TodoApp').deleteOne({text:"Eat Lunch"}).then((results)=>{
          console.log(results);
      });

      db.collection('TodoApp').findOneAndDelete({text:"Eat Luch"}).then((result)=>{
          console.log(results);
      })
      //db.close();
});

