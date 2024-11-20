"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

type Props = {
  totalPages: number,
  currentPage: number
}

type PageClickEvent = {
  index: number | null;
  selected: number;
  nextSelectedPage: number | undefined;
  event: object;
  isPrevious: boolean;
  isNext: boolean;
  isBreak: boolean;
  isActive: boolean;
}

function Pagination({ totalPages, currentPage }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handlePageClick(e: PageClickEvent) {
    const { nextSelectedPage } = e;
    if (nextSelectedPage === undefined) return;
    const params = new URLSearchParams(searchParams);
    params.set("page", (nextSelectedPage + 1) as unknown as string);
    router.replace(`${pathname}?${params.toString()}`, { scroll: true });
  }
  return (
    <ReactPaginate pageCount={totalPages} initialPage={currentPage - 1} activeLinkClassName="!bg-zinc-800 border-2 border-zinc-800" className="flex items-center justify-center gap-4 py-10" pageLinkClassName="flex items-center justify-center w-[45px] h-[40px] px-2 hover:opacity-80 duration-200 text-xs rounded bg-sky-700" previousLinkClassName="text-xs bg-sky-700 rounded p-3" nextLinkClassName="text-xs bg-sky-700 rounded py-3 px-4" disabledLinkClassName="!bg-zinc-800 opacity-80" onClick={handlePageClick} />
  )
}

export default Pagination;
