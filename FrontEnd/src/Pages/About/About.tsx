import Footer from "../../Components/Footer/Footer";
import Short_Header from "../../Components/Short_Header/Short_Header";

const About = () => {
  return (
    <>
      <div className="container flex flex-col">
        <Short_Header />
        <main className="flex items-center gap-16 max-2xl:mt-8 flex-wrap max-lg:flex-col-reverse">
          <div className="flex-2 max-xl:flex-2 font-iran-yekan text-lg">
            <div className="flex font-iran-yekan-bold text-stone-600 max-md:text-base">
              <h2 className="">قهوه اِریک</h2>
              <p className="">، فروشگاه اینترنتی تجهیزات قهوه و لوازم کافی شاپ</p>
            </div>
            <span className="text-4xl">---</span>
            <div className="flex text-sm text-nowrap max-xl:text-wrap">
              <p>
                فروشگاه اینترنتی قهوه اِریک ،خرید اینترنتی آسان و مطمئن با
                بهترین قیمت
              </p>
              <p className="font-iran-yekan-bold">
                ،خرید اینترنتی آسان و مطمئن با بهترین قیمت
              </p>
            </div>
            <span className="text-4xl">---</span>
            <p>
              قهوه اِریک ، فروشگاه اینترنتی تجهیزات قهوه و لوازم کافی شاپ ___
              فروشگاه اینترنتی قهوه اِریک ،خرید اینترنتی آسان و مطمئن با بهترین
              قیمت ___ فروشگاه اینترنتی قهوه اِریک با عرضه بهترین برند های
              دستگاه های قهوه ساز ، لوازم کافی شاپ و … امکان خرید اینترنتی از
              مجموعه کاملی از کالاهای مورد نیاز یک کافه را فراهم آورده است. و
              شما در فروشگاه اینترنتی قهوه اِریک به آسانی به مجموعه کاملی از
              برندها و محصولات مرتبط با کافی شاپ دسترسی خواهید پیدا کرد و هم
              چنین تنوعی کامل از دستگاه های قهوه ساز خانگی و محصولات مرتبط با آن
              را مشاهده خواهید کرد . با خرید آنلاین از فروشگاه اینترنتی قهوه
              اِریک با ارائه توضیحات کارشناسی شده و دقیق درباره ویژگی های هر
              کالا در وب سایت، مشاوره و راهنمای خرید، تضمین اصالت کالا و بهترین
              قیمت در فروشگاه قهوه اِریک ، این امکان فراهم آمده است به راحتی و
              با یک خرید اینترنتی لذت بخش، مطمئن و آسان کالای مورد نظر خود را
              تهیه کرده و به سرعت در سراسر ایران دریافت نمایید و با استفاده از
              بهترین های لوازم کافی شاپ از قهوه خود لذت ببرید.
            </p>
          </div>
          <div className="flex-2 ">
            <img src="/images/About-us-page-rafiki.jpg" alt="تماس با ما" />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default About;
