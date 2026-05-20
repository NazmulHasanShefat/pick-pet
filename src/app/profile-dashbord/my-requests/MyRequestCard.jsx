import { Chip } from "@heroui/react";
import { use } from "react";

export default function MyRequestCard({ getMyRequestPromise }) {
  const myRequestPromiseData = use(getMyRequestPromise);
  const myRequests = myRequestPromiseData?.data;
  console.log(myRequests);
  if (myRequests.length === 0 || !myRequests) {
    return (
      <div className="w-full flex justify-center">
        <h1>No data found</h1>
      </div>
    );
  } else {
    return (
      <>
        {myRequests.map((item, index) => {
          return (
            <div
              key={item._id}
              className="border border-emerald-500 rounded-3xl hover:translate-y-2 transition-translate duration-200"
            >
              <div className="p-5">
                <h2 className="text-3xl">Bunny</h2>
                <p className="text-xs mt-2">Request Date: 23-32-3232</p>
                <p className="mt-3 text-xs text-gray-500">
                  Pickup Date:{" "}
                  <span className="text-emerald-500">10-10-2020</span>
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Adation fee: <span className="text-emerald-500">30$</span>
                </p>
                <div className="flex items-center justify-between gap-5 mt-3">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="px-2 py-1 text-white rounded-xl text-xs cursor-pointer hover:opacity-80 bg-emerald-700"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1 bg-red-500 text-white rounded-xl text-xs cursor-pointer hover:opacity-80"
                    >
                      Cancle
                    </button>
                  </div>
                  <Chip color="success">Appoved</Chip>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
