const Express = require("express")
const mongodb = require('mongodb').MongoClient
const dotenv = require("dotenv")
const app = Express()

dotenv.config()

connectToDB = async (connectionString) => {
    try{
        const client = await mongodb.connect(connectionString)
        db = client.db()
        console.log("Connected to mongoDB")
        return db
    }
    catch(err){
        console.log(err)
    }
}

const user = process.env.MONGO_USER
const password = process.env.MONGO_PASSWORD
const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT
const dbname = process.env.MONGO_DATABASE

let db, connectionString = `mongodb://${user}:${password}@${host}:${port}/`

db = connectToDB(connectionString)

app.listen(port, () => {
    console.log(`On https://localhost:${port}`)
})