import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import userModel from "../models/userModel.js";

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `/auth/google/callback`
  },
  async (accessToken, refreshToken, profile, cb) => {
    try {
      let user = await userModel.findOne({ googleId: profile.id });
      if (!user) {
        const newUser = await userModel.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          image: profile.photos[0].value,
        });
        user = await newUser.save()
      }
      return cb(null, user);
    } catch (error) {
      return cb(error, null);
    }
  }
));