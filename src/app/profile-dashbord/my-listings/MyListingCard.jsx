"use client";
import { CheckImageUrl } from "@/context/functions";
import Image from "next/image";
import { use } from "react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineRequestPage } from "react-icons/md";
import { DeleteButton } from "./DeleteButton";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { ListingView } from "./ListingView";
import { RequestModal } from "./RequestModal";
import { Chip } from "@heroui/react";

export default function MyListCart({ myListPromise }) {
  const { data: session } = authClient.useSession();
  const myList = use(myListPromise);

  const ListInfo = myList?.data;
  console.log(ListInfo.length);

  return ListInfo.length === 0 || !ListInfo ? (
    <div className="col-span-4 flex text-center">
      <h1>Data not found</h1>
    </div>
  ) : (
    ListInfo.map((list, index) => {
      const isValid = CheckImageUrl(list?.PetImageUrl);
      if (list?.Owner_Email === session?.user?.email) {
        return (
          <div
            key={list._id}
            className="border relative border-emerald-500 rounded-3xl hover:translate-y-2 transition-translate duration-200"
          >
            {list?.adoptedStatus === true ? (
              <Chip color="warning" className="absolute left-0 top-0 ml-2 mt-2">
                Adopted
              </Chip>
            ) : (
              ""
            )}
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
                Adation fee:{" "}
                <span className="text-emerald-400"> {list?.adoptionFee}tk</span>
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
                  <DeleteButton deleteId={list?._id} />
                </div>

                <div className="flex justify-between items-center w-full">
                  <ListingView currentDetails={list} />
                  {/* <button className="px-2 flex items-center gap-2 py-1 text-xs rounded-lg text-white bg-transparent border border-emerald-500 cursor-pointer">
                    <MdOutlineRequestPage />
                    Requests
                  </button> */}
                  <RequestModal currentDetails={list} />
                </div>
              </div>
            </div>
          </div>
        );
      }
    })
  );
}
