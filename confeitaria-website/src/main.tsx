 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './routes/Home/index.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Contato from './routes/Contato/index.tsx';
import Cardapio from './routes/Cardapio/index.tsx';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/cardapio",
      element: <Cardapio />
    },
    {
      path: "/contato",
      element: <Contato />
    },
  ]
}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
