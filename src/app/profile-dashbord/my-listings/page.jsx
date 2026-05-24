import { Suspense } from "react";
import MyListCart from "./MyListingCard";
import { baseURL, baseUrlLocal, baseUrlProduction } from "@/context/baseUrl";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import LodingSpin from "@/components/ui/LodingSpin";
import ListingStates from "./ListingStates";

export const metadata = {
  title: "pickpet platform - My listing",
  description: "Pet Adoption Platform to adopt you new pet",
};

export default async function MyListingPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const myListPromise = fetch(
    `${process.env.DEVELOPMENT === "local" ? baseUrlLocal : baseUrlProduction}/my-listing/${session?.user?.email}`,
  ).then((res) => res.json());

  return (
    <section className="px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-2xl">My Listing</h1>
          <p className="text-gray-500">Listed all pets you have created</p>
        </div>
        <div className="w-full flex items-center justify-end">
          <Suspense fallback={<p>loding...</p>}>
            <ListingStates myListPromise={myListPromise} />
          </Suspense>
        </div>
      </div>

      <Suspense
        fallback={
          <>
            <LodingSpin />
          </>
        }
      >
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <MyListCart myListPromise={myListPromise} />
        </div>
      </Suspense>
    </section>
  );
}
