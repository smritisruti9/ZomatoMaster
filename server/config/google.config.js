import passport from "passport";
import googleOAuth from "passport-google-oauth20";
import { async } from "regenerator-runtime";
import { UserModel } from "../database/allModels";
const GooglStrategy =googleOAuth.Strategy;
export default (passport)=>{
    passport.use(
        new GooglStrategy({
            clientID:process.env.GOOGLE_cLIENT_ID,
            clientSe:process.env.GOOGLE.env.GOOGLE_CLIENT_SECRET,
            callbackURL:"http://localhost:4000/auth/google/callback"
        },
        
        async (accessToken,refreshToken,profile,done)=>{
            const newUser={
                fullname:profile.displayName,
                email:profile.emails[0].value
            };
            try{
                const user=await UserModel.findOne({email:newUser.email});
                const token =user.generateJwtToken();
                if(user){
                    done(null,{user,token});
                }else{
                    const user =await UserModel.create(newUser);
                     }
                    }
                     catch(error){
                    done(error,null);
                }
            }
        )
    );
    passport.serializeUse((userData,done)=>done(null,{...userData}));
    passport.deserailizeUser((id,done)=>done(null,id));
}