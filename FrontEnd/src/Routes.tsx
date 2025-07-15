import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import Cms from "./Pages/Cms/Cms";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Services from "./Pages/Services/Services";
import Tutorials from "./Pages/Tutorials/Tutorials";
import User from "./Pages/User/User";

interface RoutesProps {
  path: string;
  element: React.ReactNode;
  children?: routesChildren;
}

type routesChildren = RoutesProps[];

const routes: RoutesProps[] = [
  {
    path: "/",
    element: <Home />,
  },
    { path: "/cart", element: <Cart /> },
    { path: "/user", element: <User /> },
    { path: "/cms/:id", element: <Cms /> },
    { path : "/tutorials" , element: <Tutorials />},
    { path : "/about" , element: <About />},
    { path : "/contact" , element: <Contact />},
    { path : "/products" , element: <Products />},
];

export default routes;
