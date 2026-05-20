import { FaTransgenderAlt } from "react-icons/fa";
import { FaCat, FaLocationDot } from "react-icons/fa6";
import { IoMdStopwatch } from "react-icons/io";
import { LiaTransgenderAltSolid } from "react-icons/lia";
import { MdHealthAndSafety, MdOutlinePets } from "react-icons/md";
import { TbCategoryFilled, TbVaccine } from "react-icons/tb";

export default function PetDetails({ currentDetails }) {
  console.log(currentDetails)
  return (
    <section className="w-full">
      <div className="flex justify-between pb-5 px-10 items-center">
        <div>
          <h2 className="text-2xl font-bold "> {currentDetails?.data?.petName} </h2>
          <div className="flex gap-2">
            <div className="px-4 py-1 dark:bg-emerald-600/60 bg-emerald-600 w-max rounded-2xl mt-2 text-white text-xs">
              {currentDetails?.data?.Species}
            </div>
            <div className="px-4 py-1 dark:bg-emerald-600/60 bg-emerald-600 w-max rounded-2xl mt-2 text-white text-xs">
               {currentDetails?.data?.Breed}
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-sm py-0.5">Adoption Fee</p>
          <p className="text-xl font-bold text-emerald-500"> {currentDetails?.data?.adoptionFee}tk </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:px-10">
        <div className="flex items-center gap-3">
          <MdOutlinePets size={25} />
          <div>
            <h3 className="text-gray-500 text-xs">Pet Name</h3>
            <p className="dark:text-white font-semibold text-md">{currentDetails?.data?.petName}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LiaTransgenderAltSolid size={25} />
          <div>
            <h3 className="text-gray-500 text-xs">Species</h3>
            <p className="dark:text-white font-semibold text-md">{currentDetails?.data?.Species}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <TbCategoryFilled size={25} />
          <div>
            <h3 className="text-gray-500 text-xs">Breed</h3>
            <p className="dark:text-white font-semibold text-md"> {currentDetails?.data?.Breed} </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <IoMdStopwatch size={25} />
          <div>
            <h3 className="text-gray-500 text-xs">Age</h3>
            <p className="dark:text-white font-semibold text-md"> {currentDetails?.data?.Age} </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaTransgenderAlt size={25} />
          <div>
            <h3 className="text-gray-500 text-xs">Gender</h3>
            <p className="dark:text-white font-semibold text-md"> {currentDetails?.data?.gender} </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MdHealthAndSafety size={25} />
          <div>
            <h3 className="text-gray-500 text-xs">Health Status</h3>
            <p className="dark:text-white font-semibold text-md">
              {currentDetails?.data?.halth_Status}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <TbVaccine size={25} />
          <div>
            <h3 className="text-gray-500 text-xs">Vaccination Status</h3>
            <p className="dark:text-white font-semibold text-md">
              {currentDetails?.data?.vaccinationStatus}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaLocationDot size={25} />
          <div>
            <h3 className="text-gray-500 text-xs">location</h3>
            <p className="dark:text-white font-semibold text-md">
              {currentDetails?.data?.location}
            </p>
          </div>
        </div>
      
        <div className="flex items-center gap-3">
          <FaLocationDot size={25} />
          <div>
            <h3 className="text-gray-500 text-xs">Owner Email</h3>
            <p className="dark:text-white font-semibold text-md">
              {currentDetails?.data?.Owner_Email}
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
