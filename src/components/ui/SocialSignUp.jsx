"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

export default function SocialSignUp() {
  const handleSocialSignUp = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      onClick={handleSocialSignUp}
      type="button"
      className={`bg-transparent dark:text-white text-black border border-emerald-400 w-full`}
    >
      <FcGoogle />
      Continue With Google
    </Button>
  );
}
