import React, { useEffect,useState } from "react";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import { getRequest } from "../../api/axios";
import { useParams } from "react-router";
import { Button, Nav } from "react-bootstrap";
import api from "../../api/axios";

export default function StudentProfile() {
    // const[userState,setUserState]=useState([]);
    // const fetchStudent = async (param) => {
    //         const response = await axios.get("https://localhost:8080/api/v1/students/1");
    //         setUserState(response.data);
    //     }
    // useEffect(()=>{
    //     fetchStudent()
    // },[]);

    // const {id}=useParams();
    const [students, setStudents]=useState([]);

    useEffect(()=>{
        const fetchStudents=async()=>{
            try{
                const response =await api.get('/students/8');
                console.log(response.data)
                setStudents(response.data);
            }catch(err){
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }
        }
        fetchStudents();
    },[])
    return (
        <div>
            <h1>Student First Name: {students.first_name}</h1>
            <h1>Student Last Name: {students.last_name}</h1>
            <Nav.Link>
                
            </Nav.Link>
        </div>
    )
}