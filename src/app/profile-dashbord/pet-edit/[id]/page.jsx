import { baseURL } from "@/context/baseUrl";
import EditForm from "./EditForm";
import { Suspense } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "pickpet platform - Edit",
  description: "Pet Adoption Platform to adopt you new pet",
};

export default async function page({ params }) {
  const { id } = await params;
  const myToken = await auth.api.getToken({
    headers: await headers(),
  });

  const GetEditablePet = fetch(`${baseURL}/single-pet/${id}`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${myToken?.token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  console.log(GetEditablePet);
  return (
    <section className="py-10">
      <h1 className="text-2xl">Edit Your Pet</h1>
      <p className="text-gray-500">Carefully edit you pet details</p>
      <div className="w-full px-5 flex items-center justify-center">
        <Suspense fallback={<h1>Loding...</h1>}>
          <EditForm GetEditablePet={GetEditablePet} id={id} />
        </Suspense>
      </div>
    </section>
  );
}
