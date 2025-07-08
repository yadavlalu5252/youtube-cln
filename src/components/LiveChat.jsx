import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // Api Polling
      //   console.log("This is Awesome");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
    <div className="ml-2 p-2 border border-black w-full h-[360px] bg-slate-100 overflow-y-scroll flex flex-col-reverse">
      <div>{chatMessage.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
      </div>
    </div>
    <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=> {
        e.preventDefault();
        dispatch(addMessage({
            name: "Lalu Yadav",
            message: liveMessage
        }));
        setLiveMessage("");
    }}>
        <input type="text" className="w-3/4 border border-slate-600" 
        value={liveMessage}
        onChange={(e)=> {
            setLiveMessage(e.target.value);
        }}/>
        <button className="px-2 mx-2 bg-green-100">Send</button>
    </form>
    </>
  );
};

export default LiveChat;
