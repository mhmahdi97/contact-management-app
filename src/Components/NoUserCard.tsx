import { FaWindowClose } from 'react-icons/fa';
// 
const NoUserCard = () => {
    return (
        <div className="w-[450px] h-24 flex items-center border border-slate-300 bg-base-100 shadow-lg ">
            <div className='w-fit mx-auto flex items-center gap-2'>
                <div className='text-5xl text-red-500'>
                    <FaWindowClose />
                </div>
                <div>
                        <h2 className="text-2xl font-semibold">No Contacts Found!</h2>
                        <p className='text-lg'>Please add contact from create contact button</p>
                </div>
            </div>
        </div>
    );
};

export default NoUserCard;