import { FaPlus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdMic } from "react-icons/io";

function QueryBar() {
  return (
    <div className="flex items-center w-full max-w-[768px] h-[64px] bg-[#1f1f1f] px-6 rounded-full">
      <button className="flex h-9 w-9 shrink-0 items-center justify-center text-[#c4c7c5] hover:bg-white/10">
        <FaPlus size={24} />
      </button>
      <textarea
        rows="1"
        className="ml-1 flex resize-none overflow-hidden text-[#c4c7c5]"
      />
      <button className="flex h-9 w-9 shrink-0 items-center gap-7 px-3 py-2 rounded-full text-[#c4c7c5] hover:bg-white/10">
        <IoIosArrowUp size={24} />
      </button>

      <button className="flex h-9 w-9 shrink-0 items-center gap-2 px-3 py-2 rounded-full text-[#c4c7c5] hover:bg-white/10">
        <IoMdMic size={24} />
      </button>
    </div>
  );
}

export default QueryBar;
