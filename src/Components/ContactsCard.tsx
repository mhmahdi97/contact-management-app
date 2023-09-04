import { Link } from "react-router-dom";

type contactProps = {
    contact: {
    id: number;
    firstName: string;
    lastName: string;
    status: string;
}
}

const ContactsCard = ({contact}: contactProps) => {
    const {firstName, lastName, id} = contact;
    
    return (
        <div className="bg-gray-300 p-5 flex items-center justify-between">
            <div>
                <h3 className="font-bold text-lg text-gray-700">{firstName} <span>{lastName}</span></h3>

            </div>
            <div className="flex gap-1">
                <Link to={`edit-contact/${id}`}>
                    <button className="py-2 px-3 text-center rounded-md bg-slate-400 text-white">Edit</button>
                </Link>
                <button className="py-2 px-3 rounded-md bg-red-700 text-white">Delete</button>
            </div>
        </div>
    );
};

export default ContactsCard;