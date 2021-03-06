const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller')


router.get('/',homeController.home);
router.get('/projects',homeController.projects);
router.get('/blogs',homeController.blogs);
router.get('/about',homeController.about);



module.exports = router;