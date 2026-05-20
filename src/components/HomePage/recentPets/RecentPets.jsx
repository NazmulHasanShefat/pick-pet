import Image from "next/image";
import PetCard from "./petCard";
import { baseURL } from "@/context/baseUrl";
import { Suspense } from "react";
import SkeletonCard from "@/components/ui/SkeletonCard";

export default function RecentPets() {
  const allPetsPromise = fetch(`${baseURL}/all-pets`).then((res) => res.json());
  return (
    <section className="w-full max-w-7xl mx-auto px-5">
      <h1 className="text-2xl md:text-7xl font-bold text-center mt-15">
        Recent Update
      </h1>
      <p className="text-center mt-3 text-gray-500">
        Our latest recent updates for you
      </p>
      <Suspense fallback={<SkeletonCard />}>
        <div className="petCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 md:mt-10">
          <PetCard allPetsPromise={allPetsPromise}/>
        </div>
      </Suspense>
    </section>
  );
}
