
import {v4 as uuidv4 } from 'uuid'
let users = []
const getUser = (req, res) =>{
    res.send(users)
}
const createUser = (req, res)=>{
    res.set('Content-Type', 'text/plain')
    console.log("POST Route reched")
    
    const user = req.body;
    console.log(req.body)
    const userWithId = {...user, id: uuidv4()}
    users.push(userWithId)
    console.log(users)
    res.send(`User name :${users[0].name} with id ${users[0].id} `)
    
    res.status(200)
}

const deleteUser = (req, res) =>{
    const { id } = req.params

    users = users.filter(user => user.id != id)
    res.send(`User ${id} deleted `)
}

const patchUser = (req, res)=>{
    const {id} = req.params;
    const {name, age} = req.body
    const userToFind = users.find(user=> user.id == id)

    if(name)
        userToFind.name = name
    if(age)
        userToFind.age = age

        res.send(`User with id: ${id} has been updated`)
}

export {getUser, createUser, deleteUser, patchUser}