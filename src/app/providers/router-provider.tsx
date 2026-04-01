import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Users Page</div>,
  },
  {
    path: '/users/:id',
    element: <div>Edit Page</div>,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};