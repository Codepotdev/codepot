export default function Filters() {
  return (
    <div className="flex my-6">
      <div className="">
        <span className="font-semibold border-b-2 p-2  cursor-pointer">
          Trending
        </span>
        <span className="ml-2">|</span>
        <span className="mx-2 cursor-pointer p-2">Help Wanted</span>
        <span className="mr-2">|</span>
        <span className="cursor-pointer p-2">Stackoverflow</span>
      </div>
    </div>
  );
}
