import { baseURL } from "@/context/baseUrl";
import PetCardAll from "./PetCardAll";
import { Suspense } from "react";

export default function AllPetsPage() {
  const allPetsPromise = fetch(`${baseURL}/all-pets`).then((res) => res.json());

  return (
    <section className="w-full max-w-7xl mx-auto px-5 mt-5">
      <h1 className="text-2xl md:text-3xl font-bold">Meet Our Adorable Pets</h1>
      <p className="text-gray-500">
        Explore verified pet listings and connect with pets looking for a second
        chance at happiness.
      </p>
      <Suspense fallback={<h1>loding...</h1>}>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <PetCardAll allPetsPromise={allPetsPromise} />
        </div>
      </Suspense>
    </section>
  );
}
