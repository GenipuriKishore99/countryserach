import { getData, saveData } from "../context.service";

const url="http://localhost:3000/countries"

export function getCountries(){
    return getData(url)
}

export function saveAddCountries(data){
    return saveData(url,data)
}