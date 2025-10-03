import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import authUser from "../middlewares/authUser.js";

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  try {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET);
    res.redirect(`${process.env.CLIENT_URL}/?token=${token}`);
    //res.json({ success: true, token })
  } catch (error) {
    console.log("Google Login Error:", error);
    res.redirect(`${process.env.CLIENT_URL}/login?error=google_login_failed`);
    //res.json({ success: false, message: error.message })
  }
});

router.get('/me', authUser, (req, res) => {
  res.json({ success: true, user: req.user })
});

export default router;

