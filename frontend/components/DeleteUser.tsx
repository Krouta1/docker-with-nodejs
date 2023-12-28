"use client";
import { User} from "@/app/page";
import React from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteUser = ({ user }: { user: User }) => {
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  const handleDelet = async () => {
    await axios.delete(`${apiUrl}/users/${user.id}`);
    router.refresh();
  };
  return (
    <Button size={"icon"} variant={"destructive"} onClick={handleDelet}>
      <Trash />
    </Button>
  );
};

export default DeleteUser;
