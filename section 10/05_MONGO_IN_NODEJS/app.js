// import { MongoClient } from "mongodb";

// const client = new MongoClient("mongodb://127.0.0.1:27017/")

// await client.connect()

// const admin = client.db().admin()
// const allDbs = await admin.listDatabases()

// console.log(allDbs);

// client.close()















// import { MongoClient } from "mongodb";





// const client=new MongoClient("mongodb://localhost:27017/")

// await client.connect();// server sai tcp connection banalega




// const admin=client.db().admin();

// const allDbs=await admin.listDatabases()// saare database return karega jo mongodb server ke upar


// console.log(allDbs);

// client.close();






















import { MongoClient } from "mongodb";

const client=new MongoClient("mongodb://localhost:27017/");

await client.connect()


const db=client.db("todoApp");

// const collection=db.collection("todos");


const collection=db.collection("todos");

// const data=[];

// for(let i=11;i<=25;i++){
//     data.push({title:`Task ${i}`,completed:i%2==0 ?true:false})

// }


const cursor=collection.find();



// let cnt=0;
// while(await cursor.hasNext()){
//     cnt++;
//     console.log(await cursor.next());
//     if(cnt===5)break;
// }



// console.log(await cursor.hasNext());

// cursor mai ek barr data fetch kar skte hai

// const data=await cursor.toArray();
// console.log(data);



// const data2=await cursor.toArray();
// console.log(data2);



// console.log(await cursor.hasNext());
// console.log(await cursor.next());






// console.log(await cursor.hasNext());
// console.log(await cursor.next());



// console.log(await cursor.hasNext());


// cursor is an object in the eyes of  js . iske upar specific method karo tabh db call karta hai
// for(;await cursor.hasNext();){
    
// console.log(await cursor.next());

// }




// console.log(await cursor.count());


// console.log(await collection.countDocuments());





// for await(const document of cursor){
//     console.log(document);
// }

// console.log(await cursor.hasNext());

// console.log(await cursor.next());
// console.log(await cursor.next());
// console.log(await cursor.next());

// console.log(cursor[Symbol.asyncIterator]);


//async iterator ke sath for await use karo

// await collection.insertMany(data);


client.close();










client.close();







// > a.constructor
// [class Cursor extends AggregateOrFindCursor]
// 


