"use client";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./Modetoggle";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AppBar() {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between items-center gap-2 p-4">
      <h2 className="font-semibold">Welcome, {session?.user?.name}</h2>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Avatar>
          <AvatarImage
            src={session?.user?.image || "https://github.com/shadcn.png"}
          />
          <AvatarFallback> {session?.user?.name?.charAt(0)}</AvatarFallback>
        </Avatar>

        <Button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="cursor-pointer"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default AppBar;
