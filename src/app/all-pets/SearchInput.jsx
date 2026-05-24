"use client";
import { SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchInput() {
  const [text, setText] = useState(null);
  const router = useRouter();
  const searchParamsText = useSearchParams();

  // const handleSearch = (value) => {
  //   setText(value);
  //   if (text) {
  //     setTimeout(() => {
  //       const myUrlParams = new URLSearchParams(searchParamsText);
  //       myUrlParams.set("SearchText", text);
  //       router.push(`/all-pets?${myUrlParams.toString()}`);
  //     }, 1000);
  //   }if(text === ""){
  //     router.push("/all-pets")
  //   }
  // };


    useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const params = new URLSearchParams(searchParamsText);

      if (text === "" || !text) {
        router.push("/all-pets");
        return;
      }

      params.set("SearchText", text);
      router.push(`/all-pets?${params.toString()}`);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [text]);


  return (
    <SearchField
      value={text}
      // onChange={(value) => {
      //   handleSearch(value);
      // }}
       onChange={(value) => setText(value)}
      className={`border border-gray-400 rounded-xl`}
    >
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
}
