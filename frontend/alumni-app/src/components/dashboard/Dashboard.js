import React from "react";
import Header from "./Header";
import MyRoutes from "./MyRoutes";
import './DashStyle.css'

export default function Dashboard(){
    return (
        <div className="mainDash">
            <Header></Header>
            <MyRoutes></MyRoutes>
        </div>
    )
}

