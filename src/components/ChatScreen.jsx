import useChat from "../Context/useChat";
import useTheme from "../Context/useTheme";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ChatScreen() {
  const { messages, loading } = useChat();
  const { darkMode } = useTheme();

  if (messages.length === 0) {
    return null;
  }

  return (
    <main
      className={`absolute inset-0 z-10 overflow-y-auto ${darkMode ? "bg-black" : "bg-white"}`}
    >
      <div className="mx-auto w-full max-w-4xl px-4 pb-36 pt-24 sm:px-6 md:px-8">
        {messages.map((message, index) => (
          <div key={index} className="mb-10">
            {message.role === "user" ? (
              <div className="flex justify-end">
                <div
                  className={`max-w-[85%] rounded-[24px] px-5 py-3 text-[15px] leading-6 ${darkMode ? "bg-[#2f2f2f] text-[#e3e3e3]" : "bg-[#e8f0fe] text-[#202124]"}`}
                >
                  {message.text}
                </div>
              </div>
            ) : (
              <div className="flex gap-4">
                <div
                  className={`min-w-0 max-w-[90%] text-[15px] ${darkMode ? "text-[#e3e3e3]" : "text-[#202124]"}`}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => (
                        <h1 className="mb-4 mt-6 text-2xl font-semibold">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="mb-3 mt-5 text-xl font-semibold">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="mb-2 mt-4 text-lg font-semibold">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="mb-4 leading-7">{children}</p>
                      ),
                      ul: ({ children }) => (
                        <ul className="mb-4 ml-6 list-disc space-y-2">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="mb-4 ml-6 list-decimal space-y-2">
                          {children}
                        </ol>
                      ),
                      strong: ({ children }) => (
                        <strong
                          className={`font-semibold ${darkMode ? "text-white" : "text-[#202124]"}`}
                        >
                          {children}
                        </strong>
                      ),
                      code: ({ children, className }) => {
                        const isCodeBlock = className?.includes("language-");
                        if (isCodeBlock)
                          return <code className={className}>{children}</code>;
                        return (
                          <code
                            className={`rounded px-1.5 py-0.5 text-sm ${darkMode ? "bg-[#2a2a2a]" : "bg-[#f1f3f4]"}`}
                          >
                            {children}
                          </code>
                        );
                      },
                      pre: ({ children }) => (
                        <pre
                          className={`mb-5 overflow-x-auto rounded-xl p-4 text-sm leading-6 ${darkMode ? "bg-[#1e1e1e]" : "bg-[#f1f3f4]"}`}
                        >
                          {children}
                        </pre>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`underline ${darkMode ? "text-[#8ab4f8]" : "text-[#174ea6]"}`}
                        >
                          {children}
                        </a>
                      ),
                      table: ({ children }) => (
                        <div className="mb-5 overflow-x-auto">
                          <table
                            className={`w-full border-collapse ${darkMode ? "text-[#e3e3e3]" : "text-[#202124]"}`}
                          >
                            {children}
                          </table>
                        </div>
                      ),
                      th: ({ children }) => (
                        <th
                          className={`border px-4 py-2 text-left ${darkMode ? "border-[#444] bg-[#252525]" : "border-[#dadce0] bg-[#f1f3f4]"}`}
                        >
                          {children}
                        </th>
                      ),
                      td: ({ children }) => (
                        <td
                          className={`border px-4 py-2 ${darkMode ? "border-[#444]" : "border-[#dadce0]"}`}
                        >
                          {children}
                        </td>
                      ),
                    }}
                  >
                    {message.text}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="mb-10 flex gap-4">
            <div className="flex items-center gap-1 pt-2">
              <span
                className={`h-2 w-2 animate-bounce rounded-full ${darkMode ? "bg-[#9aa0a6]" : "bg-[#5f6368]"}`}
              />
              <span
                className={`h-2 w-2 animate-bounce rounded-full [animation-delay:150ms] ${darkMode ? "bg-[#9aa0a6]" : "bg-[#5f6368]"}`}
              />
              <span
                className={`h-2 w-2 animate-bounce rounded-full [animation-delay:300ms] ${darkMode ? "bg-[#9aa0a6]" : "bg-[#5f6368]"}`}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default ChatScreen;
