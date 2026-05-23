"use client"
import { Chip } from "@heroui/react";
import { use } from "react";

export default function RequestStates({ getMyRequestPromise }) {
  const myData = use(getMyRequestPromise);
  console.log(myData);
  const allData = myData?.data;
  const TotalRejected = allData.filter(
    (item) => item?.request?.status === "rejected",
  );
  const totalPending = allData.filter(
    (item) => item?.request?.status === "pending",
  );
  const TotalApprove = allData.filter(
    (item) => item?.request?.status === "approved",
  );
  return (
    <div className="flex flex-row flex-wrap gap-3 mt-3 md:mt-0">
      <Chip color="danger">Rejected {TotalRejected?.length}</Chip>
      <Chip color="warning">Pending {totalPending?.length} </Chip>
      <Chip color="success">Aproved {TotalApprove?.length}</Chip>
    </div>
  );
}
