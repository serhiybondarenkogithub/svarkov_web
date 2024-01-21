const express = require('express');
const userController = require("../controllers/user");


const router = express.Router();

router.get('/', userController.getIndex);

router.get('/avtonavisy', userController.getCategoryPage);
router.get('/konstructsiyi', userController.getCategoryPage);
router.get('/peryla', userController.getCategoryPage);
router.get('/shody', userController.getCategoryPage);
router.get('/vorota-parkany', userController.getCategoryPage);


module.exports = router;
