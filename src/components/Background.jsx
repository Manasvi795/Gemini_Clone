function Background() {
  return (
    <div className="fixed inset-0 z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[48%] h-[400px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1f3891] opacity-70 blur-[150px] max-sm:top-[85%] max-sm:h-[320px]  max-sm:w-[650px] max-sm:blur-[120px] max-md:top-[85%] max-md:h-[350px]  max-md:w-[750px] max-md:blur-[130px] max-lg:top-[55%] max-lg:h-[420px] max-lg:w-[1000px] max-lg:blur-[160px]" />
    </div>
  );
}

export default Background;
