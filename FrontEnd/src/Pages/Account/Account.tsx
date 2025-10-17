import { BsTelephone } from "react-icons/bs";
import Coffee_Logo from "../../Components/Coffee_Logo/Coffee_Logo";
import Contact_Us_Phone from "../../Components/Contact_Us_Phone/Contact_Us_Phone";
import Logo from "../../Components/Logo/Logo";
import Wave from "../../Components/Wave/Wave";
import Button from "../../Components/Button/Button";
import { useEffect, useRef, useState } from "react";

const Account = () => {
  const [is_active_code, set_is_active_code] = useState<boolean>(false);

  const code_inputs = useRef<(HTMLInputElement | null)[]>([]);

  const [code, set_code] = useState<number[] | null>(null);

  useEffect(() => {
    const random_code = Math.ceil(Math.random() * 90000) + 10000;

    const digits = random_code.toString().split("").map(Number);

    set_code(digits);
  }, []);

  return (
    <div className="h-screen  bg-[#FFF8F5] relative">
      <header className="w-4/5 h-[20%] flex justify-between items-start py-12 m-auto max-sm:justify-center">
        <Logo />
        <Contact_Us_Phone />
      </header>
      <main className="w-full min-h-[80vh] flex justify-center items-start px-4">
        <form
          action="#"
          className="flex flex-col items-center gap-6 z-10 w-full max-w-md p-6 rounded-2xl bg-transparent"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* لوگو */}
          <div className="flex items-center justify-center mb-4">
            <Coffee_Logo size="large" />
          </div>

          {/* عنوان */}
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h1 className="font-morabba text-3xl max-sm:text-2xl">
              ثبت نام / ورود
            </h1>
            <p className="text-stone-400 max-sm:text-sm">
              برای ورود یا ثبت نام شماره تماس خود را وارد کنید!
            </p>
          </div>

          {/* ورودی */}
          <div
            className={`${
              is_active_code ? "w-3/4 max-sm:w-full" : "w-full"
            } flex flex-col gap-2`}
          >
            <label
              htmlFor="tel_inp"
              className="text-txt font-iran-yekan-bold text-right"
            >
              {is_active_code ? "ورود کد" : "شماره تلفن"}
            </label>

            {is_active_code ? (
              <div className="flex justify-between gap-2" dir="ltr">
                {code?.map((_digit, index) => (
                  <div
                    className="flex-1 login_or_register_inputs_parent tel_inp_parent"
                    key={index}
                  >
                    <input
                      type="tel"
                      maxLength={1}
                      id="tel_inp"
                      ref={(el) => {
                        code_inputs.current[index] = el;
                      }}
                      className="outline-none font-iran-yekan-bold caret-primary text-xl w-full text-center"
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value && index < code_inputs.current.length - 1) {
                          code_inputs.current[index + 1]?.focus();
                        }
                      }}
                      onKeyDown={(e) => {
                        if (
                          e.key === "Backspace" &&
                          !e.currentTarget.value &&
                          index > 0
                        ) {
                          code_inputs.current[index - 1]?.focus();
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="login_or_register_inputs_parent tel_inp_parent">
                <input
                  type="tel"
                  minLength={11}
                  maxLength={11}
                  id="tel_inp"
                  className="w-full outline-none font-iran-yekan-bold caret-primary text-xl"
                />
                <BsTelephone className="text-2xl text-[#9e624c48] tel_inp_icon transition-colors" />
              </div>
            )}
          </div>

          {/* دکمه */}
          <Button
            className={`bg-primary p-3 ${
              is_active_code ? "w-3/4 max-sm:w-full" : "w-full"
            } text-xl text-white rounded-xl cursor-pointer hover:bg-[#8b5743] transition-colors`}
            type="button"
            onClick={() => set_is_active_code(!is_active_code)}
          >
            {!is_active_code ? "ثبت نام / ورود" : "تایید"}
          </Button>
        </form>
      </main>

      <footer className="z-0 absolute bottom-0  w-full">
        <Wave className="w-full  overflow-hidden"></Wave>
      </footer>
    </div>
  );
};

export default Account;
