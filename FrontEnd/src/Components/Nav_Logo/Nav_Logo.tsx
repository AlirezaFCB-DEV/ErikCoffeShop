import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav_Logo = () => {
  return (
    <Link to="https://instagram.com/erick.cafeee">
      <div className="flex bg-white-20 p-2.5 rounded-full items-center gap-1">
        <span className="text-sm mt-0.5 max-sm:text-2xl">Erick.Cafeee</span>
        <FaInstagram className="text-2xl max-xl:text-xl max-sm:text-4xl" />
      </div>
    </Link>
  );
};

export default Nav_Logo;
