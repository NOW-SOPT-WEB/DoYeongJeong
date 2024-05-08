import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './homePage/components/Home';
import Header from './shared/components/Header';

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
