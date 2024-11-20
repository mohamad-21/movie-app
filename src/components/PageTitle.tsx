import React from "react";

function PageTitle({ children, className }: { children: React.ReactNode, className?: string }) {
  return <h1 className={`md:text-3xl text-2xl font-bold ${className || ""}`}>{children}</h1>;
}

export default PageTitle;
