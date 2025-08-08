import Service from "./Service/Service";
import { FaMoneyBill1Wave, FaTruckFast } from "react-icons/fa6";
import { BsBoxFill } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdPhoneInTalk } from "react-icons/md";

const Cart_Services = () => {
  return (
    <div className="flex justify-between gap-8 min-h-90 max-sm:flex-col">
      <div className="services-alignment flex-1 max-sm:gap-4">
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
      <div className="border-stroke border rounded-2xl flex flex-col items-center py-4 justify-center gap-8 flex-1 min-h-full">
        <div className="p-4 w-max rounded-full bg-secondary">
          <MdPhoneInTalk className="text-primary text-3xl" />
        </div>

        <p>نیاز به مشاوره دارید؟</p>
        <div className="flex flex-row-reverse items-center ">
          <h2 className="font-iran-yekan-bold text-primary text-3xl">-۰۲۱</h2>
          <p className="font-iran-yekan text-2xl">۱۲۳۲۳۲۴۳۴</p>
        </div>
      </div>
    </div>
  );
};

export default Cart_Services;
