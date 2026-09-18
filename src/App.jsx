import Background from "./components/Background";
import QueryBar from "./components/QueryBar";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0e0e0e] text-[#e3e3e3]">
      <Background />
      <div className="relative z-20 flex min-h-screen items-end justify-center px-3 pb-6  md:items-center md:px-4 md:pb-0">
        <QueryBar />
      </div>
    </div>
  );
}

export default App;
