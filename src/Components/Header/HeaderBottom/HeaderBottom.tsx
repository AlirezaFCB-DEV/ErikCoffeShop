const HeaderBottom = () => {
  const imgArr: number[] = Array.from({ length: 20 }, (_, index) => index);

  const doubleArr : number[] = [...imgArr , ...imgArr] 

  return (
    <div className="flex p-4 bg-secondary justify-between absolute -bottom-8 left-0 w-fit gap-24 move">
      {doubleArr.map((item : number) => (
        <img key={item} src="/images/image 6.svg" alt="تبلیغ" />
      ))}
    </div>
  );
};

export default HeaderBottom;
