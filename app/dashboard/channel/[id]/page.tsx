"use client";
import { useParams } from "next/navigation";
import React from "react";
import { videosData } from "../../videos/page";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Editors } from "@/components/Editors";

function page() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between pr-4">
        <h2 className="text-2xl font-bold">
          {id === "adfadsfasdfasdf" ? "100xDevs" : "Harkirat Singh"}
        </h2>
        {/* <Button variant={"outline"}>
          <Users /> Editors
        </Button> */}
        <Editors />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-4 mx-auto">
        {videosData.map((video, index) => (
          <div key={index} className="min-w-[250px]">
            <Image
              src={video.thumbnail}
              alt="thumbnail"
              width={250}
              height={150}
              className="object-cover rounded-md"
            />
            <div className="mt-2 flex items-center justify-between pr-5">
              <div>
                <p className="text-sm text-muted-foreground">
                  Uploaded by {video.editorName}
                </p>
                <p className="text-xs">{video.uploadedTime}</p>
              </div>
              <Button variant={"outline"} size={"sm"}>
                Review
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
