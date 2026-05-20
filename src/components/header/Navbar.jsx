import Image from "next/image";
import Link from "next/link";
import { FaUserPlus } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { MdApps } from "react-icons/md";
import { ThemeSwitch } from "../ui/ThemeToggler";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import UserAvater from "./UserAvater";

export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  return (
    <nav className="w-full border-2 rounded-b-3xl dark:border-t-0 flex items-center border-emerald-400 border-t-0 justify-between px-5 py-3">
      <Link href={"/"} className="flex items-center gap-3">
        <Image
          src={`/logo.png`}
          width={100}
          height={60}
          alt="logo"
          className="w-[50px]"
        />
        <h2 className="font-bold text-3xl italic">
          Pick<span className="text-emerald-500">Pet</span>
        </h2>
      </Link>
      <ul className="flex items-center gap-5">
        <li>
          {" "}
          <Link
            href={"/all-pets"}
            className="px-4 py-2 flex items-center gap-2 bg-emerald-600 dark:hover:border-transparent text-white rounded-xl hover:bg-emerald-500"
          >
            <button>
              <MdApps size={15} />
            </button>
           Home
          </Link>{" "}
        </li>
     
        <li>
          {" "}
          <Link
            href={"/all-pets"}
            className="px-4 py-2 flex items-center gap-2 bg-emerald-600 dark:hover:border-transparent text-white rounded-xl hover:bg-emerald-500"
          >
            <button>
              <MdApps size={15} />
            </button>
            All pets
          </Link>{" "}
        </li>

        {!session ? (
          <>
            <li>
              {" "}
              <Link
                href={"/login"}
                className="px-4 flex dark:text-white dark:border-white dark:hover:border-transparent items-center gap-2 py-2 bg-transparent border-2 border-emerald-600 hover:text-white hover:border-transparent text-emerald-600 rounded-xl hover:bg-emerald-500"
              >
                <button>
                  <LuLogIn size={15} />
                </button>
                Login
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                href={"/signup"}
                className="px-4 flex items-center dark:text-white dark:hover:border-transparent dark:border-white gap-2 py-2 bg-transparent border-2 border-emerald-600 hover:text-white hover:border-transparent text-emerald-600 rounded-xl hover:bg-emerald-500"
              >
                <button>
                  <FaUserPlus size={15} />
                </button>
                SignUp
              </Link>{" "}
            </li>
          </>
        ) : (
          <>
          <UserAvater session={session} />
          </>
        )}

        <li>
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  );
}
