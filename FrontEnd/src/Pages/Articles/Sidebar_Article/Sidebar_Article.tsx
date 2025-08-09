const Sidebar_Article = () => {
  return (
    <div className="flex justify-between items-end px-4 py-4 relative group max-md:flex-col">
      <div className="flex items-center gap-3 max-md:flex-col max-md:w-full">
        <img
          src="/images/coffee-bean-types.png"
          className="size-20 rounded-full object-cover"
          alt=""
        />
        <h6 className="text-[#2D4974] group-hover:text-primary transition-colors text-nowrap">انواع قهوه</h6>
      </div>
      <span className="text-sec-text text-nowrap max-md:w-full max-md:text-center">شنبه ۱ دی ۱۴۰۴</span>

      <div className="absolute w-full h-0.5 bg-stroke right-0 bottom-0">
        <div className="absolute w-0 transition-all duration-200 ease-linear group-hover:w-full h-0.5 bg-primary"></div>
      </div>
    </div>
  );
};

export default Sidebar_Article;
