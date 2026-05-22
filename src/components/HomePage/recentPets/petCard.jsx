"use client";
import { CheckImageUrl } from "@/context/functions";
import Image from "next/image";
import { use } from "react";
import { BiEdit } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineRequestPage } from "react-icons/md";
import Link from "next/link";
import { PetRequestModal } from "@/app/all-pets/PetRequestModal";
import { authClient } from "@/lib/auth-client";
import { Chip } from "@heroui/react";
import { CgDanger } from "react-icons/cg";

export default function PetCardAll({ allPetsPromise }) {
  const { data } = authClient.useSession();
  const myList = use(allPetsPromise);
  const ListInfo = myList?.data;

  return ListInfo.length !== 0 ? (
    ListInfo.slice(0, 4).map((list, index) => {
      const isValid = CheckImageUrl(list?.PetImageUrl);
      // src={`/tommy.jpg`}
      return (
        <div
          key={list._id}
          className="border border-emerald-500 relative rounded-3xl hover:translate-y-2 transition-translate duration-200"
        >
          {list?.adoptedStatus === true ? (
            <Chip color="warning" className="absolute left-0 top-0 ml-2 mt-2">
              Adopted
            </Chip>
          ) : (
            ""
          )}
          <Image
            src={isValid ? list?.PetImageUrl : "/placeholder.jpg"}
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
              Adoption fee:{" "}
              <span className="text-emerald-400"> {list?.adoptionFee}tk </span>
            </p>
            <div className="flex items-center flex-col gap-5 mt-3">
              <div className="flex justify-between items-center w-full">
                <Link
                  href={`/details/${list?._id}`}
                  className="px-2 flex items-center gap-1 text-xs py-1 rounded-lg text-white bg-emerald-600 cursor-pointer"
                >
                  <FaRegEye />
                  View Details
                </Link>
                {!data ? (
                  <Link
                    href={"/login"}
                    className="px-2 w-max flex items-center gap-1 py-1 text-xs rounded-lg dark:text-white bg-transparent border border-emerald-500 cursor-pointer"
                  >
                    <MdOutlineRequestPage />
                    Adopt Request
                  </Link>
                ) : (
                  <PetRequestModal currentDetails={list} />
                )}

                {/* <button className="px-2 w-max flex items-center gap-1 py-1 text-xs rounded-lg dark:text-white bg-transparent border border-emerald-500 cursor-pointer">
                  <MdOutlineRequestPage />
                  Adopt Request
                </button> */}
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div className="col-span-4 flex text-center justify-center items-center">
      <div className="flex flex-col text-yellow-600 items-center justify-center">
        <CgDanger size={35} />
        <h1>Data not found</h1>
      </div>
    </div>
  );
}
