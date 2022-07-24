const Sidenav = () => {
  return (
    <div className="w-64 h-full py-4 px-3 border-r">
      <div className="text-black border-slate-400 hover:bg-slate-200 hover:border-slate-200 p-1 m-1 cursor-pointer">
        Popular
      </div>
      <div className="text-black border-slate-400 hover:bg-slate-200 hover:border-slate-200 p-1 m-1 cursor-pointer">
        Most upvoted
      </div>
      <div className="text-black border-slate-400 hover:bg-slate-200 hover:border-slate-200 p-1 m-1 cursor-pointer">
        Best discussions
      </div>
      <div className="text-black border-slate-400 hover:bg-slate-200 hover:border-slate-200 p-1 m-1 cursor-pointer">
        Search
      </div>
    </div>
  );
};

export default Sidenav;
