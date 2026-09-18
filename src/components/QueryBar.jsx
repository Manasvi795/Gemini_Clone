import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdMic } from "react-icons/io";

function QueryBar() {
  const [query, setQuery] = useState("");
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
      <button
        type="button"
        className="flex h-9 w-9 shrink-0 items-center rounded-full text-[#c4c7c5] hover:bg-white/10"
      >
        <IoIosArrowUp size={18} />
      </button>

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
