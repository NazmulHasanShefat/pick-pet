"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { use, useState } from "react";

export function FilterInput({ spiciesCategoryPromise }) {
  const [filterVal, setFilterVal] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const getPromise = use(spiciesCategoryPromise);
  const abilableSpicies = getPromise?.UniqueSpicies;
  console.log(abilableSpicies);

  const handleChange = (e) => {
    if (e.target.value === "All") {
      router.push(pathname);
    } else {
      const urlParams = new URLSearchParams(searchParams);
      urlParams.set("filter", e.target.value);
      router.push(`${pathname}?${urlParams.toString()}`);
    }
  };

  return (
    <select
      onChange={handleChange}
      aria-labelledby="section-title"
      className="w-full dark:bg-gray-700 md:mb-0 mb-3 border border-emerald-700 py-2 px-4 rounded-xl"
    >
      <option value={`All`}>all</option>
      {abilableSpicies &&
        abilableSpicies.map((option) => {
          return (
            <option key={option?.id} value={option?.name}>
              {" "}
              {option.name}{" "}
            </option>
          );
        })}
    </select>
  );
}
