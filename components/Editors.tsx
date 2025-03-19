import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Users, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function Editors() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Users /> Editors
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editors</DialogTitle>
          <DialogDescription>
            Editors that have access to this workspace
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <Input type="email" placeholder="Email" />
          <Button>Invite</Button>
        </div>
        <div>
          <Tabs defaultValue="members" className="w-full">
            <TabsList>
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="invitations">Invitations</TabsTrigger>
            </TabsList>
            <TabsContent value="members">
              <div className="flex items-center gap-2 py-2 px-3 border rounded-md">
                <Image
                  src={"/100xdevs.jpeg"}
                  alt="avatar"
                  width={30}
                  height={30}
                  className="object-cover rounded-xl"
                />
                <div>
                  <p className="text-sm font-medium flex gap-2">
                    100xdevs{" "}
                    <span className="text-xs border border-slate-800 text-sky-600 py-[0.5px] px-2 rounded-xl">
                      Owner
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    100xdevs@gmail.com
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="invitations">
              <div className="flex items-center justify-between gap-2 py-2 px-3 border rounded-md">
                <div className="flex items-center gap-2 ">
                  <Image
                    src={"/kirat.jpeg"}
                    alt="avatar"
                    width={30}
                    height={30}
                    className="object-cover rounded-xl"
                  />
                  <div>
                    <p className="text-sm font-medium flex gap-2">
                      Harkirat Singh
                    </p>
                    <p className="text-xs text-muted-foreground">
                      kirat@gmail.com
                    </p>
                  </div>
                </div>
                <Button variant={"outline"} size={"icon"}>
                  <X className="text-red-500" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
