
import type CommunicationItems from "../../../Types/Communication.types";

type CommunicationProps = CommunicationItems;

const Communication = ({ children, title, title_icon }: CommunicationProps) => {
  return (
    <div>
      <h6>
        {title}:{title_icon}
      </h6>
      {children}
    </div>
  );
};

export default Communication;
