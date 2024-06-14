import { createBrowserRouter } from 'react-router-dom';
import App from './pages/App';
import LensCustomization from './components/LensCustomization';

  
  export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'lens-customization',
      element: <LensCustomization />
    },
  ]);
  
