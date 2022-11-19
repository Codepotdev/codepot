import Image from "next/image";
import Link from "next/link";

// export default function Card({
//   title,
//   description,
//   image,
//   tags,
//   link,
//   id,
//   type,
//   language,
//   imagesrc,
// }) {
//   return (
//     <>
//       <Link
//         href={{
//           pathname: `/contributions/${id}`,
//           query: {
//             data: JSON.stringify({
//               title,
//               description,
//               image,
//               tags,
//               link,
//               id,
//             }),
//           },
//         }}
//         as={`/contributions/${id}`}
//       >
//         <div className="flex flex-col  rounded-3xl overflow-hidden p-2 shadow-lg cursor-pointer">
//           <div className="flex flex-row px-6 py-2 justify-between items-center">
//             {image && (
//               <Image
//                 src={image}
//                 height={45}
//                 width={45}
//                 className="rounded-full z-10"
//               />
//             )}
//             <Image
//               src={imagesrc ? imagesrc : "/octocat.png"}
//               height={45}
//               width={45}
//               className="rounded z-10"
//             />
//           </div>
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">{title}</div>
//             <p className="text-gray-700">
//               {description ? description.slice(0, 100) + "..." : ""}
//             </p>
//           </div>
//           <div className="mb-auto"></div>
//           <div className="px-6 pt-4 pb-2">
//             {tags?.slice(0, 2).map((tag) => (
//               <span
//                 key={tag}
//                 className="inlipne-block bg-slate-50 border-2 rounded-full px-3 py-1 text-sm mr-1 mb-1"
//               >
//                 {"#" + tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </Link>
//     </>
//   );
// }

export default function Card({
  id,
  type,
  name,
  title,
  description,
  tags,
  image,
}) {
  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <Image class="w-full" src={image} width={50} height={50} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{title}</div>
          <p class="text-gray-700 text-base">{description}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          {tags?.map((tag) => (
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
