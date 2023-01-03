//  PATH

const express = require("express");
const router = express.Router();
const { home ,
        createUser, 
        getUsers, 
        editUser, 
        deleteUser
    } = require("../controllers/userControllers");


router.get('/' , home)
router.post('/createUser', createUser)
router.get('/getUsers', getUsers)
router.put('/editUser/:id', editUser)
router.post('/deleteUser/:id', deleteUser)

module.exports = router;
