
import { createBrowserRouter } from 'react-router-dom/dist';
import Booking from '../components/Booking/Booking';
import Extra from '../components/extra/Extra';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import SelectTour from '../components/SelectTour/SelectTour';
import Main from '../layout/Main';



 export const routes =createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:async()=>{
                    return fetch(`http://localhost:5000/destinations`)
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

            //     // loader:({params})=>fetch(`http://localhost:5000/destinations/${params.id}`)
            // },
            {
                path:'/booking/:id',
                element:<Booking></Booking>,
                loader: ({params})=>fetch(`http://localhost:5000/destinations/${params.id}`)
            }

        ]
    }
    
 ])

    
