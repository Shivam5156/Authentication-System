const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { configDotenv } = require('dotenv')

const connectDb = require('./config/dB')
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')


configDotenv()
const PORT = process.env.PORT
connectDb()

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:5173',credentials: true }))


app.use('/api/auth', authRouter)

app.use('/api/user', userRouter)


app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);

})