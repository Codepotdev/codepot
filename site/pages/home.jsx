import Card from "@components/card/Card";
import { cardData } from "@data/data-share";

export default function Home() {
  return (
    <div className="grid grid-cols-2 text-color-default">
      <div className="prose-default lg:prose-xl">
        <h1 className="text-color-primary">
          Contribute, follow latest trends and learn.
        </h1>
        <h2 className="text-color-default">
          Expand your opportunities with us.
        </h2>
        <p className="text-color-default">
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to
        </p>
      </div>
      <div className="prose-default lg:prose-xl text-center">
        <h1 className="text-color-primary">
          The ultimate developer dashboards:{" "}
        </h1>
        <div className="grid grid-cols-3 marker:text-color-primary  border-primary-variant">
          <span className="border-2 border-primary p-2">
            Contributor Dashboard
          </span>
          <span className="border-y-2 border-primary p-2">
            Trends Dashboard
          </span>
          <span className="border-2 border-primary p-2">Learn Dashboard</span>
        </div>
        <div className="grid grid-cols-5 p-2 border-2 border-primary">
        {cardData.map((cd) => (
          <Card
            id={cd.id}
            type={cd.type}
            name={cd.name}
            title={cd.title}
            description={cd.description}
            tags={cd.tags}
            image={cd.image}
          ></Card>
        ))}
      </div>
      </div>
    </div>
  );
}
