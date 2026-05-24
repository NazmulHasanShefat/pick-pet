"use client";
import { SearchField } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TbFidgetSpinnerFilled } from "react-icons/tb";

export default function SearchInput() {
  const [text, setText] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const searchParamsText = useSearchParams();
  const pathname = usePathname();
  
  useEffect(() => {
    // delayDebounce
    const searchDelay = setTimeout(() => {
      const params = new URLSearchParams(searchParamsText);
      if (text === "" || !text) {
        router.push("/all-pets");
        return;
      }
      params.set("SearchText", text);
      router.push(`/all-pets?${params.toString()}`);
      setLoading(true);
    }, 500);

    return () => clearTimeout(searchDelay);
  }, [text]);

  useEffect(() => {
    setLoading(false); // pathname বা searchParams বদলালে loading false
  }, [pathname, searchParamsText]);

  return (
    <>
      {isLoading ? (
        <div className="fixed left-0 top-0 text-emerald-700 z-50 h-screen w-full bg-black/40 flex items-center justify-center">
          <TbFidgetSpinnerFilled size={120} className="animate-spin" />
        </div>
      ) : (
        ""
      )}
      <SearchField
        value={text}
        // onChange={(value) => {
        //   handleSearch(value);
        // }}
        onChange={(value) => {
          setText(value);
        }}
        className={`border border-gray-400 rounded-xl`}
      >
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>
    </>
  );
}
