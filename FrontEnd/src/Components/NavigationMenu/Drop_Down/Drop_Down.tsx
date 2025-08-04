import { Link } from "react-router-dom";

const Drop_Down = () => {
  return (
    <div className="absolute w-[70%] z-20 h-90 -right-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 -bottom-90 rounded-3xl bg-white border-2 border-stroke pl-4 text-black flex overflow-hidden transition-all duration-300 group-hover:-right-30">
      <ul className="flex flex-col flex-1 h-full border-l-2 border-stroke">
        <li className="drop_down_main_category">
          <div className="drop_down_main_category_icon_parent">
            <img
              src="/images/CategoryImages/image2.svg"
              alt="آیکون دسته بندی"
              className="drop_down_main_category_icon"
            />
          </div>
          <h2>تجهیزات قهوه</h2>
        </li>
        <li className="drop_down_main_category">
          <div className="drop_down_main_category_icon_parent">
            <img
              src="/images/CategoryImages/image2.svg"
              alt="آیکون دسته بندی"
              className="drop_down_main_category_icon"
            />
          </div>
          <h2>تجهیزات قهوه</h2>
        </li>
        <li className="drop_down_main_category">
          <div className="drop_down_main_category_icon_parent">
            <img
              src="/images/CategoryImages/image2.svg"
              alt="آیکون دسته بندی"
              className="drop_down_main_category_icon"
            />
          </div>
          <h2>تجهیزات قهوه</h2>
        </li>
      </ul>
      <div className="flex-3 p-8 overflow-y-scroll flex flex-wrap gap-x-16 gap-y-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-secondary size-2 rounded-full"></div>
            <h3 className="font-morabba-bold">
              <Link className="" to="products">
                قهوه ساز
              </Link>
            </h3>
          </div>
          <ul className="flex flex-col text-sec-text gap-4">
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-secondary size-2 rounded-full"></div>
            <h3 className="font-morabba-bold">
              <Link className="" to="products">
                قهوه ساز
              </Link>
            </h3>
          </div>
          <ul className="flex flex-col text-sec-text gap-4">
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-secondary size-2 rounded-full"></div>
            <h3 className="font-morabba-bold">
              <Link className="" to="products">
                قهوه ساز
              </Link>
            </h3>
          </div>
          <ul className="flex flex-col text-sec-text gap-4">
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-secondary size-2 rounded-full"></div>
            <h3 className="font-morabba-bold">
              <Link className="" to="products">
                قهوه ساز
              </Link>
            </h3>
          </div>
          <ul className="flex flex-col text-sec-text gap-4">
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-secondary size-2 rounded-full"></div>
            <h3 className="font-morabba-bold">
              <Link className="" to="products">
                قهوه ساز
              </Link>
            </h3>
          </div>
          <ul className="flex flex-col text-sec-text gap-4">
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-secondary size-2 rounded-full"></div>
            <h3 className="font-morabba-bold">
              <Link className="" to="products">
                قهوه ساز
              </Link>
            </h3>
          </div>
          <ul className="flex flex-col text-sec-text gap-4">
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="products/product-2"
              >
                اسپرسو ساز خانگی
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drop_Down;
