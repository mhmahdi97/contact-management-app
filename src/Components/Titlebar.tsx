
import { useLocation } from "react-router-dom";


const Titlebar = () => {
    

    const {pathname} = useLocation();
    const title = pathname === '/contacts' ? 'Contacts Page' : pathname === '/charts-and-maps' ? 'Charts and Maps': 'Contact Management App';

    return (
        <div className='h-10 lg:h-16 bg-slate-400'>
            <h1 className='text-white text-3xl lg:text-5xl text-center'>{title}</h1>
        </div>
    );
};

export default Titlebar;