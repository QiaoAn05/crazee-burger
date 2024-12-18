import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import { OrderContextProvider } from "./context/OrderContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "order/:username",
    element: <OrderPage />,
  },
]);

function App() {
  return (
    <OrderContextProvider>
      <RouterProvider router={router} />
    </OrderContextProvider>
  );
}

export default App;
