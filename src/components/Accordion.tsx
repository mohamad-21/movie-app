"use client";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useState } from "react";

type Props = {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  className?: string,
  hideTitleIcon?: boolean
}

function Accordion({ title, content, className, hideTitleIcon }: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`bg-zinc-900 p-3 rounded-xl w-full ${className || ""}`}>
      <button className="font-bold gap-4 w-full" onClick={() => setExpanded(!expanded)}>
        <span className="flex items-center justify-between">{title} {hideTitleIcon ? "" : (expanded ? <IconChevronUp size="25" /> : <IconChevronDown size="25" />)}</span>
      </button>
      <div className={`flex ${expanded ? "max-h-[1000px] mt-6" : "max-h-0"} flex-col gap-4 duration-700 ease-in-out bg-zinc-900 overflow-hidden`}>
        {content}
      </div>
    </div>
  )
}

export default Accordion;
