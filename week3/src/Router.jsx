import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/common/Header';
import Home from './components/homePage/Home';

const Router = () => {
  const routerData = [
    {
      path: '/',
      element: <Home />,
    },
  ];

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routerData.map((data, i) => (
          <Route key={`route-${i}`} path={data.path} element={data.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
