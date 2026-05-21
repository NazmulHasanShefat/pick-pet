import { baseURL } from "@/context/baseUrl";
import MyRequestCard from "./my-requests/MyRequestCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Suspense } from "react";
import LodingSpin from "@/components/ui/LodingSpin";
import RequestStates from "./my-requests/RequestStates";

export const metadata = {
  title: "pickpet platform - Dashbord",
  description: "Pet Adoption Platform to adopt you new pet",
};

export default async function ProfileDashbord() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const getMyRequestPromise = fetch(
    `${baseURL}/my-request/${session?.user?.email}`,
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return (
    <div className="px-5 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
      <h1 className="text-2xl">My Adation Requests</h1>
      <p className="text-gray-500">Track your adation Requests</p>
        </div>
        <div className="w-full flex md:justify-end">
          <Suspense fallback={<p>loding...</p>}>
             <RequestStates getMyRequestPromise={getMyRequestPromise} />
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<LodingSpin />}>
      <div className="adaption_request_cards grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <MyRequestCard getMyRequestPromise={getMyRequestPromise}/>
      </div>
      </Suspense>
    </div>
  );
}
