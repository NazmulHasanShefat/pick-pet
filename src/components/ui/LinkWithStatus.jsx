"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkWithStatus({children, href, className}) {
    const currentPath = usePathname();
  return (
    <Link href={href} className={`${currentPath === href ? "bg-emerald-600 border-transparent text-white": "border-emerald-500 text-emerald-500"} rounded-xl border ${className}`}>
      {children}
    </Link>
  );
}