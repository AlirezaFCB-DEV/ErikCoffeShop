import { Link } from "react-router-dom";

interface Nav_Title_Props {
  children: React.ReactNode;
  route: string
}

const Nav_Title = ({ children , route}: Nav_Title_Props) => {
  return (
    <Link to={route}>
      {children}
    </Link>
  );
};

export default Nav_Title;
