import Link from "next/link";
import React from "react";
import { links } from "@/src/constants";

function Navbar() {
  return (
    <ul
      className={`lg:flex hidden items-center gap-6 text-slate-200 text-sm transition-all duration-200`}
    >
      <li>
        <Link href="/" className="max-lg:mb-12 block">
          <img src="/logo.svg" alt="logo" width={100} />
        </Link>
      </li>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="hover:text-red-500">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
