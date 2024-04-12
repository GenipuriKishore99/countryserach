import './countries-component.css';
import {useForm} from 'react-hook-form';
import { saveAddCountries } from '../../services/countries/countries.service';

export function AddCountries(){
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();
    function addCountries(data){
        data.id=0;
        saveAddCountries(data).then((res)=>{
            alert(JSON.stringify(res.data));
        })
    }
    return(
        <div className='bg-1'>
            <h4>Add Countries</h4>
            <form onSubmit={handleSubmit((data)=>{addCountries(data)})}>
            <div className='bg-2'>
            <div>
                <label>CountryName:</label>
                <input type="text" className="form-control" {...register("name",{required:true})}></input>
            </div>
            {errors.name && <div className='text-danger'>country name is manadatary</div>}
            <div>
                <label>CountryDescription:</label>
                <textarea row="5"className="form-control" {...register("description",{required:true})}>

                </textarea>
            </div>
            {errors.description && <div className='text-danger'>country Description is mandatary</div>}
            <div className='m-3'>
                <input type="submit" value="save" className="btn btn-primary me-3"></input>
                <input type="reset" value="cancel" className="btn btn-danger"></input>
            </div>
            
            </div>
            </form>
        </div>
    )
}