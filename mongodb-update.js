//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("unable to connect to server");
    }
      console.log("connected to data base");
     
      db.collection("TodoApp").findOneAndUpdate({
          _id : new ObjectID("5bc56a287fa7cfcc29f804bb")
        },
          {
              $set:{completed:true}
          },
          {
              returnOriginal:false
          }
 );

       db.collection("Users").findOneAndUpdate({
           _id:new ObjectID("5bc4f6c901c080075edce251")
       },
       {
           $set:{name:'sasi'},
           $inc:{age:1}
       },
       {
           returnOriginal:false
       }).then((result)=>{
           console.log(result);
       });
      //db.close();
});

