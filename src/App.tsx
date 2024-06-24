import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "@pages/DashboardPage";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/dashboard", element: <DashboardPage /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
