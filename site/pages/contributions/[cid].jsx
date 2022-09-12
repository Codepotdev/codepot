import { useRouter } from "next/router";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function Contribution() {
  const router = useRouter();
  const data = JSON.parse(router.query.data);

  return (
    <Modal
      isOpen={true}
      onRequestClose={() => router.push("/")}
      contentLabel="Post modal"
    >
      <div class="w-96 md:w-auto dark:bg-dark relative flex flex-col justify-center items-center bg-light py-16 px-4 md:px-24 xl:py-24 xl:px-36">
        <div role="banner">
          <img src={data.image}></img>
        </div>
        <div class="mt-12">
          <h1
            role="main"
            class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800"
          >
            {data.title}
          </h1>
        </div>
        <div class="mt">
          {data.tags.map((tag) => (
            <p class="mt-6 sm:w-80 text-base dark:text-white leading-7 text-center text-gray-800">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </Modal>
  );
}
