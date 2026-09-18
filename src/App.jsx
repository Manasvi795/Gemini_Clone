import Background from "./components/Background";
import QueryBar from "./components/QueryBar";
import ChatScreen from "./components/ChatScreen";
import useChat from "./Context/useChat";

function App() {
  const { messages } = useChat();
  const chatStarted = messages.length > 0;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0e0e0e] text-[#e3e3e3]">
      <Background />
      {!chatStarted && (
        <h1 className="absolute left-1/2 top-1/2 md:top-[32%] z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-3xl font-medium text-[#e3e3e3]">
          Let's jump in, Manasvi
        </h1>
      )}
      <ChatScreen />
      {chatStarted ? (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-black px-3 pb-5 pt-4">
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
