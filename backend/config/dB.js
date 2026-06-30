const mongoose = require('mongoose')
const { configDotenv } = require('dotenv')
configDotenv()

const url = process.env.DB_URL



const connectDb = async () => {
    await mongoose.connect(url)
        .then((data) => console.log('Connect DB'))
        .catch((err) => console.log('DB Error'))
}

module.exports = connectDb