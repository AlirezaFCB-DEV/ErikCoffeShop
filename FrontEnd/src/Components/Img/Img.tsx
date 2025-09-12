const Img = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img loading="lazy" {...props} />;
};

export default Img;
