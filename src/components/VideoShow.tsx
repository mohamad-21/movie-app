"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import ButtonIcon from "./ButtonIcon";
import { IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import PageChangeLoading from "./PageChangeLoading";

function VideoShow({ url }: { url: string }) {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-between items-start gap-5 p-12 z-30">
      {!isReady && <PageChangeLoading />}
      <div className="w-full h-full">
        <ReactPlayer
          onReady={() => setIsReady(true)}
          controls
          url={url}
          width="100%"
          height="100%"
        />
      </div>
      <ButtonIcon
        icon={<IconX />}
        color="gray"
        onClick={() => router.back()}
      ></ButtonIcon>
    </div>
  );
}

export default VideoShow;
