import { IoHome } from "react-icons/io5";
import HeaderTop from "../../Components/Header/HeaderTop/HeaderTop";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import Footer from "../../Components/Footer/Footer";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import Communication from "../../Components/Contact/Communication/Communication";
import { FaMapLocationDot } from "react-icons/fa6";
import Input_Box from "../../Components/Contact/Input_Box/Input_Box";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto">
        <header className="flex gap-6 flex-col mt-6">
          <HeaderTop leftIconRoute="/">
            <IoHome className="header-top-icon"></IoHome>
          </HeaderTop>
          <NavigationMenu />
        </header>
      </div>

      <main className="border-stroke border-2 rounded-2xl">
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex-1">
              <div>
                <div>
                  <h1>تماس با</h1>
                  <span>قهوه اریک</span>
                </div>
                <p>
                  کاربر گرامی قهوه اریک؛ باعث افتخار ماست تا نظرات خود را با ما
                  از طریق این فرم به اشتراک بگذارید. جهت اعلام شکایت، نظر،
                  انتقاد و پیشنهاد در مورد سرویس‌دهی وب‌سایت می‌توانید با شماره
                  تلفن 09394785984 تماس بگیرید یا از طریق فرم زیر موضوع موردنظر
                  را با ما در میان بگذارید.
                </p>
              </div>
              <h2>تماس با قهوه اریک</h2>
              <form action="#">
                <Input_Box input_id="username" label_val="نام و نام‌خانوادگی">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="نام و نام‌خانوادگی"
                  />
                </Input_Box>
                <Input_Box input_id="subject" label_val="موضوع">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="موضوع"
                  />
                </Input_Box>
                <Input_Box input_id="user_email" label_val="ایمیل">
                  <input
                    type="email"
                    id="user_email"
                    name="email"
                    placeholder="example@gmail.com"
                  />
                </Input_Box>
                <Input_Box input_id="user_tel" label_val="شماره تلفن">
                  <input
                    type="tel"
                    id="user_tel"
                    name="tel"
                    placeholder="۰۹۱۲۳۴۱۲۳۴"
                  />
                </Input_Box>
                <Input_Box input_id="user_details" label_val="توضیحات">
                  <textarea
                    name="details"
                    id="user_details"
                    placeholder="چیزی بنویسید:"
                  ></textarea>
                </Input_Box>
              </form>
            </div>
            <div className="flex-1">
              <img src="/images/virtual-assistant-1.png" alt="تماس با ما" />

              <div>
                <h5>راه های ارتباطی</h5>

                <Communication
                  title="تلفن پشتیبانی"
                  title_icon={<MdPhoneInTalk />}
                >
                  <span>۰۲۱-۵۵۸۱۱۲۴۲</span>
                  <span>۰۹۳۹۴۷۸۵۹۸۴</span>
                  <span>۰۹۹۰۹۲۹۶۴۱۲</span>
                </Communication>
                <Communication title="ایمیل" title_icon={<MdEmail />}>
                  <span>info@erick.cafe</span>
                </Communication>
                <Communication
                  title="دفتر مرکزی تهران"
                  title_icon={<FaMapLocationDot />}
                >
                  <span>
                    بازار تهران،چهارراه سیروس ابتدای پانزده خرداد غربی،کوچه
                    غفاری سرپولک پلاک 148
                  </span>
                </Communication>
              </div>
            </div>
          </div>
          <iframe
            className="w-full h-100 rounded-2xl"
            loading="lazy"
            src="https://maps.google.com/maps?q=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D8%B2%D8%B9%D9%81%D8%B1%D8%A7%D9%86%DB%8C%D9%87%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D9%85%D8%B1%D8%AF%D8%A7%D9%86%DB%8C&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
            title="تهران، زعفرانیه، خیابان مردانی"
            aria-label="تهران، زعفرانیه، خیابان مردانی"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
