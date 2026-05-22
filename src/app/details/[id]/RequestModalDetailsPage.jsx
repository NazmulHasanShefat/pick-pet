"use client";
import { baseURL } from "@/context/baseUrl";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Calendar,
  DateField,
  DatePicker,
  Modal,
  TextArea,
  toast,
} from "@heroui/react";
import { useRouter } from "next/navigation";

import { MdOutlineRequestPage } from "react-icons/md";


import {
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export function RequestModalDetailsPage({ currentDetails }) {
    console.log(currentDetails, "currentDetails");
  const router = useRouter();
  const { data } = authClient.useSession();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData);
    if (data) {
      const { data: tokenData } = await authClient.token();
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;

      const AdoptionData = {
        adoptionId: currentDetails?.data?._id,
        requestDate: `${formattedDate}`,
        adopted: true,
        status: "pending",
        ...userData,
      };

      const res = await fetch(
        `${baseURL}/send-adoption-request/${currentDetails?.data?._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify(AdoptionData),
        },
      );
      const resData = await res.json();
      if (resData.success) {
        toast.success("request send successfully");
        router.refresh();
      } else {
        toast.danger(resData.message);
      }
    } else {
      return router.push("/login");
    }
    
  };

  return (
    <Modal>
      <Button
        variant="secondary"
        className={`w-full flex justify-center items-center gap-3 py-2 bg-emerald-700 text-white rounded-lg cursor-pointer outline-0 active:scale-95`}
      >
        <MdOutlineRequestPage className="my-0" />
        Request Now
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="max-w-[98%] sm:max-w-[60%] md:max-w-[60%] p-5 md:p-5">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Your Request</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <div className="requstForm">
                {currentDetails?.data?.adoptedStatus === true ? (
                  <div>
                    <p>You Can not request its alrady adopted</p>
                  </div>
                ) : (
                  <Form
                    className="flex justify-center w-full mt-5 w-full flex-col gap-4 px-5"
                    onSubmit={onSubmit}
                  >
                    <TextField
                      isReadOnly
                      value={currentDetails?.data?.petName}
                      isRequired
                      name="PetName"
                      type="text"
                    >
                      <Label>Pet Name</Label>
                      <Input
                        placeholder="tommy"
                        className={`focus:ring-2 focus:ring-emerald-400`}
                      />
                      <FieldError />
                    </TextField>

                    <TextField
                      value={data?.user?.name}
                      isReadOnly
                      isRequired
                      name="CustomerName"
                      type="text"
                    >
                      <Label>Your Name</Label>
                      <Input
                        placeholder="Jon due"
                        className={`focus:ring-2 focus:ring-emerald-400`}
                      />
                      <FieldError />
                    </TextField>

                    <TextField
                      isRequired
                      name="CustomerEmail"
                      type="email"
                      isReadOnly={true}
                      value={`${data?.user?.email || ""}`}
                      validate={(value) => {
                        if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            value,
                          )
                        ) {
                          return "Please enter a valid email address";
                        }
                        return null;
                      }}
                    >
                      <Label>Your Email</Label>
                      <Input
                        placeholder="john@example.com"
                        className={`focus:ring-2 focus:ring-emerald-400`}
                      />
                      <FieldError />
                    </TextField>

                    {/* date Pick up Date */}
                    <DatePicker className="w-full" isRequired name="PickUpDate">
                      <Label>Pick up Date</Label>
                      <DateField.Group fullWidth>
                        <DateField.Input>
                          {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                        <DateField.Suffix>
                          <DatePicker.Trigger>
                            <DatePicker.TriggerIndicator />
                          </DatePicker.Trigger>
                        </DateField.Suffix>
                      </DateField.Group>
                      <DatePicker.Popover>
                        <Calendar aria-label="Event date">
                          <Calendar.Header>
                            <Calendar.YearPickerTrigger>
                              <Calendar.YearPickerTriggerHeading />
                              <Calendar.YearPickerTriggerIndicator />
                            </Calendar.YearPickerTrigger>
                            <Calendar.NavButton slot="previous" />
                            <Calendar.NavButton slot="next" />
                          </Calendar.Header>
                          <Calendar.Grid>
                            <Calendar.GridHeader>
                              {(day) => (
                                <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
                              )}
                            </Calendar.GridHeader>
                            <Calendar.GridBody>
                              {(date) => <Calendar.Cell date={date} />}
                            </Calendar.GridBody>
                          </Calendar.Grid>
                          <Calendar.YearPickerGrid>
                            <Calendar.YearPickerGridBody>
                              {({ year }) => (
                                <Calendar.YearPickerCell year={year} />
                              )}
                            </Calendar.YearPickerGridBody>
                          </Calendar.YearPickerGrid>
                        </Calendar>
                      </DatePicker.Popover>
                    </DatePicker>
                    {/* date Pick up Date */}

                    <TextField
                      isRequired={false}
                      name="MessageToOwner"
                      type="text"
                    >
                      <Label>Message To Owner</Label>
                      <TextArea
                        aria-label="Write Your Pet Description"
                        className="h-32 w-full focus:ring-2 focus:ring-emerald-400"
                        placeholder="Write Your Pet Description..."
                      />
                      <FieldError />
                    </TextField>

                    <div className="flex flex-col gap-5">
                      <Button slot={`close`} type="submit" className={`bg-emerald-600 w-full`}>
                        Adopt Now
                      </Button>
                    </div>
                  </Form>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
