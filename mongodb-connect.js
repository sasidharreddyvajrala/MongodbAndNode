//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,objectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("unable to connect to server");
    }
      console.log("connected to data base");

    //   db.collection('TodoApp').insertOne({

    //     text:'Some thing to do',
    //     completed:false

    //   },(err,result)=>{
    //       if(err){
    //         return console.log('Unable to connect: ',err);
    //       }
    //       console.log(JSON.stringify(result.ops,undefined,2));

    //   });

        db.collection('Users').insertOne({
            name:"sasi",
            age:'27',
            location:"Kansas,USA"
        },(err,result)=>{
            if(err){
                return console.log('Unable to connect to bd: ',err);
            }
            console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
        });

      db.close();
});

