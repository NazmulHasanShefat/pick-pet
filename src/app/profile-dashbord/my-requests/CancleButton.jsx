"use client";

import { baseURL, baseUrlLocal, baseUrlProduction } from "@/context/baseUrl";
import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

export function CancleButton({CancleId}) {
   const router = useRouter();

  const handleDelete = async (id)=>{
    const {data:myToken} = await authClient.token();
    
    try {
      const res = await fetch(`${process.env.DEVELOPMENT === "local" ? baseUrlLocal : baseUrlProduction}/cancle-adopt-request/${id}`,{
        method: "PATCH",
        headers:{
          "Content-Type": "application/json",
          authorization: `Bearer ${myToken?.token}`
        }
      })
      const result = await res.json();
      if(result.success === true){
        router.refresh();
        toast.success("Cancled successfully");
    }
    if(result.success === false){
        toast.danger("Cancled request faild");
      }
     
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-wrap gap-4">
        <Modal key={"sm"}>
          <Button variant="danger" className={`px-2 h-max py-1 bg-red-500 text-white rounded-xl text-xs cursor-pointer hover:opacity-80`}>
           Cancle
          </Button>
          <Modal.Backdrop>
            <Modal.Container size={"sm"}>
              <Modal.Dialog>
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Icon className="bg-default text-foreground">
                    <Rocket className="size-2" />
                  </Modal.Icon>
                  <Modal.Heading>
                     Cancle you adoption Request
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body>
                  <p>
                     Are you sure you want to cancel your adoption request? This action will remove your request, and you may need to submit a new request later if you change your mind.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button slot="close" variant="secondary" className={`text-emerald-500`}>
                    Close
                  </Button>
                  <Button slot="close" variant="danger" onClick={()=>{handleDelete(CancleId)}}>Cancle</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>

    </div>
  );
}
