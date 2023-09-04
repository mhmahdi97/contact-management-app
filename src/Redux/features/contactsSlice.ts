import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ContactsState {
  
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    status: string,
  

}

 const initialState: ContactsState[] = 
  [
    {
      id: 1,
      firstName: 'Mahmud Hasan',
      lastName: 'Mahdi',
      email: 'mahdi@gmail.com',
      status: 'active'
    },
    {
      id: 2,
      firstName: 'Rakibul Islam',
      lastName: 'Shojib',
      email: 'rakib@gmail.com',
      status: 'active'
    }
  ]


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: (state, action: PayloadAction<ContactsState>) => {
      const newContact = action.payload;
      // state = [...state, action.payload];
      state.push(newContact);
      console.log(newContact);
    }
  },
})


export const { addContacts } = contactsSlice.actions;

export default contactsSlice.reducer;