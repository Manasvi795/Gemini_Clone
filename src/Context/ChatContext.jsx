import { createContext, useState } from "react";
import { askGemini } from "../services/api";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (query) => {
    if (!query.trim()) {
      return;
    }
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: query,
      },
    ]);
    setLoading(true);

    try {
      const response = await askGemini(query);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: response,
        },
      ]);
    } catch (error) {
      console.error("API error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Something went wrong.Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, loading }}>
      {children}
    </ChatContext.Provider>
  );
}
