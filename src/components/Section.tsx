import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

function Section({ children, className, ...props }: Props) {
  return <section className={`px-7 w-full max-w-5xl mx-auto flex flex-col lg:gap-6 gap-5 ${className || ""}`} {...props}>{children}</section>;
}

export default Section;
