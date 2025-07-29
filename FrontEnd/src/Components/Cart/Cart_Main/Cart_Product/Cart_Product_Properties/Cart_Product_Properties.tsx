import { MdMergeType, MdWork } from "react-icons/md";
import { RxValue } from "react-icons/rx";
import { GiMaterialsScience } from "react-icons/gi";
import { GoPackage } from "react-icons/go";

const Cart_Product_Properties = () => {
  return (
    <ul className="flex  flex-col gap-4">
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
        <span className="text-sec-text text-sm">نوع بسته بندی:</span>
        <span className="text-sm">کاغذی</span>
      </li>
    </ul>
  );
};

export default Cart_Product_Properties;
