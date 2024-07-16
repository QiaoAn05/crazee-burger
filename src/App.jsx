import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./components/pages/login/LoginPage"
import OrderPage from "./components/pages/order/OrderPage"
import ErrorPage from "./components/pages/error/ErrorPage"


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: 'order',
    element: <OrderPage/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
