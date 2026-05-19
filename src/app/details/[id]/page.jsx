import Image from "next/image";
import PetRequestForm from "./PetRequestForm";
import PetDetails from './PetDetails';

export default async function PetDetailsPage({params}) {
    const {id} = await params;
    console.log(id);
  return (
    <section className="px-5 mt-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-2">
     <div className="md:col-span-6 flex flex-col items-center">
        <div className="w-[400px] rounded-lg h-[350px] border overflow-hidden flex items-center">
        <Image src={"/Tommy.jpg"} width={800} height={1200} alt="detailsImage" className="w-full h-max object-contain rounded-lg"/>
        </div>
        <div className="mt-10 w-full">
        <PetDetails />
        </div>
     </div>
     <div className="md:col-span-6">
        <h2 className="text-2xl">Request to adopt petName</h2>
        <p className="text-gray-500">Fill out the form and owner well recive your request </p>
        <PetRequestForm />
        
     </div>
    </section>
  );
}