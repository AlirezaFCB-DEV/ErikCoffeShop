import { BsTelephone } from "react-icons/bs";
import Coffee_Logo from "../../Components/Coffee_Logo/Coffee_Logo";
import Contact_Us_Phone from "../../Components/Contact_Us_Phone/Contact_Us_Phone";
import Logo from "../../Components/Logo/Logo";
import Wave from "../../Components/Wave/Wave";
import Button from "../../Components/Button/Button";

const Account = () => {
  return (
    <div className="h-screen  bg-[#FFF8F5] relative">
      <header className="w-4/5 h-[15%] flex justify-between items-center m-auto max-sm:justify-center">
        <Logo />
        <Contact_Us_Phone />
      </header>
      <main className="w-full h-[85%] flex justify-center ">
        <form action="#" className="flex flex-col items-center gap-4 z-10">
          <div className="flex  items-center mt-16">
            <Coffee_Logo size="large" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-morabba text-3xl max-sm:text-2xl">ثبت نام / ورود</h1>
            <p className="text-stone-400 max-sm:text-sm">
              برای ورود یا ثبت نام شماره تماس خود را وارد کنید!
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="tel_inp" className="text-txt">
              شماره تماس
            </label>

            <div className="flex w-full bg-white max-sm:opacity-80 p-3 items-center rounded-xl gap-4 border-2 border-[#9e624c48] has-[input:focus]:border-primary tel_inp_parent transition-colors">
              <input
                type="tel"
                maxLength={11}
                id="tel_inp"
                className="w-full outline-none font-iran-yekan-bold caret-primary text-xl"
              />
              <BsTelephone className="text-2xl text-[#9e624c48] tel_inp_icon transition-colors" />
            </div>
          </div>
          <Button className="bg-primary p-3 w-full text-xl text-white rounded-xl cursor-pointer max-sm:opacity-90" type="submit">ثبت نام / ورود</Button>
        </form>
      </main>
      <footer className="z-0 absolute bottom-0  w-full">
        <Wave className="w-full  overflow-hidden"></Wave>
      </footer>
    </div>
  );
};

export default Account;
