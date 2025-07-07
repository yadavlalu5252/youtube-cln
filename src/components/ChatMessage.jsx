import { FaUser } from "react-icons/fa";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex shadow-sm ">
      <div className="h-8 col-span-1">
        <FaUser className="mt-1"/>
      </div>
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
