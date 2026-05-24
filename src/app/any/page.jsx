import { baseURL } from "@/context/baseUrl";
import { FilterInput } from "../all-pets/FilterInput";

export default async function page({ searchParams }) {
  const params = await searchParams;
  const selectedKey = params?.filter;
  console.log(selectedKey, "this is key");

  const spiciesCategoryPromise = fetch(`${baseURL}/find-uniqueCategorys`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
  return (
    <section>
      <h1>this is any</h1>
      <FilterInput spiciesCategoryPromise={spiciesCategoryPromise} />
    </section>
  );
}
