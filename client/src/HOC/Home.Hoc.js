import React,{Component} from "react";
import {Route} from "react-route-dom";
import HomeLayout from "../Layout/Home.layout";
const HomeLayoutHOC=({component:Component,...rest}=>{
   return(
       <>
       <Route
       {...rest
    component={(props)=>(
        <HomeLayout>
            <Component{...rest}/>
        </HomeLayout>
    )}
    />
    </>
   ) ;
};