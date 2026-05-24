"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { use, useEffect, useState } from "react";
import { TbFidgetSpinnerFilled } from "react-icons/tb";

export function FilterInput({ spiciesCategoryPromise }) {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const getPromise = use(spiciesCategoryPromise);
  const abilableSpicies = getPromise?.UniqueSpicies;
  console.log(abilableSpicies);

  const a = "apple"
  

  const handleChange = (e) => {
    if (e.target.value === "All") {
      router.push(pathname);
    } else {
      const urlParams = new URLSearchParams(searchParams);
      urlParams.set("filter", e.target.value);
      router.push(`${pathname}?${urlParams.toString()}`);
      setLoading(true);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [pathname, searchParams]);

  return (
    <>
      {isLoading ? (
        <div className="fixed left-0 top-0 text-emerald-700 z-50 h-screen w-full bg-black/40 flex items-center justify-center">
          <TbFidgetSpinnerFilled size={120} className="animate-spin" />
        </div>
      ) : (
        ""
      )}
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
    </>
  );
}
