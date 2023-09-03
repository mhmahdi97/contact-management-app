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
        <div className="mt-10 mx-w-xl mx-auto">
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
            <Button onClick={handlAddContact}>Submit</Button>
        </div>
    );
};

export default AddContact;