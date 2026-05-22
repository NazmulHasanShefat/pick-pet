import { Chip } from "@heroui/react";
import { use } from "react";

export default function ListingStates({ myListPromise }) {
  const myData = use(myListPromise);
  const ListingInfo = myData?.data;

  const filterAdopted = ListingInfo.filter(
    (itme) => itme?.adoptedStatus === true,
  );
  const filterReject = ListingInfo.filter(
    (itme) => itme?.request?.status === "rejected",
  );
  const filterApproved = ListingInfo.filter(
    (itme) => itme?.request?.status === "approved",
  );
  const filterPending = ListingInfo.filter(
    (itme) => itme?.request?.status === "pending",
  );
  return (
    <div className="flex flex-wrap flex-row gap-3 mt-3 md:mt-0">
     <Chip color="warning">Total {ListingInfo?.length} </Chip>
     <Chip color="success">adopted {filterAdopted?.length} </Chip>
     <Chip color="danger">Rejected {filterReject?.length} </Chip>
     <Chip color="success">Approved {filterApproved?.length} </Chip>
     <Chip color="warning">pending {filterPending?.length} </Chip>
    </div>
  );
}
