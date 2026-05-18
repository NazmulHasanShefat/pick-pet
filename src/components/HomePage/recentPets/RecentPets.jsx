import Image from "next/image";
import PetCard from "./petCard";

export default function RecentPets() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5">
      <h1 className="text-2xl md:text-7xl font-bold text-center mt-15">
        Recent Update
      </h1>
      <p className="text-center mt-3 text-gray-500">Our latest recent updates for you</p>
      <div className="petCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 md:mt-10">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </div>
    </section>
  );
}
