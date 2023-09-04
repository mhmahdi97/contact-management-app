import { useNavigate } from "react-router-dom";
import Button from "./Button";
import TextField from "./TextField";
import React, {useState}  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "../Redux/features/contactsSlice";
import { RootState } from "../Redux/store";



const AddContact = () => {

    const contactsLength = useSelector((store: RootState) => store.contacts.length);
    
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const [values, setValues] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        status: ''
    })

    const handleAddContact = () => {
        console.log(values)
        dispatch(addContacts({
            id: contactsLength + 1,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            status: values.status
        }))
        alert('Contact Added Successfully')
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
             
            <Button onClick={handleAddContact}>Add  Contact</Button>
        </div>
    );
};

export default AddContact;