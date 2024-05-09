import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Main from './pages/main/Main';
import Mypage from './pages/mypage/Mypage';
import Signup from './pages/signup/Signup';

const Router = () => {
  const routerData = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/:id',
      element: <Main />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/mypage/:id',
      element: <Mypage />,
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
