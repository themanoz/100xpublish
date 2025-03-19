import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Users } from "lucide-react";

function Teams() {
  return (
    <div className="flex items-center gap-1">
      <Select>
        <SelectTrigger className="flex-auto min-w-[180px] bg-[#3c3c3c] text-white border-none focus:ring-offset-0 focus:ring-0">
          <SelectValue placeholder="Select a Team" />
        </SelectTrigger>
        <SelectContent className="bg-[#222] text-white border-white/10 ">
          <SelectGroup>
            {/* {allTeams?.teams?.map((eachTeam: EachTeam) => {
              return (
                <>
                  <SelectItem
                    value={eachTeam.team.id}
                    key={"key" + eachTeam.team.id}
                  >
                    <div className="flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-400" />
                      <span className="text-[12px] text-center m-auto">
                        {eachTeam.team.name}
                      </span>
                    </div>
                  </SelectItem>
                </>
              );
            })} */}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button variant={"outline"} size={"icon"}>
        <Users />
      </Button>
    </div>
  );
}

export default Teams;
