import './states-component.css';
import {useForm} from 'react-hook-form';
import { saveStates } from '../../services/states/states.service';
import { getCountries } from '../../services/countries/countries.service';
import { useEffect, useState } from 'react';
export function AddStates(){
    const [country,setCountry]=useState()
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();
    function addState(data){
        saveStates(data).then((res)=>{
            alert(JSON.stringify(res.data))
        })
    }
    useEffect(()=>{
        getCountires();
    },[])
    function getCountires(){
        getCountries().then((res)=>{
            setCountry(res.data)

        })

    }
    return(
        <div className='bg-3'>
            <h4>Add States</h4>
            
           
           <form onSubmit={handleSubmit((data)=>{addState(data)})}>
           <div className='bg-4'>
            <div>
                <label>Country:</label>
                <select className='form-control' {...register("country",{required:true})}>
                    {
                        country? country.map((item)=>{
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
                <input type="text" className="form-control" {...register("state",{required:true})}></input>
            </div>
            {errors.state&&<div className='text-danger'>state is mandatary </div>}
            <div>
                <label>StateDescription:</label>
                <textarea row="5" className="form-control" {...register("description",{required:true})}>

                </textarea>
            </div>
            {errors.description && <div className='text-danger'>state decsiption is manadatary</div>}
            <div className='m-2'>
                <input type="submit" value="save" className="btn btn-primary me-2"></input>
                <input type="reset" value="cancel" className="btn btn-danger"></input>
            </div>
            </div>
            </form>
           
        </div>
    )
}