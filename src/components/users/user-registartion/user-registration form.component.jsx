import './user-registration.component.css';
import {useForm} from 'react-hook-form';
import { saveUsers } from '../../services/users/users.service';
import { getStates } from '../../services/states/states.service';
import { useEffect, useState } from 'react';
import { getCountries } from '../../services/countries/countries.service';
import { UserRegistrationView } from '../user-registrationview/user-registrationview.component';
export function UserRegistration(){
    const [states,setStates]=useState();
    const [country,setCountry]=useState();
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();
    useEffect(()=>{
        addStates();
        addCountry();
    },[])
    function addUsers(data){
        data.id=0;
        saveUsers(data).then((res)=>{
            alert(JSON.stringify(res.data));
        })

    }

    function addStates(){
        getStates().then((res)=>{
            setStates(res.data)

        })
       
    }
    function addCountry(){
        getCountries().then((res)=>{
            setCountry(res.data)
        })
    }
    return(
        <div className='m-3'>
            <h4>user-Registartion</h4>
            <form onSubmit={handleSubmit((data)=>{addUsers(data)})}>
            <div className='m-3'>
            <div>
                <label>Name:</label>
                <input type="text" className="form-control" {...register("name",{required:true})}></input>
            </div>
            {errors.name &&<div className='text-danger'>Name is manadatary</div>}
            <div>
                <label>Email:</label>
                <input type="email" className="form-control" {...register("email",{required:true})}></input>
            </div>
            {errors.email && <div className='text-danger'>Email is mandatary</div>}
            <div>
                <label>Phone:</label>
                <input type="number"className="form-control" {...register("number",{required:true})}></input>
            </div>
            {errors.phone&&<div className='text-danger'>Phone number is mandatary</div>}
            <div>
                <label>Country:</label>
                <select className='form-control' {...register("country",{required:true})}>
                    { 
                     country?country.map((item)=>{
                        return(
                            <option>{item.id}</option>
                        )
                    })
                        
                    :null}
                </select>
            </div>
            {errors.country && <div className='text-danger'>country is mandatary</div>}
            <div>
                <label>State:</label>
                <select className='form-control' {...register("states",{required:true})}>
                    {
                         states? states.map((item)=>{
                            return(
                                <option>{item.id}</option>
                            )
                         })
                    :null}
                </select>
            </div>
            {errors.states &&<div className='text-danger'>states is mandatary</div>}
            <div>
                <label>Address:</label>
                <textarea row="5" className="form-control" {...register("address",{required:true})}>

                </textarea>
            </div>
            {errors.address&&<div className='text-danger'>address is mandatary</div>}
            <div className='m-2'>
                <input type="submit" value="save"className="btn btn-primary me-3"></input>
                <input type="reset" value="save"className="btn btn-danger"></input>
            </div>
            </div>
        
            </form>
            <UserRegistrationView></UserRegistrationView>
        </div>
    )
}