import Link from "next/link";
import React from "react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandX } from "@tabler/icons-react";

function Footer() {
  return (
    <footer className="pt-24">
      <div className="flex justify-between flex-wrap gap-10 px-7 max-w-5xl mx-auto">
        <div className="text-sm">
          <h3 className="mb-3">Company</h3>
          <ul className="flex flex-col gap-1 text-zinc-400">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Carrers</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="mb-3">Need Help</h3>
          <ul className="flex flex-col gap-1 text-zinc-400">
            <li>
              <Link href="#">Visit help center?</Link>
            </li>
            <li>
              <Link href="#">Share feedback</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm mb-3">Social media</h3>
          <ul className="flex gap-2 text-zinc-400">
            <li>
              <Link
                className="flex p-2 rounded-full bg-zinc-700 text-white hover:opacity-80 duration-200"
                href="#"
              >
                <IconBrandInstagram />
              </Link>
            </li>
            <li>
              <Link
                className="flex p-2 rounded-full bg-zinc-700 text-white hover:opacity-80 duration-200"
                href="#"
              >
                <IconBrandX />
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="mb-3">Download Our App</h3>
          <ul className="flex items-center justify-center flex-col gap-1 text-zinc-400">
            <li>
              <Link href="#">
                <img src="/images/appstore.svg" alt="appstore" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <img src="/images/googleplay.svg" alt="googleplay" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-zinc-700 py-5">
        <div className="px-7 max-w-5xl mx-auto flex items-center justify-between md:flex-row flex-col gap-7">
          <div className="flex items-center justify-center flex-wrap gap-6 text-zinc-400 text-xs">
            <p>© 2023 STREAM X. All Rights Reserved.</p>
            <Link href="#">Terms Of Use</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">FAQ</Link>
          </div>
          <div>
            <img src="/logo.svg" alt="logo" width={100} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
