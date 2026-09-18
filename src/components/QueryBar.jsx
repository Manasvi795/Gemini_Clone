import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowUpOutline } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import useChat from "../Context/useChat";
import useTheme from "../Context/useTheme";

function QueryBar() {
  const [query, setQuery] = useState("");
  const [modelOpen, setModelOpen] = useState(false);
  const [selectModel, setSelectModel] = useState("Gemini Flash");

  const { sendMessage } = useChat();
  const { darkMode } = useTheme();

  const models = ["3.5 Flash-Lite", "3.6 Flash", "3.1 Pro"];

  const handleSubmit = async () => {
    if (!query.trim()) return;
    await sendMessage(query);
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div
      className={`relative flex items-center w-full max-w-3xl min-w-0 h-16 ${darkMode ? "bg-[#1f1f1f] text-[#e3e3e3]" : "bg-[#f1f3f4] text-[#1f1f1f]"} px-6 sm:px-6 rounded-full`}
    >
      <button
        type="button"
        className={`flex h-9 w-9 shrink-0 rounded-full items-center justify-center cursor-pointer ${darkMode ? "text-[#c4c7c5] hover:bg-white/10" : "text-[#5f6368] hover:bg-black/5"}`}
      >
        <FaPlus size={18} />
      </button>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask Gemini"
        className={`ml-1 min-w-0 flex-1 bg-transparent h-10 border-none outline-none ${darkMode ? "text-[#e3e3e3] placeholder:text-[#9aa0a6]" : "text-[#202124] placeholder:text-[#5f6368]"}`}
      />
      <div className="fixed left-3 top-3 z-50 md:static md:z-auto">
        <button
          type="button"
          onClick={() => setModelOpen(!modelOpen)}
          className="flex h-9 shrink-0 items-center justify-center  rounded-full px-2 sm:px-3 text-[#c4c7c5] hover:bg-white/10 cursor-pointer"
        >
          <span className="text-xs whitespace-nowrap">
            <span
              className={`md:hidden ${darkMode ? "text-[#e3e3e3]" : "text-[#1f1f1f]"}`}
            >
              Gemini{" "}
            </span>
            {selectModel}
          </span>
          <IoIosArrowDown size={18} />
        </button>
        {modelOpen && (
          <div
            className={`absolute right--1 top-14 z-50 w-40 rounded-xl p-1 shadow-lg ${darkMode ? "bg-[#2b2b2b]" : "bg-white border border-[#ffffff]"}`}
          >
            {models.map((model) => (
              <button
                key={model}
                type="button"
                onClick={() => {
                  setSelectModel(model);
                  setModelOpen(false);
                }}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                  selectModel === model
                    ? darkMode
                      ? "bg-white/10 text-white"
                      : "bg-[#e8f0fe] text-[#174ea6]"
                    : darkMode
                      ? "text-[#c4c7c5] hover:bg-white/10"
                      : "text-[#5f6368] hover:bg-black/5"
                }`}
              >
                {model}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        type="button"
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full cursor-pointer ${darkMode ? "text-[#c4c7c5] hover:bg-white/10" : "text-[#5f6368] hover:bg-black/5"}`}
      >
        <IoMdMic size={18} />
      </button>

      {query.trim() && (
        <button
          type="button"
          onClick={handleSubmit}
          className={`flex h-10 w-10 items-center justify-center rounded-full cursor-pointer ${darkMode ? "bg-[#1851ad] text-white hover:bg-[#2865c7]" : "bg-[#a8c7fa] text-[#174ea6] hover:bg-[#8ab4f8]"}`}
        >
          <IoArrowUpOutline size={18} />
        </button>
      )}
    </div>
  );
}

export default QueryBar;
