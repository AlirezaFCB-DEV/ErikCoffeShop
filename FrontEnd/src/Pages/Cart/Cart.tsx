import { IoHome } from "react-icons/io5";
import HeaderTop from "../../Components/Header/HeaderTop/HeaderTop";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import Service from "../../Components/Service/Service";
import { FaMoneyBill1Wave, FaTruckFast } from "react-icons/fa6";
import { BsBoxFill } from "react-icons/bs";
import { TfiFullscreen, TfiHeadphoneAlt } from "react-icons/tfi";
import { MdMergeType, MdPhoneInTalk, MdWork } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { RxValue } from "react-icons/rx";
import { GoPackage } from "react-icons/go";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import Off_Percent from "../../Components/Off_Percent/Off_Percent";
import { HiDotsHorizontal } from "react-icons/hi";
import Footer from "../../Components/Footer/Footer";

interface ProductCountBtns {
  button: React.ReactNode;
}

type CountBtnsArr = ProductCountBtns[];

const countBtns: CountBtnsArr = [
  { button: <FaMinus className="text-lg" /> },
  { button: <FaPlus className="text-lg" /> },
];

const Cart = () => {
  return (
    <>
      <div className="container mt-4 m-auto flex flex-col gap-8 ">
        <section className="flex flex-col gap-8 relative">
          <HeaderTop leftIconRoute="/">
            <IoHome className="header-top-icon" />
          </HeaderTop>
          <NavigationMenu />
        </section>
        <section className="flex gap-6 relative items-start">
          <div className="flex-3 flex flex-col gap-16">
            <div className="flex gap-8 h-full w-full relative">
              <div className=" flex flex-2 flex-col gap-6">
                <div className="w-full flex-5 border-stroke border-2 rounded-xl p-4 relative">
                  <Off_Percent percent={20} />
                  <img
                    src="/images/Products/product1.png"
                    className="w-full max-h-100"
                    alt="محصول"
                  />
                  <button className="absolute right-4 bottom-4 bg-secondary cursor-pointer p-4 rounded-full hover:bg-primary transition-colors group">
                    <TfiFullscreen className="text-primary group-hover:text-secondary" />
                  </button>
                </div>
                <div className="flex flex-1 gap-4">
                  <div className="flex-1 flex items-center justify-center border-stroke border-2 rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <HiDotsHorizontal className="text-3xl text-sec-text" />
                  </div>
                  <div className="flex-1 flex items-center justify-center border-stroke border-2 rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <img
                      src="/images/Products/product1.png"
                      className="w-14 h-16"
                      alt="محصول"
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-center border-stroke border-2 rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <img
                      src="/images/Products/product1.png"
                      className="w-14 h-16"
                      alt="محصول"
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-center border-stroke border-2 rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <img
                      src="/images/Products/product1.png"
                      className="w-14 h-16"
                      alt="محصول"
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-center border-stroke border-2 rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <img
                      src="/images/Products/product1.png"
                      className="w-14 h-16"
                      alt="محصول"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-3  flex-col justify-between items-start">
                <div className="flex flex-col gap-6">
                  <h2 className="font-iran-yekan-bold text-2xl">
                    دانه قهوه باکسی‌برند Boxillian
                  </h2>
                  <p className="text-sm text-sec-text">
                    دانه قهوه | برند‌:‌Boxillian
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-morabba-bold">ویژگی های محصول</h3>
                  <ul className="flex  flex-col gap-6 border-r-3 border-stroke pr-4 relative">
                    <li className="product-properties">
                      <GiMaterialsScience className="text-xl" />
                      <span className="text-sec-text text-sm">جنس محصول:</span>
                      <span className="text-sm">پودر قهوه</span>
                    </li>
                    <li className="product-properties">
                      <MdWork className="text-xl" />
                      <span className="text-sec-text text-sm">کارایی:</span>
                      <span className="text-sm">استفاده روزمره</span>
                    </li>
                    <li className="product-properties">
                      <RxValue className="text-xl" />
                      <span className="text-sec-text text-sm">اندازه:</span>
                      <span className="text-sm">۵۰۰ گرم</span>
                    </li>
                    <li className="product-properties">
                      <MdMergeType className="text-xl" />
                      <span className="text-sec-text text-sm">نوع محصول:</span>
                      <span className="text-sm">روبوستا</span>
                    </li>
                    <li className="product-properties">
                      <GoPackage className="text-xl" />
                      <span className="text-sec-text text-sm">
                        نوع بسته بندی:
                      </span>
                      <span className="text-sm">کاغذی</span>
                    </li>
                    <div className="bg-primary absolute w-[3px] h-14 -right-[3px]"></div>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-morabba-bold">
                    یک گزینه‌را انتخاب کنید:
                  </h3>
                  <div className="flex gap-2 items-center">
                    <span className="text-sec-text ">مقدار:</span>
                    <div className="flex flex-col items-center border-stroke border-2 w-50 relative py-2.5 px-3 rounded-xl">
                      <span className="text-2xl">۱</span>
                      <div className="flex w-full justify-around">
                        {countBtns.map((btn) => (
                          <Button
                            className="border-stroke border-2 py-1 px-3 rounded-lg cursor-pointer group hover:border-stone-700 transition-colors"
                            key={crypto.randomUUID()}
                          >
                            {btn.button}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-full h-0.5 absolute -bottom-8 bg-stroke"></div> */}
            </div>

          </div>
          <div className="sticky top-5 services-alignment flex-1">
            <div className="services-alignment">
              <Service title="شرایط ارسال" desc="حدود ۲ الی ۶ روز کاری">
                <FaTruckFast className="service-icon" />
              </Service>
              <Service title="ضمانت کالا" desc="تا ۷ روز ضمانت عودت کالا">
                <BsBoxFill className="service-icon" />
              </Service>
              <Service title="پشتیبانی" desc="پشتیبانی ۲۴ ساعته از تلگرام">
                <TfiHeadphoneAlt className="service-icon" />
              </Service>
              <Service title="پرداخت" desc="پرداخت امن از درگاه مطمئن">
                <FaMoneyBill1Wave className="service-icon" />
              </Service>
            </div>
            <div className="border-stroke border rounded-2xl h-45 flex flex-col items-center py-4 justify-between">
              <div className="p-4 w-max rounded-full bg-secondary">
                <MdPhoneInTalk className="text-primary text-3xl" />
              </div>

              <p>نیاز به مشاوره دارید؟</p>
              <div className="flex flex-row-reverse items-center ">
                <h2 className="font-iran-yekan-bold text-primary text-3xl">
                  -۰۲۱
                </h2>
                <p className="font-iran-yekan text-xl">۱۲۳۲۳۲۴۳۴</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
