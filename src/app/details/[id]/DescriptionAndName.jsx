import { div } from "motion/react-client";

export default function DescriptionAndName({ currentDetails}) {
  return (
    <>

      <div className="flex justify-between pb-5 items-center">
        <div>
          <h2 className="text-2xl font-bold ">
            {" "}
            {currentDetails?.data?.petName}{" "}
          </h2>
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
          <p className="text-xl font-bold text-emerald-500">
            {" "}
            {currentDetails?.data?.adoptionFee}tk{" "}
          </p>
        </div>
      </div>

            <div className="">
        <h2 className="text-2xl"> Description </h2>
        <p className="text-gray-500 py-3">
          {" "}
          {currentDetails?.data?.description}{" "}
        </p>
      </div>
    </>
  );
}
