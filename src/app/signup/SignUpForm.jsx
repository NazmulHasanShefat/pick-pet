"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function SignUpForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData =  Object.fromEntries(formData);
    if(userData.ConfirmPassword !== userData.password){
        return alert("password are not match")
    }
    console.log(userData);
  };

  return (
    <Form className="flex md:w-96 mt-5 w-full flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="name"
        type="text"
      >
        <Label>Name</Label>
        <Input placeholder="Jon due"  className={`focus:ring-2 focus:ring-emerald-400`}/>
        <FieldError />
      </TextField>
      
      <TextField
        isRequired
        name="ProfileImageUrl"
        type="text"
      >
        <Label>Photo Url</Label>
        <Input placeholder="https://myhosting.com/photo.jpg"  className={`focus:ring-2 focus:ring-emerald-400`}/>
        <FieldError />
      </TextField>
      
      <TextField
        isRequired
        name="email"
        type="email"
       
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com"  className={`focus:ring-2 focus:ring-emerald-400`}/>
        <FieldError />
      </TextField>


      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" className={`focus:ring-2 focus:ring-emerald-400`}/>
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>
     
      <TextField
        isRequired
        minLength={8}
        name="ConfirmPassword"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Confirm Password</Label>
        <Input placeholder="Enter your password" className={`focus:ring-2 focus:ring-emerald-400`}/>
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>


      <div className="flex flex-col gap-5">
        <Button type="submit" className={`bg-emerald-600 w-full`}>
          Login Now
        </Button>
        <Button type="button" className={`bg-transparent border border-emerald-400 w-full`}>
          <FcGoogle />
          Continue With Google
        </Button>
        <p className="text-gray-500">{"Alrady i have an Acount"} <Link href={"/login"} className="text-emerald-400 hover:underline">Login</Link> </p>
      </div>
    </Form>
  );
}
