import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import { UsersPage } from '../../pages/users/UsersPage';
import { Header } from '../../components/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <UsersPage />,
      },
      {
        path: '/users/:id',
        element: <div>Edit Page</div>,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
