const mongoose = require("mongoose")
var argv = require('minimist')(process.argv.slice(2));

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, connction) => {
    if (err){
        console.log(err)
    }
    else{
        main(connction)
    }
})

console.log(argv._)

const main = () => {
    switch (process.argv[2]) {
        case ("add"):

            break
        default:
            console.log("please provide some instructions.")
            break
    }
}