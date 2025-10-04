import { Link } from "react-router-dom";
import Img from "../Img/Img";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <Img src="/images/image 1.svg" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
