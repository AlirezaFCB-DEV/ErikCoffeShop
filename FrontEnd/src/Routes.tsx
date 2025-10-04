import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import Cms from "./Pages/Cms/Cms";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Tutorials from "./Pages/Articles/Tutorials";
import User from "./Pages/User/User";
import Account from "./Pages/Account/Account";

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
  { path: "/tutorials", element: <Tutorials /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/products", element: <Products /> },
  {path: "/login_or_register" , element: <Account />},
  { path: "*", element: <Home /> },
];

export default routes;
