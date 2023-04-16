import Head from "next/head";
import axios from "axios";

export async function getServerSideProps({ params }) {
  let cardData;

  const { itemId } = params;
  const { type } = params;

  try {
    const res = await axios.get(`http://localhost:8080/${type}/${itemId}`);
    cardData = res.data;

    // Handle the case when the fetched data is undefined or not an object
    if (typeof cardData !== "object" || cardData === null) {
      cardData = {};
    }
  } catch (error) {
    console.error("Error fetching card data:", error);
    cardData = {};
  }

  return {
    props: {
      cardData,
    },
  };
}

const ItemDetail = ({ cardData }) => {
  const { title, description, image, tags, link } = cardData;
  console.log(cardData)
  return (
    <>
      <Head>
        <title>{title} | Codepotdev</title>
      </Head>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">{title}</h1>
              <p className="text-gray-700 mb-4">{description}</p>
              <div className="space-x-2 mb-4">
                {tags?.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-100 border border-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    {"#" + tag}
                  </span>
                ))}
              </div>
              {/* Add additional information and options for users to engage with the content */}
              <div className="flex space-x-4">
                <button
                  href={link}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Contribute
                </button>
                {/* <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                  Share
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
