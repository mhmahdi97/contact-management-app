import { NavLink, Outlet } from "react-router-dom";
import Titlebar from "./Components/Titlebar";



function App() {
  

  return (   
    <> 
    <Titlebar />
      <div className="drawer lg:drawer-open">

        {/* Button for open sidbar in smaller device */}
          <label htmlFor="my-drawer-2"  className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
              </svg>
          </label>
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content flex flex-col items-center justify-center">
              <h1 className='text-4xl font-semibold mt-12'>Welcome to <span className='text-red-500'>The</span> Dahsboard!!!</h1>
          {/* Pages from child routes render here  */}
              <Outlet></Outlet>
          </div> 

          {/* sidebar drawer content */}
          <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
              <ul className="menu p-4 w-64 h-full font-semibold bg-base-200 text-base-content">
                  <h1 className='text-3xl text-center mb-7'>Pages</h1>
                  <li><NavLink to="/contacts">Contacts</NavLink></li>
                  <li><NavLink to="/charts-and-maps">Charts and Maps  </NavLink></li>
              </ul>

              
          
          </div>
      </div>
    </>  


    
  );
}

export default App;
