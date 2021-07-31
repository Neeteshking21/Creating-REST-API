import express from 'express'
const router = express.Router()

const users = [{}]
// all routes in here are starting with /users
router.get('/', (req, res)=>{
    res.send('Hello from User.js')
})

router.post('/', (req, res)=>{
    res.set('Content-Type', 'text/plain')
    console.log("POST Route reched")
    console.log(req.body)
    const user = req.body;
    users.push(user)

    res.send(`User name :${users[0].name} `)
    
    res.status(200)
})

export default router