import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import { Gigs } from "./pages/gigs/Gigs";
import { Gig } from "./pages/gig/Gig";
import { Add } from "./pages/add/Add";
import { Orders } from "./pages/orders/Orders";
import { Messages } from "./pages/messages/Messages";
import { Message } from "./pages/message/Message";
import { MyGigs } from "./pages/myGigs/MyGigs";
import "./app.scss"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const Layout = ()=>{
    return(
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
    ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
