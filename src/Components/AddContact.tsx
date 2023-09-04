import Button from "./Button";
import TextField from "./TextField";

import React, {useState}  from 'react';


const AddContact = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const handleAddContact = () => {
        console.log(values)
    }

    return (
        <div className="mt-10 max-w-xs md:max-w-xl mx-auto">
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
            
            <TextField 
                label= 'Email:'
                value={values.email}
                onChange={e => setValues({...values, email: e.target.value})}
                inputProps={{type: 'email', placeholder: 'Email'}}
            />

            <br />
{/* 
             <label className="mb-2 text-base text-gray-800">
                Remember me
            </label>
                <input type="radio" /> */}
               
            <div className="flex gap-3 items-center">
                <span className="mb-2 text-lg text-gray-800">Status:</span>
                <div className="w-fit">

                <input type="radio" name="status" /> Active
                <br />
                <input type="radio" name="status" /> Inactive
                </div>
            </div>
             
                {/* <label className="form-control">
                    <input type="radio" name="radio2" />
                    Radio - checked
                </label> */}
            <Button onClick={handleAddContact}>Submit</Button>
        </div>
    );
};

export default AddContact;