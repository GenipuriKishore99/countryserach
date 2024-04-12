import { getData, saveData } from "../context.service";

const url="http://localhost:3000/users/"

export function saveUsers(data){
    return saveData(url,data);
}

export function getUsers(){
    return getData(url)
}