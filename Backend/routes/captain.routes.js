const captainController=require('../controllers/captain.controller');
const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const authMiddleware=require('../middlewares/auth.middleware');


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First 3 letters'),
    body('password').isLength({min:6}).withMessage('Password must be filled'),
    body('vehicle.color').isLength({min:3}).withMessage('Vehicle color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate name must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car','bike','truck']).withMessage('Vehicle type must be one of the following: car, bike, truck')
],
   captainController.registerCaptain
)
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be filled'),
],
   captainController.loginCaptain
)
router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);
router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);

module.exports=router;