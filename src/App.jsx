import Background from "./components/Background";
import QueryBar from "./components/QueryBar";
import ChatScreen from "./components/ChatScreen";
import useChat from "./Context/useChat";
import useTheme from "./Context/useTheme";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function App() {
  const { messages } = useChat();
  const { darkMode, toggleTheme } = useTheme();

  const chatStarted = messages.length > 0;

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden ${
        darkMode ? "bg-black text-[#e3e3e3]" : "bg-white text-[#202124]"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`fixed right-5 top-5 z-50 rounded-full p-3 ${
          darkMode ? "bg-[#2f2f2f] text-white" : "bg-[#f1f3f4] text-[#202124]"
        }`}
      >
        {darkMode ? <MdDarkMode /> : <MdLightMode />}
      </button>
      <Background />
      {!chatStarted && (
        <h1
          className={`absolute left-1/2 top-1/2 md:top-[32%] z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-3xl font-medium ${darkMode ? " text-[#e3e3e3]" : "text-[#202124]"}`}
        >
          Let's jump in, Manasvi
        </h1>
      )}
      <ChatScreen />
      {chatStarted ? (
        <div
          className={`fixed bottom-0 left-0 right-0 z-30 px-3 pb-5 pt-8  ${darkMode ? "bg-black" : "bg-white"}`}
        >
          <div className="mx-auto flex w-full max-w-4xl justify-center">
            <QueryBar />
          </div>
        </div>
      ) : (
        <div className="relative z-20 flex min-h-screen items-end justify-center px-3 pb-6 md:items-center md:px-4 md:pb-0">
          <QueryBar />
        </div>
      )}
    </div>
  );
}

export default App;
