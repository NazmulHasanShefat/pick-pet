import Image from "next/image";
import PetDetails from "./PetDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { baseURL } from "@/context/baseUrl";
import { MdOutlineDangerous, MdOutlineRequestPage } from "react-icons/md";
import { CheckImageUrl } from "@/context/functions";
import DescriptionAndName from "./DescriptionAndName";
import { RequestModalDetailsPage } from "./RequestModalDetailsPage";
import Link from "next/link";

export const metadata = {
  title: "pickpet platform - Details",
  description: "Pet Adoption Platform to adopt you new pet",
};

export default async function PetDetailsPage({ params }) {
  const { id } = await params;
  // const myToken = await auth.api.getToken({
  //   headers: await headers(),
  // });
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
  const adoptionStatus = currentDetails?.data?.adoptedStatus;
  const PetImageUrl = currentDetails?.data?.PetImageUrl;

  const ImageIsValid = CheckImageUrl(PetImageUrl);
  return (
    <section className="px-5 mt-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-6 flex flex-col items-center">
        <div className="w-[98%] rounded-lg border overflow-hidden flex items-center">
          <Image
            src={ImageIsValid ? PetImageUrl : "./Tommy.jpg"}
            width={800}
            height={1200}
            alt="detailsImage"
            className="w-full h-max object-contain rounded-lg"
          />
        </div>
        <div className="mt-5 w-full">
          {/* <PetDetails currentDetails={currentDetails} /> */}
          <DescriptionAndName currentDetails={currentDetails} />
        </div>
      </div>
      <div className="md:col-span-6">
        <div className="w-full mb-5 md:px-10">
          <h2 className="text-2xl">
            Request to adopt {currentDetails?.data?.petName}
          </h2>
          <p className="text-gray-500">
            Fill out the form and owner well recive your request{" "}
          </p>
        </div>

        {adoptionStatus === true ? (
          <div className="mt-10">
            <div className="w-full mt-10 flex text-red-500 items-center justify-center">
              <MdOutlineDangerous size={100} />
            </div>
            <h2 className="text-2xl text-center">You Can’t adopt</h2>
            <p className="text-gray-500 text-center">
              This pet was alrady adopted
            </p>
          </div>
        ) : session?.user?.email === OwnerEmail ? (
          <div className="mt-10">
            <div className="w-full mt-10 flex text-red-500 items-center justify-center">
              <MdOutlineDangerous size={100} />
            </div>
            <h2 className="text-2xl text-center">
              You Can’t Adopt Your Own Pet
            </h2>
            <p className="text-gray-500 text-center">
              This pet was added by you, so adoption requests are not allowed
              for your own listing. You can manage or update your pet
              information from your dashboard.
            </p>
          </div>
        ) : (
          <>
            <PetDetails currentDetails={currentDetails} />
            <div className="px-10 mt-10">
              {!session ?
              <Link href={"/login"} className="w-full flex justify-center items-center gap-3 py-2 bg-emerald-700 text-white rounded-lg cursor-pointer active:scale-95">
                 <MdOutlineRequestPage className="my-0" />
                 Request Now
              </Link>
              :
              <RequestModalDetailsPage currentDetails={currentDetails} />
              }
            </div>
          </>
          // <PetRequestForm currentDetails={currentDetails} />
        )}
      </div>
    </section>
  );
}
