import axios from "axios";
//setting the base for the url for axios to use
export default axios.create({
    baseURL:'https://localhost:8080/api/v1'
})