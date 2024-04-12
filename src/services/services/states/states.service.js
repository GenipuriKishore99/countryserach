import { getData, saveData } from "../context.service";

const url="http://localhost:3000/states/"

export function getStates(){
    return getData(url)
}

export function saveStates(data){
    return saveData(url,data)
}