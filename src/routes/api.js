const express=require('express');
const router= express.Router();
// const profileController=require('../controllers/profileController')
const {signup,login,profile,update}=require('../controllers/profileController')
const authVerifyMiddleware=require('../middleware/authVerifyMiddleware')

// router.post("/signup",profileController.signup)
// router.post("/login",profileController.login)
// router.get("/profile",authVerifyMiddleware,profileController.profile)
// router.patch("/profile/update",authVerifyMiddleware,profileController.update)


router.post("/signup",signup)
router.post("/login",login)
router.get("/profile",authVerifyMiddleware,profile)
router.patch("/profile/update",authVerifyMiddleware,update)
module.exports=router;