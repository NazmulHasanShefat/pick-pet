"use client";

import { baseURL } from "@/context/baseUrl";
import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeleteButton({deleteId}) {
   const router = useRouter();

  const handleDelete = async (id)=>{
    const {data:myToken} = await authClient.token();
    try {
      const res = await fetch(`${baseURL}/delete-pet/${id}`,{
        method: "DELETE",
        headers:{
          "Content-Type": "application/json",
          authorization: `Bearer ${myToken?.token}`
        }
      })
      const result = await res.json();
      if(result.success === true){
        router.refresh();
        toast.success("deleted successfully");
      }
      console.log(result);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-wrap gap-4">
        <Modal key={"sm"}>
          <Button variant="danger">
           Delete
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
                     Delete Pet Listing
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body>
                  <p>
                     Are you sure you want to remove this pet from the adoption list? This action will permanently delete all pet information and cannot be undone.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button slot="close" variant="secondary" className={`text-emerald-500`}>
                    Cancel
                  </Button>
                  <Button slot="close" variant="danger" onClick={()=>{handleDelete(deleteId)}}>Delete</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>

    </div>
  );
}
