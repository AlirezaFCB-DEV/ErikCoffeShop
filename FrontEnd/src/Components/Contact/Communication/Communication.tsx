import type CommunicationItems from "../../../Types/Communication.types";

type CommunicationProps = CommunicationItems;

const Communication = ({ children, title, title_icon }: CommunicationProps) => {
  return (
    <div>
      <h6 className="flex items-center text-sec-text">
        {title_icon}
        <span className="text-xl">{title}</span>:
      </h6>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default Communication;
