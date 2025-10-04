import "./Wave.css"; // فایل CSS برای keyframes

interface Wave_Props {
  className?: string;
}

const Wave = ({ className }: Wave_Props) => {
  return (
    <div className={className}>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition h-[400px] duration-300 ease-in-out delay-150 absolute bottom-0"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,400 L 0,150 C 175.33333333333331,113.73333333333333 350.66666666666663,77.46666666666667 531,99 C 711.3333333333334,120.53333333333333 896.6666666666667,199.86666666666667 1049,243 C 1201.3333333333333,286.1333333333333 1320.6666666666665,293.06666666666666 1440,300 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#9e624c"
          fillOpacity="0.2"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>

      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150 h-[400px]"
        preserveAspectRatio="none"

      >
        <path
          d="M 0,400 L 0,225 C 127.33333333333331,267.4 254.66666666666663,309.8 436,287 C 617.3333333333334,264.2 852.6666666666667,176.2 1029,130 C 1205.3333333333333,83.80000000000001 1322.6666666666665,79.4 1440,75 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#9e624c"
          fillOpacity="0.3"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
