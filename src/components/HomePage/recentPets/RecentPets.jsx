import Image from "next/image";

export default function RecentPets() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5">
      <h1 className="text-2xl md:text-7xl font-bold text-center mt-15">Recent Update</h1>
      <div className="petCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        <div className="border border-emerald-500 rounded-3xl">
            <Image src={`/tommy.jpg`} className="w-full h-[200px] rounded-2xl object-cover" width={800} height={900} alt="dogy" />
            <div className="p-5">
            <h2 className="text-3xl mt-5">Bunny</h2>
            <p className="text-md">This is a vary good dog</p>
            <p className="mt-1 text-base text-gray-400">Dhaka, bangladesh</p>
            <p className="mt-1 text-base text-gray-400">Adation fee: <span className="text-emerald-400">30$</span></p>
            <div className="flex items-center justify gap-5 mt-3">
            <button className="px-4 py-2 rounded-lg text-white bg-emerald-600">See details</button>
            <button className="px-4 py-2 rounded-lg text-white bg-emerald-600">See details</button>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}