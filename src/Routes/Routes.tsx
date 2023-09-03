import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactPage from "../Components/ContactPage";
import ChartsAndMaps from "../Components/ChartsAndMaps";


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
                path: '/add-contact',
                element:<ContactPage/>
            },
            {
                path: '/charts-and-maps',
                element:<ChartsAndMaps />
            }
        ]
    }
])

export default router;