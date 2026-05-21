"use client";
import { baseURL } from "@/context/baseUrl";
import {
  Autocomplete,
  Description,
  EmptyState,
  Label,
  ListBox,
  SearchField,
  useFilter,
} from "@heroui/react";
import { useEffect, useState } from "react";

export function FilterInput({ selectedKey, setSelectedKey }) {
  const [dropItems, setDropItems] = useState([]);

  const { contains } = useFilter({ sensitivity: "base" });
  const items = [
    { id: "florida", name: "Florida" },
    { id: "delaware", name: "Delaware" },
    { id: "california", name: "California" },
    { id: "texas", name: "Texas" },
    { id: "new-york", name: "New York" },
    { id: "washington", name: "Washington" },
  ];

  useEffect(() => {
    const filterdSpecies = async () => {
      try {
        const res = await fetch(`${baseURL}/filter-pets?species=dog`);
        const resData = await res.json();

        const dropItems = resData?.map((item) => ({
          id: item.Species,
          name: item.Species,
        }));
        setDropItems(dropItems);
      } catch (error) {
        console.log(error);
      }
    };
    filterdSpecies();
  }, []);

  console.log(dropItems, "this is array");

  return (
    <Autocomplete
      className="w-full"
      placeholder="Filter pet"
      selectionMode="single"
      value={selectedKey}
      onChange={setSelectedKey}
    >
      <Label>State</Label>
      <Autocomplete.Trigger>
        <Autocomplete.Value />
        <Autocomplete.ClearButton />
        <Autocomplete.Indicator />
      </Autocomplete.Trigger>
      <Autocomplete.Popover>
        <Autocomplete.Filter filter={contains}>
          <SearchField autoFocus name="search" variant="secondary">
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input placeholder="Search states..." />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
          <ListBox
            renderEmptyState={() => <EmptyState>No results found</EmptyState>}
          >
            {dropItems.map((item) => (
              <ListBox.Item key={item.id} id={item.id} textValue={item.name}>
                {item.name}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Autocomplete.Filter>
      </Autocomplete.Popover>
    </Autocomplete>
  );
}
