import React from "react";
import Image from "next/image";
import Link from "next/link";

interface VideoProps {
  thumbnail: string;
  editorName: string;
  uploadedTime: string;
}

interface ChannelSectionProps {
  id: string;
  channelName: string;
  videos: VideoProps[];
}

export const ChannelSection = ({
  id,
  channelName,
  videos,
}: ChannelSectionProps) => {
  return (
    <section className="mb-8">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">{channelName}</h2>
        <Link href={`/dashboard/channel/${id}`} className="mt-[4.5px]">
          View all
        </Link>
      </div>

      {/* Horizontal scroll container */}
      <div className="flex space-x-4 overflow-x-auto">
        {videos.map((video, index) => (
          <div key={index} className="min-w-[250px]">
            <Image
              src={video.thumbnail}
              alt="thumbnail"
              width={250}
              height={150}
              className="object-cover rounded-md"
            />
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">
                Uploaded by {video.editorName}
              </p>
              <p className="text-xs">{video.uploadedTime}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const videosData = [
  {
    thumbnail:
      "https://images.unsplash.com/photo-1726065235239-b20b88d43eea?w=900&auto=format&fit=crop&q=60",
    editorName: "John Doe",
    uploadedTime: "2 hours ago",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=60",
    editorName: "Jane Smith",
    uploadedTime: "1 day ago",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&auto=format&fit=crop&q=60",
    editorName: "Alice Johnson",
    uploadedTime: "Just now",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1726065235239-b20b88d43eea?w=900&auto=format&fit=crop&q=60",
    editorName: "Doe",
    uploadedTime: "2 hours ago",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=60",
    editorName: "Smith",
    uploadedTime: "1 day ago",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&auto=format&fit=crop&q=60",
    editorName: "Johnson",
    uploadedTime: "Just now",
  },
];

function Page() {
  // Demo videos data (could be replaced with real channel-specific data)

  return (
    <div className="p-4">
      {/* Hardcoded channels */}
      <ChannelSection
        id={"adfadsfasdfasdf"}
        channelName="100xdevs"
        videos={videosData}
      />
      <ChannelSection
        id={"akdlkjasdfasdfoij"}
        channelName="Harkirat Singh"
        videos={videosData}
      />
    </div>
  );
}

export default Page;
