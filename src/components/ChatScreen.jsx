import useChat from "../Context/useChat";

function ChatScreen() {
  const { messages, loading } = useChat();

  if (messages.length === 0) {
    return null;
  }

  return (
    <main className="absolute inset-0 z-10 overflow-y-auto bg-black">
      <div className="mx-auto w-full max-w-4xl px-4 pb-36 pt-24 sm:px-6 md:px-8">
        {messages.map((message, index) => (
          <div key={index} className="mb-10">
            {message.role === "user" ? (
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-[24px] bg-[#2f2f2f] px-5 py-3 text-[15px] leading-6 text-[#e3e3e3]">
                  {message.text}
                </div>
              </div>
            ) : (
              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center"></div>

                <div className="min-w-0 max-w-[90%] text-[15px] leading-7 text-[#e3e3e3]">
                  {message.text}
                </div>
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="mb-10 flex gap-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center"></div>

            <div className="flex items-center gap-1 pt-2">
              <span className="h-2 w-2 animate-bounce rounded-full bg-[#9aa0a6]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-[#9aa0a6] [animation-delay:150ms]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-[#9aa0a6] [animation-delay:300ms]" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default ChatScreen;
