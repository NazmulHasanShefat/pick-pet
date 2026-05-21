import { baseURL } from "@/context/baseUrl";
import MyRequestCard from "./my-requests/MyRequestCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Suspense } from "react";

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
      <h1 className="text-2xl">My Adation Requests</h1>
      <p className="text-gray-500">Track your adation Requests</p>
      <Suspense fallback={<h1>loding...</h1>}>
      <div className="adaption_request_cards grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <MyRequestCard getMyRequestPromise={getMyRequestPromise}/>
      </div>
      </Suspense>
    </div>
  );
}
