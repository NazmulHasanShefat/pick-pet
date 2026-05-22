"use client"
import { MdApps, MdMenuOpen } from "react-icons/md";
import LinkWithStatus from "../ui/LinkWithStatus";
import { FaUserPlus } from "react-icons/fa6";
import { ThemeSwitch } from "../ui/ThemeToggler";
import { LuLogIn } from "react-icons/lu";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import { iso } from "better-auth";


export default function MobileMenu({session}) {
    const [isOpen, setOpen] = useState(false)
    const handleMenuToggle = ()=>{
        setOpen((prev)=> !prev)
    }
    return (
    <div className="md:hidden">
      <MdMenuOpen onClick={handleMenuToggle} size={35} className="md:hidden" />
      <div>
        <div className={`dropshadow fixed inset-0 bg-black/50 z-10 ${isOpen ? "block": "hidden"}`}></div>
        <ul className={`flex flex-col items-center fixed top-0 bg-white px-5 z-20 left-0 dark:bg-gray-900 h-screen gap-5 md:hidden ${isOpen ? "flex": "hidden"}`}>
          <div className="w-full flex justify-end">
          <AiOutlineCloseSquare onClick={handleMenuToggle} size={35} className="float-end"/>
          </div>
          <li className="mt-10" onClick={handleMenuToggle}>
            {" "}
            <LinkWithStatus
              href={"/"}
              className="px-4 py-2 flex items-center gap-2"
            >
              <button>
                <MdApps size={15} />
              </button>
              Home
            </LinkWithStatus>{" "}
          </li>

          <li onClick={handleMenuToggle}>
            {" "}
            <LinkWithStatus
              href={"/all-pets"}
              className="px-4 py-2 flex items-center gap-2"
            >
              <button>
                <MdApps size={15} />
              </button>
              All pets
            </LinkWithStatus>{" "}
          </li>

          {!session ? (
            <>
              <li onClick={handleMenuToggle}>
                {" "}
                <LinkWithStatus
                  href={"/login"}
                  className="px-4 py-2 flex items-center gap-2"
                >
                  <button>
                    <LuLogIn size={15} />
                  </button>
                  Login
                </LinkWithStatus>{" "}
              </li>
              <li onClick={handleMenuToggle}>
                {" "}
                <LinkWithStatus
                  href={"/signup"}
                  className="px-4 py-2 flex items-center gap-2"
                >
                  <button>
                    <FaUserPlus size={15} />
                  </button>
                  SignUp
                </LinkWithStatus>{" "}
              </li>
            </>
          ) : (
            <>
               <li onClick={handleMenuToggle}>
                {" "}
                <LinkWithStatus
                  href={"/profile-dashbord"}
                  className="px-4 py-2 flex items-center gap-2"
                >
                  <button>
                    <FaUserPlus size={15} />
                  </button>
                  Dashbord
                </LinkWithStatus>{" "}
              </li>
            </>
          )}

          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </div>
    </div>
  );
}
