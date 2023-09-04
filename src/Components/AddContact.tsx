import Button from "./Button";
import TextField from "./TextField";

import React, {useState}  from 'react';


const AddContact = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
    })

    const handlAddContact = () => {
        console.log(values)
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField 
                label= 'First Name:'
                value={values.firstName}
                onChange={e => setValues({...values, firstName: e.target.value})}
                inputProps={{type: 'text', placeholder: 'First Name'}}
            />
            <br />
            <TextField 
                label= 'Last Name:'
                value={values.lastName}
                onChange={e => setValues({...values, lastName: e.target.value})}
                inputProps={{type: 'text', placeholder: 'Last Name'}}
            />

            <br />
{/* 
             <label className="mb-2 text-base text-gray-800">
                Remember me
            </label>
                <input type="radio" /> */}
               
            <div>
                <p>Status:</p>
                <input type="radio" name="status" /> Active
                <br />
                <input type="radio" name="status" /> Inactive
            </div>
             
                {/* <label className="form-control">
                    <input type="radio" name="radio2" />
                    Radio - checked
                </label> */}
            <Button onClick={handlAddContact}>Submit</Button>
        </div>
    );
};

export default AddContact;