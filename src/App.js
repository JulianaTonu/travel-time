
import { RouterProvider } from 'react-router-dom/dist';

import { routes } from './routes/Routes';

import './App.css'
import { Toaster } from 'react-hot-toast';

function App() {

  
  return (
    <div className="app">
     
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
