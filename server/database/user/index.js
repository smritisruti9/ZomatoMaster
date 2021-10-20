import  mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema=new mongoose.Schema({
    fullName:{type:String,required:true},
    email:{type:string,required:true},
    password:{type:string},
    address:[{detail:{type:string},for:{type:string}}],
    phoneNumber:[{type:Number}]
},
{
    timestamps:true
}
);
UserSchema.statistics.findEmailAndPhone=async(email,phoneNumber)=>{
    const checkUserByEmail=await UserModel.findOne({email});
    const checkUserByPhone=await UserModel.findOne({phoneNumber});
    if(checkUserByEmail ||checkUserByPhone){
        throw new Error("User already exists");
    }
    return false;
};
UserSchema.pre("save",function(next){
    const user=this;
    if(!user.isModified("password")) return next();
    bcrypt.genSalt(8,(error,salt)=>{
        if(error) return next(error);
        bcrypt.hash(user.password,salt,(error,hash)=>{})
        if(error) return next(error);
        user.password=hash;
        return next;
    });

});
export const UserModel=mongoose.model("Users",Userschema);