import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "@pages/DashboardPage";
import CheckAdmin from "./middlewares/CheckAdmin";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/dashboard",
      element: (
        <CheckAdmin>
          <DashboardPage />
        </CheckAdmin>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
