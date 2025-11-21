const Express = require("express")
const mongodb = require('mongodb').MongoClient

const app = Express()

connectToDB = async (connectionString) => {
    try{
        const client = await mongodb.connect(connectionString)
        db = client.db()
        console.log("Connected to mongoDB")
    }
    catch(err){
        console.log(err)
    }
    return db
}
let db, connectionString = 'mongodb://joga_admin:qwerty@localhost:27017/joga_blog'

db = connectToDB(connectionString)

app.listen(3001, () => {
    console.log("On localhost:3001")
})