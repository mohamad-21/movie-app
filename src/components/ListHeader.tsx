import React from "react";
import ViewMore from "@/src/components/ViewMore";

type Props = {
  title: string | React.ReactNode;
  href?: string;
};

function ListHeader({ title, href }: Props) {
  return (
    <div className="flex items-center justify-between gap-5 mb-4">
      <div className="md:text-2xl text-xl font-bold">{title}</div>
      {href && <ViewMore href={href} />}
    </div>
  );
}

export default ListHeader;
