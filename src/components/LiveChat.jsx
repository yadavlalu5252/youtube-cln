import { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
    useEffect(()=> {
       const i = setInterval(()=>{
            // Api Polling
            console.log("This is Awesome");
        },2000);
        return () => clearInterval(i);
    },[]);

    return (
        <div className="ml-2 p-2 border border-black w-full h-[360px] bg-slate-100">
            <ChatMessage name="Lalu" message="This is good" />
            <ChatMessage name="Lalu" message="This is good" />
            <ChatMessage name="Lalu" message="This is good" />
   
        </div>
    )
};

export default LiveChat;