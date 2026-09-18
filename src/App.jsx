import Background from "./components/Background";
import QueryBar from "./components/QueryBar";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0e0e0e] text-[#e3e3e3]">
      <Background />
      <div className="flex min-h-screen items-center justify-center px-4">
        <QueryBar />
      </div>
    </div>
  );
}

export default App;
