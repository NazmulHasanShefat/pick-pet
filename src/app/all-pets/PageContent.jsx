"use client";
import { baseURL } from "@/context/baseUrl";
import PetCardAll from "./PetCardAll";
import { Suspense, useState } from "react";
import SkeletonCard from "@/components/ui/SkeletonCard";
import SearchInput from "./SearchInput";
import { FilterInput } from "./FilterInput";

export default function PageContent() {
  const [SearchText, setSearchText] = useState(null);
   const [selectedKey, setSelectedKey] = useState(null);


  const url = SearchText
    ? `${baseURL}/search?query=${SearchText}`
    : `${baseURL}/all-pets`;

  const allPetsPromise = fetch(url).then((res) => res.json());
//   const allPetsPromise = fetch(${baseURL}/all-pets).then((res) => res.json());

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-3">
          <h1 className="text-2xl md:text-3xl font-bold">
            Meet Our Adorable Pets
          </h1>
          <p className="text-gray-500">
            Explore verified pet listings and connect with pets looking for a
            second chance at happiness.
          </p>
        </div>
        <div className="md:col-span-3 flex items-center justify-between">
          <div className="searchbox">
            <SearchInput
              SearchText={SearchText}
              setSearchText={setSearchText}
            />
          </div>
          <div className="filter-box">
            <FilterInput selectedKey={selectedKey} />
          </div>
        </div>
      </div>
      <Suspense fallback={<SkeletonCard />}>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <PetCardAll allPetsPromise={allPetsPromise} setSelectedKey={setSelectedKey} />
        </div>
      </Suspense>
    </div>
  );
}
