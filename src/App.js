
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Layout/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Intentory/Inventory';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { addToCart } from './AddToCart/AddToCart';
import Login from './components/Login/Login';
import Registar from './components/Registar/Registar';
import Shipping from './components/Shipping/Shipping';
import PrivetRoute from './route/PrivetRoute';


function App() {
  const router = createBrowserRouter([

    {path: '/', element: <Main></Main>, children: [
      {path: '/', loader: addToCart, element: <Shop></Shop>},
      {path: 'orders', loader: addToCart, element: <Orders></Orders>},
      {path: 'shipping', element: <PrivetRoute><Shipping></Shipping></PrivetRoute>},
      {path: 'inventory', element: <PrivetRoute><Inventory></Inventory></PrivetRoute>},
      {path: 'about', element: <About></About>},
      {path: 'login', element: <Login></Login>},
      {path: 'registar', element: <Registar></Registar>}
    ]},
    {path: '*', element: <NotFound></NotFound>}
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
