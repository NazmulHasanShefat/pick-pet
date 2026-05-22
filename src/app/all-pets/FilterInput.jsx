"use client";
import { use } from "react";

export function FilterInput({ spiciesCategoryPromise, setSelectedKey }) {
  const getPromise = use(spiciesCategoryPromise);
  
  const abilableSpicies = getPromise?.UniqueSpicies;
  console.log(abilableSpicies)

  const handleChange = (e) => {
    setSelectedKey(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      aria-labelledby="section-title"
      className="w-full dark:bg-gray-700 md:mb-0 mb-3 border border-emerald-700 py-2 px-4 rounded-xl"
    >
      <option value={`All`}>all</option>
      {abilableSpicies.map((option, index) => {
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
