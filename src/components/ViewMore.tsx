import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

function ViewMore({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="py-2 px-3 hover:opacity-80 duration-200 bg-zinc-700 text-white flex items-center gap-1 rounded-full"
    >
      <span className="text-xs">View More</span>
      <IconChevronRight size="16" />
    </Link>
  );
}

export default ViewMore;
