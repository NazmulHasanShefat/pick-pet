import Image from "next/image";
import { use } from "react";

export default function PetCardAll({ allPetsPromise }) {
  const petData = use(allPetsPromise);
  const petInfo = petData?.data;

  return petInfo.length !== 0 ? (
    
    <div className="border border-emerald-500 rounded-3xl hover:translate-y-2 transition-translate duration-200">
      <Image
        src={`/tommy.jpg`}
        className="w-full h-[200px] rounded-b-2xl rounded-t-3xl object-cover"
        width={800}
        height={900}
        alt="dogy"
      />
      <div className="p-5">
        <h2 className="text-3xl mt-5">se</h2>
        <p className="text-md">This is a vary good dog</p>
        <p className="mt-1 text-base text-gray-400">Dhaka, bangladesh</p>
        <p className="mt-1 text-base text-gray-400">
          Adation fee: <span className="text-emerald-400">30$</span>
        </p>
        <div className="flex items-center justify gap-5 mt-3">
          <button className="px-4 py-2 rounded-lg text-white bg-emerald-600 cursor-pointer">
            See details
          </button>
          <button className="px-4 py-2 rounded-lg text-white bg-transparent border border-emerald-500 cursor-pointer">
            Adapt Now
          </button>
        </div>
      </div>
    </div>
  ) : (
    <>
      <h1>Data not found</h1>
    </>
  );
}
