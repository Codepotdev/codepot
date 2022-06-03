const Sidenav = () => {
  return (
    <nav className="flex-col h-full bg-slate-500 p-6 hidden lg:block">
      <div className="text-slate-200 border-slate-400 hover:text-white hover:border-white p-1 m-1">Popular</div>
      <div className="text-slate-200 border-slate-400 hover:text-white hover:border-white p-1 m-1">Most upvoted</div>
      <div className="text-slate-200 border-slate-400 hover:text-white hover:border-white p-1 m-1">Best discussions</div>
      <div className="text-slate-200 border-slate-400 hover:text-white hover:border-white p-1 m-1">Search</div>
    </nav>
  );
};

export default Sidenav;
