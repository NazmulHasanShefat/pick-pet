"use client";
import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Label, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
            toast.success("you are loged out successfully")
          router.push("/login"); // redirect to login page
          router.refresh();
        },
      },
    });
  };
  return (
    <div
      onClick={handleLogout}
      className="flex w-full items-center justify-between gap-2"
    >
      <Label>Log Out</Label>
      <ArrowRightFromSquare className="size-3.5 text-danger" />
    </div>
  );
}
