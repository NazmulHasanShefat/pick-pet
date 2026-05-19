"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashBordLinks = [
  { name: "My Request", href: "/profile-dashbord" },
  { name: "Add pet", href: "/profile-dashbord/add-pet" },
  { name: "My Listings", href: "/profile-dashbord/my-listings" },
];


export default function ProfileSidebar() {
  const currentPath = usePathname();
  console.log(currentPath)
  return (
    <div className="px-4 py-5">
      <h2 className="text-gray-400">Menu</h2>
      <ul className="menu list flex flex-col gap-3">
        {DashBordLinks.map((link, index) => {
          // const currentActive = 
          return (
            <li key={index}>
              <Link
                href={link.href}
                className={`${currentPath === link.href ? "bg-emerald-600 text-white": ""} text-emerald-400 border border-emerald-400 block rounded-lg px-3 py-1`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
