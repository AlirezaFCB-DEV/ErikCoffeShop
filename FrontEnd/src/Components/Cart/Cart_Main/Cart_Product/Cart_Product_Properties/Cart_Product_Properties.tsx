import { MdMergeType, MdWork } from "react-icons/md";
import { RxValue } from "react-icons/rx";
import { GiMaterialsScience } from "react-icons/gi";
import { GoPackage } from "react-icons/go";

const Cart_Product_Properties = () => {
  return (
    <ul className="flex  flex-col gap-4 max-lg:gap-2 max-md:gap-4">
      <li className="product-properties">
        <GiMaterialsScience className="text-xl max-lg:text-lg max-md:text-2xl max-sm:text-lg" />
        <span className="text-sec-text text-sm max-md:text-base max-sm:text-sm">جنس محصول:</span>
        <span className="text-sm max-md:text-base max-sm:text-sm">پودر قهوه</span>
      </li>
      <li className="product-properties max-sm:hidden">
        <MdWork className="text-xl max-lg:text-lg max-md:text-2xl max-sm:text-lg" />
        <span className="text-sec-text text-sm max-md:text-base max-sm:text-sm">کارایی:</span>
        <span className="text-sm max-md:text-base max-sm:text-sm">استفاده روزمره</span>
      </li>
      <li className="product-properties">
        <RxValue className="text-xl max-lg:text-lg max-md:text-2xl max-sm:text-lg" />
        <span className="text-sec-text text-sm max-md:text-base max-sm:text-sm">اندازه:</span>
        <span className="text-sm max-md:text-base max-sm:text-sm">۵۰۰ گرم</span>
      </li>
      <li className="product-properties">
        <MdMergeType className="text-xl max-lg:text-lg max-md:text-2xl max-sm:text-lg" />
        <span className="text-sec-text text-sm max-md:text-base max-sm:text-sm">نوع محصول:</span>
        <span className="text-sm max-md:text-base max-sm:text-sm">روبوستا</span>
      </li>
      <li className="product-properties max-sm:hidden">
        <GoPackage className="text-xl max-lg:text-lg max-md:text-2xl max-sm:text-lg" />
        <span className="text-sec-text text-sm max-md:text-base max-sm:text-sm">نوع بسته بندی:</span>
        <span className="text-sm max-md:text-base max-sm:text-sm">کاغذی</span>
      </li>
    </ul>
  );
};

export default Cart_Product_Properties;
