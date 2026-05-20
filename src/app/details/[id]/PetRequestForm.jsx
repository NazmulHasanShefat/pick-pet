"use client";
import { baseURL } from "@/context/baseUrl";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Calendar,
  DateField,
  DatePicker,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";


import { useRouter } from "next/navigation";

export default function PetRequestForm({ currentDetails }) {
  const router = useRouter();
  const { data } = authClient.useSession();
  const onSubmit = async (e) => {
    e.preventDefault();
    if(data){
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData);

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    console.log(formattedDate);

    const AdoptionData = {
      adoptionId: currentDetails?.data?._id,
      requestDate: `${formattedDate}`,
      adopted: true,
      status: "pending",
      ...userData
    };
   
    const res = await fetch(`${baseURL}/send-adoption-request/${currentDetails?.data?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(AdoptionData)
      }
    );
    const resData = await res.json();
    if(resData.success){
      toast.success("request send successfully")
    }
    }else{
      return router.push("/login")
    }
  };

  return (
    <Form
      className="flex md:w-96 mt-5 w-full flex-col gap-4"
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
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
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
      <DatePicker className="w-full" name="PickUpDate">
        <Label>Date</Label>
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
                {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
              </Calendar.GridHeader>
              <Calendar.GridBody>
                {(date) => <Calendar.Cell date={date} />}
              </Calendar.GridBody>
            </Calendar.Grid>
            <Calendar.YearPickerGrid>
              <Calendar.YearPickerGridBody>
                {({ year }) => <Calendar.YearPickerCell year={year} />}
              </Calendar.YearPickerGridBody>
            </Calendar.YearPickerGrid>
          </Calendar>
        </DatePicker.Popover>
      </DatePicker>
      {/* date Pick up Date */}

      <TextField isRequired={false} name="MessageToOwner" type="text">
        <Label>Message To Owner</Label>
        <TextArea
          aria-label="Write Your Pet Description"
          className="h-32 w-full focus:ring-2 focus:ring-emerald-400"
          placeholder="Write Your Pet Description..."
        />
        <FieldError />
      </TextField>

      <div className="flex flex-col gap-5">
        <Button type="submit" className={`bg-emerald-600 w-full`}>
          Adopt Now
        </Button>
      </div>
    </Form>
  );
}
