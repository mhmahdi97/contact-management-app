import { useSelector } from "react-redux";
import type { RootState } from "../Redux/store"; 
import Button from "./Button";
import ContactsCard from "./ContactsCard";
import NoUserCard from "./NoUserCard";

const ContactPage = () => {
    const contacts = useSelector((store: RootState) => store.contacts);
    console.log(contacts);

    return (
        <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
            <h1 className="text-center font-bold text-2xl text-gray-700 mb-3">Contacts:</h1>
            <div>
                {/* <Button
                    onClick={}
                >Add Contact</Button>     */}
                <div className='grid md:grid-cols-2 gap-5'>
                    {contacts ? <>
                        {contacts.map ((contact, index) =>  <ContactsCard 
                            contact ={contact}
                            key={index}
                        />)}
                    </>:
                    <>
                        <NoUserCard />
                    </>}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;