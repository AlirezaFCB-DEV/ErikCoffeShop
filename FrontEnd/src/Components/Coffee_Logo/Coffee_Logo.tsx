import Img from "../Img/Img";

interface Coffee_Logo_Props {
    size? : "large" | "medium" 
}

const Coffee_Logo = ({size = "medium"} : Coffee_Logo_Props) => {
  return (
      <div className={`bg-secondary ${size === "medium" ? "p-3" : "p-7"} rounded-full ${size === "large" && "max-sm:p-5"}`}>
          <Img src="/images/coffee.svg" alt="image" className={`${size === "medium" ? "size-4.5" : "size-14"} ${size === "large" && "max-sm:size-10"}`} />
    </div>
  );
};

export default Coffee_Logo;
