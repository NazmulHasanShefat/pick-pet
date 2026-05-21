import { CheckImageUrl } from "@/context/functions";
import Image from "next/image";
import { use } from "react";
import { BiEdit } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import {  MdOutlineRequestPage } from "react-icons/md";
import Link from "next/link";
import { PetRequestModal } from "./PetRequestModal";
import { Chip } from "@heroui/react";

export default function PetCardAll({ allPetsPromise }) {
  const myList = use(allPetsPromise)
  const ListInfo = myList?.data;

  return ListInfo.length !== 0 ? (
    ListInfo.map((list, index) => {
      const isValid = CheckImageUrl(list?.PetImageUrl);
      return (
        
        <div
          key={list._id}
          className="border border-emerald-500 rounded-3xl relative hover:translate-y-2 transition-translate duration-200"
        >
          {list?.adoptedStatus === true ? 
          <Chip color="warning" className="absolute left-0 top-0 ml-2 mt-2">Adopted</Chip>:
          ""
          }
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
              Adation fee: <span className="text-emerald-400"> {list?.adoptionFee}tk </span>
            </p>
            <div className="flex items-center flex-col gap-5 mt-3">
              <div className="flex justify-between items-center w-full">
                <Link href={`/details/${list?._id}`} className="px-2 flex items-center gap-1 text-xs py-1 rounded-lg text-white bg-emerald-600 cursor-pointer">
                  <FaRegEye />
                  View Details
                </Link>
                {/* <button className="px-2 w-max flex items-center gap-1 py-1 text-xs rounded-lg dark:text-white bg-transparent border border-emerald-500 cursor-pointer">
                  <MdOutlineRequestPage />
                  Adopt Request
                </button> */}
                <PetRequestModal currentDetails={list} />
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
