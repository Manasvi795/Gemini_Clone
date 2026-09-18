import Background from "./components/Background";
import QueryBar from "./components/QueryBar";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0e0e0e] text-[#e3e3e3]">
      <Background />
      <h1 className="absolute left-1/2 top-1/2 md:top-[32%] z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-3xl font-medium text-[#e3e3e3]">
        Let's jump in, Manasvi
      </h1>
      <div className="relative z-20 flex min-h-screen items-end justify-center px-3 pb-6  md:items-center md:px-4 md:pb-0">
        <QueryBar />
      </div>
    </div>
  );
}

export default App;
