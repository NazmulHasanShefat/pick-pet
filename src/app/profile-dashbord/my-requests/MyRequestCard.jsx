import { Chip } from "@heroui/react";
import { use } from "react";
import { CancleButton } from "./CancleButton";
import { ViewModal } from "./VewModal";

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
                <h2 className="text-3xl"> {item?.petName} </h2>
                <p className="text-xs mt-2">Pick up Date: {item?.request?.PickUpDate} </p>
                <p className="mt-3 text-xs text-gray-500">
                  Request Date:{" "}
                  <span className="text-emerald-500"> {item?.request?.requestDate} </span>
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Adation fee: <span className="text-emerald-500"> {item?.adoptionFee} $</span>
                </p>
                <div className="flex items-center justify-between gap-5 mt-3">
                  <div className="flex gap-2">
                    <ViewModal currentDetails={item}/>
                    <CancleButton CancleId={item?._id}/>
                  </div>
                  {item?.request?.status === "pending" ?
                   <Chip color="warning"> {item?.request?.status} </Chip>
                   :
                   item?.request?.status === "approved" ?
                   <Chip color="success"> {item?.request?.status} </Chip> :
                   item?.request?.status === "rejected" ?
                    <Chip color="danger"> {item?.request?.status} </Chip> :
                    <Chip color="success"> {item?.request?.status} </Chip>
                  }
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
