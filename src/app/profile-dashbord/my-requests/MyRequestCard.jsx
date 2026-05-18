import { Chip } from "@heroui/react";
import Image from "next/image";

export default function MyRequestCard() {
  return (
    <div className="border border-emerald-500 rounded-3xl hover:translate-y-2 transition-translate duration-200">
      <Image
        src={`/tommy.jpg`}
        className="w-full h-[200px] rounded-b-2xl rounded-t-3xl object-cover"
        width={800}
        height={900}
        alt="dogy"
      />
      <div className="p-5">
        <h2 className="text-3xl mt-5">Bunny</h2>
        <p className="text-md">This is a vary good dog</p>
        <p className="mt-1 text-base text-gray-400">Dhaka, bangladesh</p>
        <p className="mt-1 text-base text-gray-400">
          Adation fee: <span className="text-emerald-400">30$</span>
        </p>
        <div className="flex items-center justify gap-5 mt-3">
            <Chip color="success">Appoved</Chip>
        </div>
      </div>
    </div>
  );
}
