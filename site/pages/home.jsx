import Grid from "@components/grid/Grid";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 m-4 md:grid-cols-2">
        <div className="text-color-default prose-default">
          <h1 className="text-color-primary">
            Contribute, follow latest trends and learn.
          </h1>
          <h2 className="text-color-default">
            Expand your opportunities with us.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
            nulla! Sequi quas numquam dolore nobis nam possimus, adipisci sed
            est itaque, saepe eaque illum, a veritatis deleniti. Neque, a
            cupiditate.
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-3 marker:text-color-primary">
            <button className="button-primary m-4 rounded-full p-2">
              Contributor Dashboard
            </button>
            <button className="button-primary m-4 rounded-full p-2">
              Trends Dashboard
            </button>
            <button className="button-primary m-4 rounded-full p-2">
              Learn Dashboard
            </button>
          </div>
        </div>
      </div>
      {/* <Grid gridType="cols" gridSize="5"></Grid> */}
    </>
  );
}
