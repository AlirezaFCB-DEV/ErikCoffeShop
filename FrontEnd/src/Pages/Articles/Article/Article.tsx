const Article = () => {
  return (
    <div className="tutorial_page_shadow w-108 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform max-2xl:w-90 max-xl:w-70 max-lg:w-110 max-md:w-50 max-sm:w-full">
      <img src="/images/article-1.png" className="w-full h-44 object-cover" alt="" />

      <div className="p-6 flex flex-col gap-8">
        <h6 className="text-lg max-xl:text-base">
          لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی
          مینویسند!
        </h6>
        <p className="w-full text-center text-sec-text ">
          کاهش فروش گوشی ها دیگر یک خبر تکراری محسوب می شود. این موضوع در کنار
          فروش نه چندان بالای گوشی های سامسونگ و ال جی منجر به بهره گیری این ...
        </p>
      </div>
      <div className="flex items-center justify-between mt-4 p-2 text-stone-700">
        <div className="flex items-center">
          <img src="/images/av3.png" className="size-8" alt="ناشر" />
          <span>قهوه اریک</span>
        </div>

        <span>۷سال قبل</span>
      </div>
    </div>
  );
};

export default Article;
