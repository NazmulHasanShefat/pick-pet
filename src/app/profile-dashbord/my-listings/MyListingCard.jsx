import { CheckImageUrl } from "@/context/functions";
import Image from "next/image";
import { use } from "react";
import { BiEdit } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import { MdDelete, MdOutlineRequestPage } from "react-icons/md";
import { DeleteButton } from "./DeleteButton";
import Link from "next/link";

export default function MyListCart({ myListPromise }) {
  const myList = use(myListPromise);
  const ListInfo = myList?.data;
  console.log(ListInfo);

  return ListInfo.length !== 0 ? (
    ListInfo.map((list, index) => {
      const isValid = CheckImageUrl(list?.PetImageUrl);
      // src={`/tommy.jpg`}
      return (
        <div
          key={list._id}
          className="border border-emerald-500 rounded-3xl hover:translate-y-2 transition-translate duration-200"
        >
          <Image
            src={isValid ? list?.PetImageUrl : "/tommy.jpg"}
            className="w-full h-[200px] rounded-b-2xl rounded-t-3xl object-cover"
            width={800}
            height={900}
            alt="dogy"
          />
          <div className="p-5">
            <h2 className="text-3xl mt-2"> {list?.petName} </h2>
            <p className="text-md mt-1 line-clamp-2"> {list?.description} </p>
            <p className="mt-1 text-base text-gray-400">Dhaka, bangladesh</p>
            <p className="mt-1 text-base text-gray-400">
              Adation fee: <span className="text-emerald-400">30$</span>
            </p>
            <div className="flex items-center flex-col gap-5 mt-3">
              <div className="flex justify-between items-center w-full">
                <Link
                  href={`/profile-dashbord/pet-edit/${list?._id}`}
                  className="px-2 flex items-center gap-2 text-xs py-1 rounded-lg text-white bg-emerald-600 cursor-pointer"
                >
                  <BiEdit />
                  Edit
                </Link>

                {/* <button className="px-2 flex items-center gap-2 py-1 text-xs rounded-lg bg-red-500 text-white border border-red-500 cursor-pointer">
                  <MdDelete />
                  delete
                </button> */}
                <DeleteButton deleteId={list?._id} />
              </div>

              <div className="flex justify-between items-center w-full">
                <button className="px-2 flex items-center gap-2 text-xs py-1 rounded-lg text-white bg-emerald-600 cursor-pointer">
                  <FaRegEye />
                  View
                </button>

                <button className="px-2 flex items-center gap-2 py-1 text-xs rounded-lg text-white bg-transparent border border-emerald-500 cursor-pointer">
                  <MdOutlineRequestPage />
                  Requests
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div className="col-span-4 flex text-center">
      <h1>Data not found</h1>
    </div>
  );
}
