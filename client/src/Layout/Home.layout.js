import React from "react";
import {useDispatch} from "react-router";
import { useParams } from "react-router";
import React from "react";
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";
import { GET_RESTAURANT } from "../Redux/Reducer/restaurant/restaurant.action";
const HomeLayout=(props)=>{
    const dispatch=useDispatch();
},[]);
    return <> 
    <div className="container mx-auto px-4 lg:px-20">
        <Navbar/>
     {props.children}
    </div>
    <FoodTab/>
    </>
};
export default HomeLayout;