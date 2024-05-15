import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import Main from './pages/main/Main';
import Mypage from './pages/mypage/Mypage';
import Signup from './pages/signup/Signup';

const Router = () => {
  const routerData = createBrowserRouter([
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
  ]);

  return <RouterProvider router={routerData}></RouterProvider>;
};

export default Router;
