import { IoHome } from "react-icons/io5";
import HeaderTop from "../../Components/Header/HeaderTop/HeaderTop";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import Service from "../../Components/Service/Service";
import { FaMoneyBill1Wave, FaTruckFast } from "react-icons/fa6";
import { BsBoxFill } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdMergeType, MdPhoneInTalk, MdWork } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { RxValue } from "react-icons/rx";
import { GoPackage } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";

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
        <section className="flex justify-between">
          <div></div>
          <div>
            <div>
              <div>
                <h1>دانه قهوه باکسی‌برند Boxillian</h1>
                <p>دانه قهوه | برند‌:‌Boxillian</p>
              </div>
              <div>
                <h3>ویژگی های محصول</h3>
                <ul>
                  <li>
                    <GiMaterialsScience />
                    <span>جنس محصول:</span>
                    <span>پودر قهوه</span>
                  </li>
                  <li>
                    <MdWork />
                    <span>کارایی:</span>
                    <span>استفاده روزمره</span>
                  </li>
                  <li>
                    <RxValue />
                    <span>اندازه:</span>
                    <span>۵۰۰ گرم</span>
                  </li>
                  <li>
                    <MdMergeType />
                    <span>نوع محصول:</span>
                    <span>روبوستا</span>
                  </li>
                  <li>
                    <GoPackage />
                    <span>نوع بسته بندی:</span>
                    <span>کاغذی</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3>یک گزینه‌را انتخاب کنید:</h3>
                <div>
                  <span>مقدار:</span>
                  <div>
                    <span>۱کیلوگرم</span>
                    <FaChevronDown />
                    <div className="invisible"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>
                ۲۴۰،۰۰۰<span>تومان</span>
              </h2>

              <div>
                <div>
                  <button>+</button>
                  <span>۱</span>
                  <button>-</button>
                </div>
                <button>افزودن به سبد خرید</button>
              </div>
            </div>
          </div>
          <div className="services-alignment">
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
    </>
  );
};

export default Cart;
