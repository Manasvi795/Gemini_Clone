import { useContext } from "react";
import { ChatContext } from "./ChatContext";

function useChat() {
  return useContext(ChatContext);
}

export default useChat;
