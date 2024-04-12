import { useEffect, useState } from "react"
import { getUsers } from "../../services/users/users.service";

export function UserRegistrationView(){
    const [data,setData]=useState();
    useEffect(()=>{
        getUsersDetails();
    },[])
    function getUsersDetails(){
        getUsers().then((res)=>{
            setData(res.data)
        })
    }
    const headers=["Id","Name","Email","Phone","Country","State","Address"]
    return(
        <table className="table table-bordered table-hover m-1">
            <thead className="table table-dark">
                <tr>
                    {
                        headers?headers.map((item)=>{
                            return(
                                <th>{item}</th>
                            )
                        })
                    :null}
                </tr>
            </thead>
            <tbody>
              {
                data?data.map((item)=>{
                    return(
                        <tr>
                            {Object.values(item).map((d)=>{
                                return(
                                    <td>{d}</td>
                                )
                            })}
                        </tr>
                    )
                })
              :null}
            </tbody>
        </table>
    )
}