import { Suspense } from "react";
import MyListCart from "./MyListingCard";
import { baseURL } from "@/context/baseUrl";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import LodingSpin from "@/components/ui/LodingSpin";

export default async function MyListingPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  
  const myListPromise = fetch(`${baseURL}/my-listing/${session?.user?.email}`).then((res) => res.json());
 
  return (
    <section className="px-5 py-10">
      <h1 className="text-2xl">My Listing</h1>
      <p className="text-gray-500">Listed all pets you have created</p>

      <Suspense fallback={<><LodingSpin /></>}>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <MyListCart myListPromise={myListPromise} />
        </div>
      </Suspense>

    </section>
  );
}
