import express from 'express'
import usersRoutes from './routes/User.js'


const app = express()

const PORT = 4000

app.use(express.json())

app.use('/User', usersRoutes)
app.get('/', (req, res)=>{
    console.log('[TEST]!')
    res.send("Hello from Homepage")
})

app.listen(PORT, ()=> console.log(`Server is now running on Port http://localhost:${PORT}.`))