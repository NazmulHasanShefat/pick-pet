import Image from "next/image";
import PetRequestForm from "./PetRequestForm";
import PetDetails from "./PetDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { baseURL } from "@/context/baseUrl";
import { MdOutlineDangerous } from "react-icons/md";

export default async function PetDetailsPage({ params }) {
  const { id } = await params;
  console.log(id);

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const GetCurrentDetail = async () => {
    try {
      const res = await fetch(`${baseURL}/single-pet/${id}`);
      const resData = await res.json();
      return resData;
    } catch (error) {
      console.log(error);
    }
  };

  const currentDetails = await GetCurrentDetail();
  

  const OwnerEmail = currentDetails?.data?.Owner_Email;

  return (
    <section className="px-5 mt-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-6 flex flex-col items-center">
        <div className="w-[400px] rounded-lg h-[350px] border overflow-hidden flex items-center">
          <Image
            src={"/Tommy.jpg"}
            width={800}
            height={1200}
            alt="detailsImage"
            className="w-full h-max object-contain rounded-lg"
          />
        </div>
        <div className="mt-10 w-full">
          <PetDetails currentDetails={currentDetails}/>
        </div>
      </div>
      <div className="md:col-span-6">
        <h2 className="text-2xl">Request to adopt petName</h2>
        <p className="text-gray-500">
          Fill out the form and owner well recive your request{" "}
        </p>
        {session?.user?.email === OwnerEmail ? (
          <div className="mt-10">
            <div className="w-full mt-10 flex text-red-500 items-center justify-center">
              <MdOutlineDangerous size={100}/>
            </div>
            <h2 className="text-2xl text-center">You Can’t Adopt Your Own Pet</h2>
            <p className="text-gray-500 text-center">This pet was added by you, so adoption requests are not allowed for your own listing. You can manage or update your pet information from your dashboard.</p>
          </div>
        ) : (
          <PetRequestForm currentDetails={currentDetails}/>
        )}
      </div>
    </section>
  );
}
