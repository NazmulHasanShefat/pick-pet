"use client";
import SocialSignUp from "@/components/ui/SocialSignUp";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Calendar,
  DateField,
  DatePicker,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
import Link from "next/link";

export default function PetRequestForm() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData);
    if (userData.ConfirmPassword !== userData.password) {
      return toast.danger("Confirm password dont match");
    }
    // console.log(userData);

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.ProfileImageUrl,
    });

    if (error) {
      return console.log("faild to registed", error);
    }
    if (data) {
      return console.log("regiterd successfully", data);
    }
  };

  return (
    <Form
      className="flex md:w-96 mt-5 w-full flex-col gap-4"
      onSubmit={onSubmit}
    >
      <TextField isRequired name="PetName" type="text">
        <Label>Pet Name</Label>
        <Input
          placeholder="tommy"
          className={`focus:ring-2 focus:ring-emerald-400`}
        />
        <FieldError />
      </TextField>

      <TextField isRequired name="CustomerName" type="text">
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

      <TextField isRequired name="description" type="text">
        <Label>description</Label>
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
        <p className="text-gray-500">
          {"Alrady i have an Acount"}{" "}
          <Link href={"/login"} className="text-emerald-400 hover:underline">
            Login
          </Link>{" "}
        </p>
      </div>
    </Form>
  );
}
