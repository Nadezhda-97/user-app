import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';
import { UsersPage } from '../../pages/users/UsersPage';
import { UserEditPage } from '../../pages/user-edit/UserEditPage';

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
        element: <UserEditPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
