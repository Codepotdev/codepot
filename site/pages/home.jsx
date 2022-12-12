import Card from "@components/card/Card";
import { cardData } from "@data/data-share";

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
        <div>
          <div className="grid grid-cols-3 marker:text-color-primary p-2 ">
            <button className="button-primary m-4 rounded-full hover:button-primary-hover">
              <a href="/dashboard/contribute" className="no-underline">
                Contributor Dashboard
              </a>
            </button>
            <button className="button-primary m-4 rounded-full p-2 hover:button-primary-hover">
              <a href="/dashboard/explore" className="no-underline">
                Explore Dashboard
              </a>
            </button>
            <button className="button-primary m-4 rounded-full p-2 hover:button-primary-hover">
              <a href="/dashboard/expand" className="no-underline">
                Expand Dashboard
              </a>
            </button>
          </div>
          <div className="grid gap-2 grid-cols-5 ">
            {cardData.map((cd, index) => (
              <Card
                key={index}
                id={cd?.id}
                type={cd?.type}
                name={cd?.name}
                title={cd?.title}
                description={cd?.description}
                tags={cd?.tags}
                image={cd?.image}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
