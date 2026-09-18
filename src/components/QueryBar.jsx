import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMic } from "react-icons/io";

function QueryBar() {
  const [query, setQuery] = useState("");
  const [modelOpen, setModelOpen] = useState(false);
  const [selectModel, setSelectModel] = useState("Gemini Flash");

  const models = ["3.5 Flash-Lite", "3.6 Flash", "3.1 Pro"];

  const handleSubmit = () => {
    if (!query.trim()) return;
    console.log("Submitted:", query);
    setQuery("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="flex items-center w-full max-w-3xl h-16 bg-[#1f1f1f] px-6 rounded-full">
      <button
        type="button"
        className="flex h-9 w-9 shrink-0 items-center justify-center text-[#c4c7c5] hover:bg-white/10"
      >
        <FaPlus size={18} />
      </button>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask Gemini"
        className="ml-1 flex-1 bg-transparent text-[#c4c7c5] placeholder:text-[#9aa0a6] h-10 border-none outline-none"
      />
      <div className="relative">
        <button
          type="button"
          onClick={() => setModelOpen(!modelOpen)}
          className="flex h-9 shrink-0 items-center gap-1 rounded-full  px-2 text-[#c4c7c5] hover:bg-white/10"
        >
          <span className="text-sm">{selectModel}</span>
          <IoIosArrowDown size={18} />
        </button>
        {modelOpen && (
          <div className="absolute right-0 top-11 z-50 w-40 rounded-xl bg-[#2b2b2b] p-1 shadow-lg">
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
                    ? "bg-white/10 text-white"
                    : "text-[#c4c7c5] hover:bg-white/10"
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
        className="flex h-9 w-9 shrink-0 items-center rounded-full text-[#c4c7c5] hover:bg-white/10"
      >
        <IoMdMic size={18} />
      </button>
    </div>
  );
}

export default QueryBar;
