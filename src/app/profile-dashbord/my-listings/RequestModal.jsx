"use client";
import { baseURL } from "@/context/baseUrl";
import { authClient } from "@/lib/auth-client";
import { Button, Modal, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

import { MdOutlineRequestPage } from "react-icons/md";

export function RequestModal({ currentDetails }) {
  const router = useRouter();
  console.log(currentDetails)
  const handleReject = async (id) => {
    const { data: myToken } = await authClient.token();
    try {
      const rejectionBody = {
        CustomerName: currentDetails?.request?.CustomerName,
        CustomerEmail: currentDetails?.request?.CustomerEmail,
        PickUpDate: currentDetails?.request?.PickUpDate,
        requestDate: currentDetails?.request?.requestDate,
        MessageToOwner: currentDetails?.request?.MessageToOwner,
        PetName: currentDetails?.request?.PetName,
        adopted: false,
        status: "rejected",
      };
      const res = await fetch(`${baseURL}/RejectAdoptRequest/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${myToken?.token}`,
        },
        body: JSON.stringify(rejectionBody),
      });
      const result = await res.json();
      if (result.success === true) {
        router.refresh();
        toast.success("rejected successfully");
      }
      if (result.success === false) {
        toast.danger("faild to reject");
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
 
  const handleApprove = async (id) => {
   console.log(id)
    const { data: myToken } = await authClient.token();
    try {
      const rejectionBody = {
        CustomerName: currentDetails?.request?.CustomerName,
        CustomerEmail: currentDetails?.request?.CustomerEmail,
        PickUpDate: currentDetails?.request?.PickUpDate,
        requestDate: currentDetails?.request?.requestDate,
        MessageToOwner: currentDetails?.request?.MessageToOwner,
        PetName: currentDetails?.request?.PetName,
        adopted: true,
        status: "approved",
      };
      const res = await fetch(`${baseURL}/approve-request/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${myToken?.token}`,
        },
        body: JSON.stringify(rejectionBody),
      });
      const result = await res.json();
      if (result.success === true) {
        router.refresh();
        toast.success("Approved successfully");
      }
      if (result.success === false) {
        toast.danger("faild to Approved");
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Modal>
      <Button
        variant="secondary"
        className={`px-2 flex items-center gap-2 h-max py-1 text-xs rounded-xl dark:text-white text-gray-500 bg-transparent border border-emerald-500 cursor-pointer`}
      >
        <MdOutlineRequestPage className="my-0" />
        Request
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="max-w-[98%] sm:max-w-[60%] md:max-w-[60%]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Your Request</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <section className="w-full">
                {!currentDetails || !currentDetails?.request || !currentDetails?.request?.CustomerName ? (
                  <h2>There is no request</h2>
                ) : (
                  <div>
                    <div className="dark:text-white">
                      <div>Customer Name: </div>
                      <div className="text-emerald-500">
                        {" "}
                        {currentDetails?.request?.CustomerName}
                      </div>
                    </div>

                    <div className="dark:text-white mt-2">
                      <div>Customer Email: </div>
                      <div className="text-emerald-500">
                        {currentDetails?.request?.CustomerEmail}
                      </div>{" "}
                    </div>
                    <div className="dark:text-white mt-2">
                      <div>Customer Message: </div>
                      <div className="text-emerald-500">
                        {currentDetails?.request?.MessageToOwner}
                      </div>{" "}
                    </div>

                    <div className="dark:text-white mt-2">
                      <div>Pick Up Date </div>
                      <div className="text-emerald-500">
                        {currentDetails?.request?.PickUpDate}
                      </div>{" "}
                    </div>

                    <div className="dark:text-white mt-2">
                      <div>Request Date </div>
                      <div className="text-emerald-500">
                        {currentDetails?.request?.requestDate}
                      </div>{" "}
                    </div>
                    <div className="dark:text-white mt-2">
                      <div>Request Date </div>
                      <div
                        className={
                          currentDetails?.request?.status === "rejected"
                            ? "text-red-500"
                            : currentDetails?.request?.status === "pending"
                              ? "text-yellow-600"
                              : "text-emerald-600"
                        }
                      >
                        {currentDetails?.request?.status}
                      </div>{" "}
                    </div>
                  </div>
                )}
              </section>
            </Modal.Body>
            <Modal.Footer>
              {currentDetails?.request?.status === "rejected" ||
              currentDetails?.request?.status === "approved" || !currentDetails?.request || !currentDetails?.request?.CustomerName ? (
                <></>
              ) : (
                <>
                  <Button onClick={()=>{handleApprove(currentDetails?._id)}} className="w-max bg-emerald-600" slot="close">
                    Approve
                  </Button>
                  <Button
                    onClick={() => {
                      handleReject(currentDetails?._id);
                    }}
                    className="w-max bg-red-600"
                    slot="close"
                  >
                    Reject
                  </Button>
                </>
              )}
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
