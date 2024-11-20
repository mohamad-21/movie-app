"use client";

import ButtonIcon from "@/src/components/ButtonIcon";
import Navbar from "@/src/components/Navbar";
import SearchInput from "@/src/components/SearchInput";
import Sidebar from "@/src/components/Sidebar";
import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header
        className={`sticky flex items-center justify-center w-full backdrop-blur-lg bg-background top-0 left-0 gap-4 py-2 z-10 `}
      >
        <div className="flex items-center justify-between w-full max-w-5xl px-7">
          <Link href="/" className="max-lg:block hidden">
            <img src="/logo.svg" alt="logo" width={100} />
          </Link>
          <Navbar />
          <div className="flex items-center flex-1 justify-end gap-5 overflow-hidden">
            <div className="max-lg:hidden">
              <SearchInput />
            </div>
            {/* <Button color="red" className="text-sm font-bold">
              Signup
            </Button> */}
            <ButtonIcon
              onClick={() => setShowSidebar(!showSidebar)}
              color="ghost"
              className="lg:hidden"
              icon={<IconMenu />}
            />
          </div>
        </div>
      </header>
      {showSidebar && (
        <>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[15] transition-all duration-200"
            onClick={() => setShowSidebar(false)}
          />
        </>
      )}
    </>
  );
}

export default Header;
