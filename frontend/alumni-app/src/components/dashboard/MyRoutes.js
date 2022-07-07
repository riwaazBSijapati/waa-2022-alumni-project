import React from "react";
import { Route, Routes } from "react-router";
import User from "../user/User";
import This from "./This";

export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/register" element={<This></This>} />
            {/* <Route path="/login" element={<User></User>} />
            <Route path="/reset-password" element={<User></User>} /> */}
        </Routes>
    )
}