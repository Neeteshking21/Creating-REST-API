import express from 'express'
import { getUser, createUser, deleteUser, patchUser } from '../Controllers/User.js'
const router = express.Router()

// all routes in here are starting with /users
router.get('/', getUser)

router.post('/', createUser)

router.delete('/:id', deleteUser)

router.patch('/:id', patchUser)

export default router

/*

GET:- /users          -> find all users
Post:- /users         -> Create  a user
Get:- /users/:id      -> find user details
Delete:- /users/:id   -> delete user
Patch:-  /users/:id   -> Update user (for partially changes)
Put:-    /user/:id    -> Update user (for completly override)
*/