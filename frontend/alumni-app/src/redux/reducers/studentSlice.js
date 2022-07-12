import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "../api/axios";
import axios from "axios";

export const fetchAllStudents = createAsyncThunk(
    'students',
    async (param) => {
        const response = await axios.get("https://localhost:8080/api/v1");
        return response.data
    }
)
const initialState = {
    students: [],
    loading: 'idle',
}

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllStudents.fulfilled, (state, action) => {
            state.posts.push(action.payload)
        })
    }
})

export default studentSlice.reducer;