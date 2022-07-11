import axios from "axios";
//setting the base for the url for axios to use
// const baseURL='localhost:8080/api/v1';
export default axios.create({
    baseURL:'http://localhost:8080/api/v1/'
})
// export async function getRequest(path){
//     try{
//         console.log(baseURL+path);
//         const response=await axios.get(baseURL+path);
//         return response.data
//     }catch(error){
//         console.error(error);
//     }
// }
// export async function postRequest(path,data){
//     try{
//         const response=await axios.post(baseURL+path,data,{
//             headers:{
//                 'content-type':'text/json'
//             }
//         });
//         return response.data
//     }catch(error){
//         console.error(error);
//     }
// }
// export async function deleteRequest(path) {
//     try {
//         const response = await axios.delete(baseURL+path);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }

// }

// export async function putRequest(path, data) {
//     try {
//         const response = await axios.put(baseURL+path, data, {
//             headers: {
//                 'content-type': 'text/json'
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// }