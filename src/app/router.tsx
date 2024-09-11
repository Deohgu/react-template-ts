import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";

const Layout = () => (
  <>
    <Outlet />
  </>
);

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="/expenses" replace />,
        },
        {
          path: "expenses",
          lazy: async () => {
            const { ExpensePage } = await import("./routes/app/expense-page");
            return { Component: ExpensePage };
          },
        },
        {
          path: "*",
          element: <Navigate to="/expenses" replace />,
        },
      ],
    },
  ]);

export const AppRouter = () => {
  return <RouterProvider router={createAppRouter()} />;
};
