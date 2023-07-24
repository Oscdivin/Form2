import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "../static/Header";

const LayOut =()=>{
          return(
                    <div>
                              <Header/>
<Outlet/>
<Footer/>
                    </div>
          )
}

export default LayOut