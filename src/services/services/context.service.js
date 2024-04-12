import axios from 'axios';

export function getData(url){
    return axios.get(url)
}

export function saveData(url,data){
    return axios.post(url,data)
}
export function updateData(){
    return axios.put()
}