"use client";

import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "white" | "gray" | "red" | "ghost";
  children?: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

function ButtonIcon({
  color = "white",
  className,
  icon,
  children,
  ...props
}: Props) {
  return (
    <button
      className={`${className || ""} ${color === "ghost" ? "hover:bg-slate-100/20 text-slate-100" : ""
        } ${color === "white" ? "bg-slate-100 text-zinc-900" : ""} ${color === "gray"
          ? "bg-zinc-800 backdrop-blur-[20px] border border-zinc-700 text-slate-100"
          : ""
        } ${color === "red" ? "bg-red-500 text-slate-100" : ""
        } hover:opacity-80 duration-200 inline-flex items-center gap-3 py-2.5 px-3 rounded-full`}
      {...props}
    >
      <div>{icon}</div>
      {children}
    </button>
  );
}

export default ButtonIcon;
