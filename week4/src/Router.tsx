import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';

const Router = () => {
  const routerData = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routerData.map((data, i) => (
          <Route key={`route-${i}`} path={data.path} element={data.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
