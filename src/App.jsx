import {createBrowserRouter, RouterProvider} from 'react-router-dom';


import AuthenticationPage, {authAction} from './pages/Authentication';
import RootLayout from "./pages/root";
import ErrorPage from "./pages/Error";
import BuildingsPage, {buildingsLoader} from "./pages/Buildings";

import {tokenLoader} from './util/auth';
import JobsPage, {jobsLoader} from "./pages/Jobs.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        id: 'root',
        loader: tokenLoader,
        children: [
            {
                path: '/buildings',
                element: <BuildingsPage/>,
                loader: buildingsLoader,
                children:[
                    {
                        path: ':buildingId/jobs',
                        element: <JobsPage />,
                        loader: jobsLoader,
                    }
                ]
            },
            {
                path: '/auth',
                element: <AuthenticationPage/>,
                action: authAction,
            },
        ],
    },
    ])

    // {
    //     path: 'logout',
    //     action: logoutAction,
    // },


function App() {
    return <RouterProvider router={router}/>;
}

export default App;