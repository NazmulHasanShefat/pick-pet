"use client";
import { baseURL } from "@/context/baseUrl";
import { useEffect, useState } from "react";

export function FilterInput({ selectedKey, setSelectedKey }) {
  const [dropItems, setDropItems] = useState([]);

  useEffect(() => {
    const filterdSpecies = async () => {
      try {
        const res = await fetch(`${baseURL}/all-pets`);
        const resData = await res.json();

        const unique = [
          ...new Map(
            resData?.data?.map((item) => [
              item.Species?.toLowerCase(),
              { id: item._id, name: item.Species },
            ]),
          ).values(),
        ];
        
        const newOptions = [...unique, {id: "all", name: "All"}];
        setDropItems(newOptions);
      } catch (error) {
        console.log(error);
      }
    };
    filterdSpecies();
  }, []);

  const handleChange = (e) => {
    setSelectedKey(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      className="w-full dark:bg-gray-700 border border-gray-400 py-2 px-4 rounded-xl"
    >
      {dropItems.map((option) => {
        return (
          <option key={option.id} value={option.name}>
            {" "}
            {option.name}{" "}
          </option>
        );
      })}
    </select>
  );
}
