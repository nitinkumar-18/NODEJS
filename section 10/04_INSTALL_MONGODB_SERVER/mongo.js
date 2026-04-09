// console.log("TANISH TANDON")
// console.log(db);
// console.log(show);



// use('expenseApp')



// yeh synchro code hai in mongoshell but in nodejs it is asynchro

// use('todoApp')

// db.todos.insertOne({title:"Completed Node.js",Completed:false})
// db.todos.find();
// console.log(db.todos.find())
//db.getCollection('todos')


// t const usersCollection=db.getCollection('users')

// usersCollection.insert({name:'TANISH TANDON'})
// DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
// {
//   acknowledged: true,
//   insertedIds: { '0': ObjectId('69bb41f74fd332ba671a3224') }
// }





//db.getCollection('users').insertOne({name:'TANISH'})




// in node js we use this easy version
// use("todoApp")

// db.getCollection("todos").insertOne({
//     title:"COMPLETED NODE JS HERE",
//     completed:false,
// });
// console.log(db.todos.find());







use('todoApp')
const todosCollection=db.getCollection("todos");

for(let i=0;i<=10;i++){


todosCollection.insertOne({


        title:`Task${i}`,
    completed:i%2===0 ? true :false

});
}
console.log(db.todos.find());
