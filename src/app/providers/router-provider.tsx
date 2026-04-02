import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UsersPage } from '../../pages/users/UsersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UsersPage />,
  },
  {
    path: '/users/:id',
    element: <div>Edit Page</div>,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
