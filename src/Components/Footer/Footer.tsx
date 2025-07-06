import { ImLeaf } from "react-icons/im";
import { BsTelephone } from "react-icons/bs";
import { IoMdLocate } from "react-icons/io";
import img1 from "../../../public/images/footer/img1.png";
import img2 from "../../../public/images/footer/img2.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { PiFacebookLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="relative mt-92">
      <footer className="  text-white flex flex-col justify-center items-center text-center   bg-txt  w-full  px-2 py-8">
        <div className="flex flex-col justify-center items-center m-2">
          <h1 className="font-morabba-bold text-4xl  flex">
            <span className="z-10">اریک کافه</span>
            <ImLeaf className="text-green-600 text-2xl rotate-y-180  left-8 " />
          </h1>
          <p>
            لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده
            <br /> از آن متن تستی مینویسند!
          </p>
        </div>
        <div className="border-b-1 border-white p-4">
          <ul className="flex justify-around items-center text-center m-2">
            <li>دسته بندی کلی یک</li>
            <li>دسته بندی کلی یک</li>
            <li>دسته بندی کلی یک</li>
            <li>دسته بندی کلی یک</li>
            <li>دسته بندی کلی یک</li>
            <li>دسته بندی کلی یک</li>
          </ul>
        </div>
        <div className="w-full  flex justify-around items-center text-center">
          <div className="flex flex-col  items-start">
            <a
              href="#"
              className="flex justify-center items-center text-center cursor-pointer m-2"
            >
              <span className="p-2 bg-[#ffffff1a] rounded-4xl ">
                <BsTelephone />
              </span>
              123232434
              <span className="text-primary">-021</span>
            </a>
            <a
              href="#"
              className="flex justify-center items-center text-center cursor-pointer  m-2"
            >
              <span className="p-2 bg-[#ffffff1a] rounded-4xl ">
                <IoMdLocate />
              </span>
              تهران خیابان تهرانی کوچه تهران پلاک ۱۲
            </a>
          </div>
          <div className="flex justify-between">
            <img src={img1} alt="عکس" className="w-[100px]" />
            <img src={img2} alt="عکس" className="w-[100px]" />
          </div>
        </div>
      </footer>
      <div className="bg-[#1A1613] w-full px-8 py-4 m-0 text-white flex justify-between  items-center text-center">
        <p className="flex justify-center items-center text-center">
          <span className="text-2xl p-2">&copy;</span>
          تمام حقوق این وب سایت متعلق به قهوه اریک میباشد
        </p>
        <div className="flex justify-around items-center text-center ">
          <a href="#" className="p-2 text-2xl">
            <AiOutlineInstagram />
          </a>
          <a href="#" className="p-2 text-2xl">
            <FaWhatsapp />
          </a>
          <a href="#" className="p-2 text-2xl">
            <PiFacebookLogo />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
