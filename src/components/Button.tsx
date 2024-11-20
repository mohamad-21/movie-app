"use client";

import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "white" | "gray" | "red" | "ghost";
  children: React.ReactNode;
  className?: string;
}

function Button({ color = "white", className, children, ...props }: Props) {
  return (
    <button
      className={`${className || ""} py-2 px-3.5 rounded-full ${color === "ghost" ? "text-slate-100" : ""
        } ${color === "white" ? "bg-slate-100 text-zinc-900" : ""} ${color === "gray" ? "bg-zinc-800 text-slate-100" : ""
        } ${color === "red" ? "bg-red-500 text-slate-100" : ""
        } hover:opacity-80 duration-200 text-sm
       `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
