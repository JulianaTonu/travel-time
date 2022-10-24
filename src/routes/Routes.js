
import { createBrowserRouter } from 'react-router-dom/dist';
import Booking from '../components/Booking/Booking';

import Home from '../components/Home/Home';
import Hotel from '../components/Hotel/Hotel';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

import Main from '../layout/Main';
import PrivateRouter from '../private/PrivateRouter';



 export const routes =createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:async()=>{
                    return fetch(`https://travel-server-iota.vercel.app/destinations`)
                },
                element:<Home></Home>
                

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
           
           
            // {
            //     path:'/booking/:id',
            //     element:<Booking></Booking>,

            //     // loader:({params})=>fetch(`https://travel-server-iota.vercel.app/destinations/${params.id}`)
            // },
            {
                path:'/booking/:id',
                element:<Booking></Booking>,
                loader: ({params})=>fetch(`https://travel-server-iota.vercel.app/destinations/${params.id}`)
            },
            { 
                path:'/hotel',
                element:<PrivateRouter><Hotel></Hotel></PrivateRouter>
            }

        ]
    }
    
 ])

    
