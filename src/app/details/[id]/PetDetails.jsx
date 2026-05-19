import { MdOutlinePets } from "react-icons/md";

export default function PetDetails() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">

      <div className="flex items-center gap-3">
        <MdOutlinePets size={25} />
        <div>
          <h3 className="text-gray-500 text-xs">Pet Name</h3>
          <p className=" dark:text-white font-semibold text-lg">Brono tommy</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <MdOutlinePets size={25} />
        <div>
          <h3 className="text-gray-500 text-xs">Pet Name</h3>
          <p className=" dark:text-white font-semibold text-lg">Brono tommy</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <MdOutlinePets size={25} />
        <div>
          <h3 className="text-gray-500 text-xs">Pet Name</h3>
          <p className=" dark:text-white font-semibold text-lg">Brono tommy</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <MdOutlinePets size={25} />
        <div>
          <h3 className="text-gray-500 text-xs">Pet Name</h3>
          <p className=" dark:text-white font-semibold text-lg">Brono tommy</p>
        </div>
      </div>


    </section>
  );
}
