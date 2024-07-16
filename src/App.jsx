import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./components/pages/login/LoginPage"
import OrderPage from "./components/pages/order/OrderPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>
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
