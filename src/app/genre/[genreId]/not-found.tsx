import Button from "@/src/components/Button";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 min-h-[100dvh]">
      <h2 className="text-2xl">Genre not found</h2>
      <p className="text-zinc-400">
        The Genre you&apos;re looking for was not found
      </p>
      <Link href="/">
        <Button color="red">Go Back</Button>
      </Link>
    </div>
  );
}

export default NotFound;
