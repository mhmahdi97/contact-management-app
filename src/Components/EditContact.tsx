import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from './TextField';
import Button from './Button';

const EditContact = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        status: ''
    })

    const handleEditContact = () => {
        console.log(values)
        alert('Contact Edited Successfully')
        navigate(-1)
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

               
            <div className="flex gap-3 items-center">
                <label className="mb-2 text-lg text-gray-800">Status:</label>
                <div className="w-fit">
                    <input type="radio" name="status" value='active' onChange={e => setValues({...values, status: e.target.value})} /> Active
                    <br />
                    <input type="radio" name="status" value='inactive' onChange={e => setValues({...values, status: e.target.value})} /> Inactive
                </div>
            </div>
             
            <Button onClick={handleEditContact}>Submit Edit</Button>
        </div>
    );
};

export default EditContact;