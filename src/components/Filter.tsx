"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  title: string | React.ReactNode;
  items: {
    label: string | React.ReactNode,
    value: string,
  }[]
}

function Filter({ title, items }: Props) {
  const searchParams = useSearchParams();
  const selectedValue = searchParams?.get("sort_by") || "";
  const pathname = usePathname();
  const router = useRouter();

  function handleSort(value: string) {
    const params = new URLSearchParams(searchParams);
    if (!items.some(item => item.value === value)) {
      params.delete("sort_by");
      router.replace(pathname);
      return;
    };

    params.set("sort_by", value);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <select onChange={(e) => handleSort(e.target.value)} className="bg-zinc-800 p-2 rounded" defaultValue={selectedValue}>
      <option>{title}</option>
      {items.map(item => (
        <option key={item.value} value={item.value}>{item.label}</option>
      ))}
    </select>
  )
}

export default Filter;
