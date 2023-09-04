import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactPage from "../Components/ContactPage";
import ChartsAndMaps from "../Components/ChartsAndMaps";
import AddContact from "../Components/AddContact";
import EditContact from "../Components/EditContact";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/contacts',
                element:<ContactPage />
            },
            {
                path: '/add-contact',
                element:<AddContact />
            },
            {
                path: '/contacts/edit-contact/:id',
                element:<EditContact />
            },
            {
                path: '/charts-and-maps',
                element:<ChartsAndMaps />
            }
        ]
    }
])

export default router;