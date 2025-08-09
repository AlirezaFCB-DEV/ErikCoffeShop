import Footer from "../../Components/Footer/Footer";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import Communication from "../../Components/Contact/Communication/Communication";
import { FaMapLocationDot } from "react-icons/fa6";
import Input_Box from "../../Components/Contact/Input_Box/Input_Box";
import Short_Header from "../../Components/Short_Header/Short_Header";
import Button from "../../Components/Button/Button";

const Contact = () => {
  return (
    <>
      <div className="container">
        <Short_Header />
      </div>

      <main className="border-stroke border-2 rounded-2xl py-8">
        <div className="container mx-auto flex flex-col gap-10">
          <div className="flex gap-20 max-sm:flex-col-reverse max-sm:gap-10">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <div className="flex items-end gap-2 font-morabba-bold max-sm:hidden">
                  <h1 className="text-6xl">تماس با</h1>
                  <span className="text-2xl text-concat-icon">قهوه اریک</span>
                </div>
                <div className="text-xl flex flex-col gap-4 text-wrap">
                  <p>
                    کاربر گرامی قهوه اریک؛ باعث افتخار ماست تا نظرات خود را با
                    ما از طریق این فرم به اشتراک بگذارید.
                  </p>
                  <p className="max-w-150 text-md">
                    جهت اعلام شکایت، نظر، انتقاد و پیشنهاد در مورد سرویس‌دهی
                    وب‌سایت می‌توانید با شماره تلفن 09394785984 تماس بگیرید یا
                    از طریق فرم زیر موضوع موردنظر را با ما در میان بگذارید.
                  </p>
                </div>
              </div>
              <form action="#" className="flex flex-col gap-4">
                <h2 className="text-stone-800 font-iran-yekan-bold text-xl">
                  تماس با قهوه اریک
                </h2>
                <div className="flex flex-col gap-4">
                  <Input_Box input_id="username" label_val="نام و نام‌خانوادگی">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="نام و نام‌خانوادگی"
                      className="contact_form_inp"
                    />
                  </Input_Box>
                  <Input_Box input_id="subject" label_val="موضوع">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="موضوع"
                      className="contact_form_inp"
                    />
                  </Input_Box>
                  <Input_Box input_id="user_email" label_val="ایمیل">
                    <input
                      type="email"
                      id="user_email"
                      name="email"
                      placeholder="example@gmail.com"
                      className="contact_form_inp"
                    />
                  </Input_Box>
                  <Input_Box input_id="user_tel" label_val="شماره تلفن">
                    <input
                      type="tel"
                      id="user_tel"
                      name="tel"
                      placeholder="۰۹۱۲۳۴۱۲۳۴"
                      className="contact_form_inp"
                    />
                  </Input_Box>
                  <Input_Box input_id="user_details" label_val="توضیحات">
                    <textarea
                      name="details"
                      id="user_details"
                      placeholder="چیزی بنویسید:"
                      className="contact_form_inp min-h-50"
                    ></textarea>
                  </Input_Box>
                  <Button type="submit" className="bg-primary p-4 rounded-2xl text-xl text-white cursor-pointer hover:scale-95 transition-transform">
                      ارسال
                  </Button>
                </div>
              </form>
            </div>
            <div className="flex-1">
              <img src="/images/virtual-assistant-1.png" alt="تماس با ما" />

              <div className="flex flex-col gap-4">
                <h5 className="text-3xl">راه های ارتباطی</h5>

                <Communication
                  title="تلفن پشتیبانی"
                  title_icon={<MdPhoneInTalk className="communication_icon" />}
                >
                  <span className="communication_children">۰۲۱-۵۵۸۱۱۲۴۲</span>
                  <span className="communication_children">۰۹۳۹۴۷۸۵۹۸۴</span>
                  <span className="communication_children">۰۹۹۰۹۲۹۶۴۱۲</span>
                </Communication>
                <Communication
                  title="ایمیل"
                  title_icon={<MdEmail className="communication_icon" />}
                >
                  <span className="communication_children">
                    info@erick.cafe
                  </span>
                </Communication>
                <Communication
                  title="دفتر مرکزی تهران"
                  title_icon={
                    <FaMapLocationDot className="communication_icon" />
                  }
                >
                  <span className="communication_children">
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
