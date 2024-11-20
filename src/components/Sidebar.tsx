import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import SearchInput from "./SearchInput";
import { links } from "@/src/constants";

function Sidebar({ showSidebar, setShowSidebar }: { showSidebar: boolean, setShowSidebar: Dispatch<SetStateAction<boolean>> }) {
  return (
    <aside
      className={`fixed left-0 top-0 ${showSidebar ? "translate-x-0" : "-translate-x-full"
        } bottom-0 h-[100dvh] bg-zinc-950 w-[300px] py-9 transition-all duration-200 z-20`}
    >
      <ul className="flex items-center flex-col gap-6 text-slate-200 text-sm transition-all duration-200">
        <li>
          <Link href="/" className="mb-12 block" onClick={() => setShowSidebar(false)}>
            <img src="/logo.svg" alt="logo" width={100} />
          </Link>
        </li>
        <li>
          <SearchInput onSubmit={() => setShowSidebar(false)} />
        </li>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} onClick={() => setShowSidebar(false)} className="hover:text-red-500">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
