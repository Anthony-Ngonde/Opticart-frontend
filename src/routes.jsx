import { createBrowserRouter } from 'react-router-dom';
import App from './pages/App';
import LensCustomization from './components/LensCustomization';
import OrderForm from './components/OrderForm';

  
  export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'lens-customization',
      element: <LensCustomization />
    },
    {
      path: 'order-form',
      element: <OrderForm />
  
    },
  ]);
  
