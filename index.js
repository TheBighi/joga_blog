const Express = require("express")
const mongodb = require('mongodb').MongoClient
const dotenv = require("dotenv")
dotenv.config()
const hbs = require("express-handlebars")
const path = require('path')

const app = Express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")
app.engine("hbs", hbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts/"
}))

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