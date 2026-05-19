"use client";

import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";

export function DeleteButton() {
  const sizes = ["Delete"];
  const handleDelete = async ()=>{
    console.log("deleted")
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
                  <Button slot="close" variant="danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>

    </div>
  );
}
