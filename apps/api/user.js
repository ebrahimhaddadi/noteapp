import http from './index';

export const registerUser=async(user)=>{
    try {
        const {status}= await http.post(`${http.url}/register`,
        JSON.stringify(user),
        )
        console.log(status);
        return status
    } catch (error) {
        console.log(error,"server error")
    }
}