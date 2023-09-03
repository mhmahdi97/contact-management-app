import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactPage from "../Components/ContactPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/contacts',
                element:<ContactPage/>
            },
            {
                path: '/charts-and-maps',
                element:<ContactPage/>
            }
        ]
    }
])

export default router;