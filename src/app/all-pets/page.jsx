import { Suspense } from "react";
import PetCardAll from "./PetCardAll";
import { FilterInput } from "./FilterInput";
import SkeletonCard from "@/components/ui/SkeletonCard";
import { baseUrlLocal, baseUrlProduction } from "@/context/baseUrl";
import SearchInput from "./SearchInput";

export const metadata = {
  title: "pickpet platform - All pets",
  description: "Pet Adoption Platform to adopt you new pet",
};

export default async function Mypage({ searchParams }) {
  const params = await searchParams;
  const selectedKey = params?.filter;
  const SearchText = params?.SearchText;

  // const url = SearchText
  //   ? `${baseURL}/search?query=${SearchText}`
  //   : selectedKey && selectedKey !== "All"
  //     ? `${baseURL}/filter-pets?species=${selectedKey}`
  //     : `${baseURL}/all-pets`;

  const getPetsPromise = () => {
    if (SearchText) {
      const promise = fetch(`${process.env.DEVELOPMENT === "local" ? baseUrlLocal : baseUrlProduction}/search?query=${SearchText}`)
        .then((res) => res.json())
        .catch((error) => console.log(error));
      return promise;
    }
    if (selectedKey && selectedKey !== "All") {
      const promise = fetch(`${process.env.DEVELOPMENT === "local" ? baseUrlLocal : baseUrlProduction}/filter-pets?species=${selectedKey}`)
        .then((res) => res.json())
        .catch((error) => console.log(error));
      return promise;
    } else {
      const promise = fetch(`${process.env.DEVELOPMENT === "local" ? baseUrlLocal : baseUrlProduction}/all-pets`)
        .then((res) => res.json())
        .catch((error) => console.log(error));
      return promise;
    }
  };
  const allPetsPromise = getPetsPromise();

  const spiciesCategoryPromise = fetch(`${process.env.DEVELOPMENT === "local" ? baseUrlLocal : baseUrlProduction}/find-uniqueCategorys`)
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return (
    <section className="w-full max-w-7xl mx-auto px-5 mt-5">
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
          <div className="md:col-span-3 flex flex-col gap-5 md:flex-row items-center justify-between">
            <div className="searchbox w-full md:w-1/2 mt-5 md:mt-0">
              <SearchInput
                SearchText={SearchText}
                // setSearchText={setSearchText}
              />
            </div>
            <div className="filter-box w-full md:w-1/2">
              <Suspense
                fallback={
                  <select className="w-full md:mb-0 mb-3 dark:bg-gray-700 border border-emerald-700 py-2 px-4 rounded-xl">
                    <option value="loding...">loding....</option>
                  </select>
                }
              >
                <FilterInput
                  spiciesCategoryPromise={spiciesCategoryPromise}
                  setSelectedKey={selectedKey}
                />
              </Suspense>
            </div>
          </div>
        </div>
        <Suspense fallback={<SkeletonCard />}>
          <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 gap-7">
            <PetCardAll allPetsPromise={allPetsPromise} />
          </div>
        </Suspense>
      </div>
    </section>
  );
}
