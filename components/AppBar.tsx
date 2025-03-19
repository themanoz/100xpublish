import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./Modetoggle";

function AppBar() {
  return (
    <div className="flex justify-between items-center gap-2 p-4">
      <h2 className="font-semibold">Welcome, 100xpublish</h2>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button>Logout</Button>
      </div>
    </div>
  );
}

export default AppBar;
