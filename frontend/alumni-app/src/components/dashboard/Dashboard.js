import React from "react";
import Header from "./Header";
import MyRoutes from "./MyRoutes";
import Posts from "../post/Post";

export default function Dashboard(){
    return (
        <div className="mainDash">
            <Header></Header>
            <Posts></Posts>
            <MyRoutes></MyRoutes>
        </div>
    )
}

