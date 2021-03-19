const express = require('express');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllUsers = (req, res) => {
    const users = [
            {
            id: 1,
            name: 'ivan',
            },
            {
            id: 2,
            name: 'marta',
            }
        ]
    
        res.json(users);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createUser =  (req, res) => {

        const user = req.body;
        user.id = 124;
    
        const result = {
            message: `user created`,
            user
        }
        res.status(201).json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
    
const updateUser = (req, res) => {
        const {id} = req.params;
        const user = req.body;
    
        user.id = id;
    
        const result = {
            message: 'user update ',
            user
        }
        res.json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
    
const updatePartialUser = (req, res) => {
        const {id} = req.params;
        const user = req.body;
    
        user.id = id;
        const result = {
            message: 'user update with patch',
            user
        }
        res.json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
    
const deleteUser = (req, res)=> {
    
        const {id} = req.params;
        //const id = req.params.id;
        const result = {
            message: `user wiht id:${id} deleted`
        }
        res.json(result);
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
}