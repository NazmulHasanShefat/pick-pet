import { Suspense } from "react";
import MyListCart from "./MyListingCard";
import { baseURL } from "@/context/baseUrl";

export default function MyListingPage() {
  const myListPromise = fetch(`${baseURL}/all-pets`).then((res) => res.json());
  return (
    <section className="px-5 py-10">
      <h1 className="text-2xl">My Listing</h1>
      <p className="text-gray-500">Listed all pets you have created</p>

      <Suspense fallback={<h1>loding...</h1>}>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <MyListCart myListPromise={myListPromise} />
        </div>
      </Suspense>

    </section>
  );
}
