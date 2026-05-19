"use client";
import { baseURL } from "@/context/baseUrl";
import { authClient } from "@/lib/auth-client";
import { ChevronsExpandVertical } from "@gravity-ui/icons";
import { ListBox, Select } from "@heroui/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddPetForm() {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const petData = Object.fromEntries(formData);
    try {
      const result = await fetch(`${baseURL}/create-pet_details`, {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(petData)
      })
      const showResult = await result.json();
      if(showResult.success === true){
        toast.success("Added successfully");
        router.push("/profile-dashbord/my-listings");
        router.refresh();
      }
      console.log(showResult);
      
    } catch (error) {
      console.log(error)
    }
  };

  const { data: session, isPending, error } = authClient.useSession();
  const user = session?.user;

  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <div className="grid mt-5 w-full grid-cols-1 md:grid-cols-2 gap-4">
        <TextField isRequired name="petName" type="text">
          <Label>Pet Name</Label>
          <Input
            placeholder="tommy"
            className={`focus:ring-2 focus:ring-emerald-400`}
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="Species" type="text">
          <Label>Pet Species</Label>
          <Input
            placeholder="Dog/Cat/Bird/etc."
            className={`focus:ring-2 focus:ring-emerald-400`}
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="PetImageUrl" type="text">
          <Label>Pet Photo Url</Label>
          <Input
            placeholder="https://myhosting.com/photo.jpg"
            className={`focus:ring-2 focus:ring-emerald-400`}
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="Breed" type="text">
          <Label>Pet Breed</Label>
          <Input
            placeholder="French Bulldog / Pug / Golden Retriever / etc."
            className={`focus:ring-2 focus:ring-emerald-400`}
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="Age" type="text">
          <Label>Pet Age</Label>
          <Input
            placeholder="1yr / 1mo / 100day"
            className={`focus:ring-2 focus:ring-emerald-400`}
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="location" type="text">
          <Label>Location</Label>
          <Input
            placeholder="Dhaka Bangladesh"
            className={`focus:ring-2 focus:ring-emerald-400`}
          />
          <FieldError />
        </TextField>

        {/* select input */}
        <Select placeholder="Select Gender" name="gender" defaultValue={`Male`} isRequired>
          <Label>Pet Gender</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator className="size-3">
              <ChevronsExpandVertical />
            </Select.Indicator>
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="Male" textValue="Male">
                Male
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="Female" textValue="Female">
                Female
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        {/* select input */}

        {/* select input health status*/}
        <Select
          placeholder="Select Health Status"
          defaultValue={`Excellent`}
          name="halth_Status"
          isRequired

        >
          <Label>Health Status</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator className="size-3">
              <ChevronsExpandVertical />
            </Select.Indicator>
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="Excellent" textValue="Excellent">
                Excellent
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Good" textValue="Good">
                Good
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="UnderTreatment" textValue="Under Treatment">
                Under Treatment
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Recovering" textValue="Recovering">
                Recovering
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        {/* select input */}

        {/* select input Vaccination Status*/}
        <Select
          placeholder="Select Vaccination Status"
          defaultValue={`Fully_Vaccinated`}
          name="vaccinationStatus"
          isRequired
        >
          <Label>Vaccination Status</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator className="size-3">
              <ChevronsExpandVertical />
            </Select.Indicator>
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="Fully_Vaccinated" textValue="Fully Vaccinated">
                Fully Vaccinated
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Not_Vaccinated" textValue="Not Vaccinated">
                Not Vaccinated
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Unknown" textValue="Unknown">
                Unknown
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        {/* select input Vaccination Status*/}

        <TextField isRequired name="description" type="text">
          <Label>description</Label>
          <Input
            placeholder="Description..."
            className={`focus:ring-2 focus:ring-emerald-400`}
          />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="Owner_Email"
          type="email"
          isReadOnly={true}
          value={user?.email}
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Owner Email</Label>
          <Input
            placeholder={isPending ? "loding...": "jone@gmail.com"}
            className={`focus:ring-2 focus:ring-emerald-400`}
          />
          <FieldError />
        </TextField>
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <Button type="submit" className={`bg-emerald-600`}>
          Add a pet +
        </Button>
        <p className="text-gray-500">
          {"Go to my listing page"}{" "}
          <Link
            href={"/profile-dashbord/my-listing"}
            className="text-emerald-400 hover:underline"
          >
            My Listing
          </Link>{" "}
        </p>
      </div>
    </Form>
  );
}
