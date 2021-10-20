import { JsonWebTokenError } from "jsonwebtoken";
import mongoose from "mongoose";
import { async } from "regenerator-runtime";
const ReviewSchema=mongoose.Schema({
    food:{type:mongoose.Types.ObjectId,ref:"Foods"},
    restaurant:{type:mongoose.Types.ObjectId,ref:"Users"},
    rating:{type:Number,required:true},
    reviewText:{type:String,required:true},
    photos:[{
        type:mongoose.Types.ObjectId,
        ref:"Images"
    }]
},
{timestamps:true
});
UserSchema.methods.generatejwtToken=function(){return jwt.sign({user:{fullname,email},"ZomatoApp");};
UserSchema.statistics.findEmailPhone=async(email,phoneNumber)=>{
     
}
export const ReviewModel=mongoose.model("Reviews",ReviewSchema);