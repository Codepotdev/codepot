const Sidenav = () => {
  return (
      <aside className="w-64 h-full py-4 \px-3 bg-gray-800">
        <div className="text-slate-200 border-slate-400 hover:tex hover:border-white p-1 m-1">
          Popular
        </div>
        <div className="text-slate-200 border-slate-400 hover:text-white hover:border-white p-1 m-1">
          Most upvoted
        </div>
        <div className="text-slate-200 border-slate-400 hover:text-white hover:border-white p-1 m-1">
          Best discussions
        </div>
        <div className="text-slate-200 border-slate-400 hover:text-white hover:border-white p-1 m-1">
          Search
        </div>
      </aside>
  );
};

export default Sidenav;
