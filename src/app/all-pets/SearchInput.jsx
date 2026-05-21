"use client";
import { useState } from "react";
import { Label, SearchField } from "@heroui/react";

export default function SearchInput({ SearchText, setSearchText }) {
  const handleSearch = (value) => {
    setSearchText(value);
  };

  return (
    <SearchField
      value={SearchText}
      onChange={(value) => {
        setSearchText(value);
        handleSearch(value);
      }}
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
