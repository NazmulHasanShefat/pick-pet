import Link from "next/link";

export default function ProfileSidebar() {
  return (
    <div className="px-4 py-5">
      <h2 className="text-gray-400">Menu</h2>
      <ul className="menu list flex flex-col gap-3">
        <li>
          {" "}
          <Link
            href={"/profile-dashbord"}
            className="bg-emerald-600 text-white border-transparent text-emerald-400 block rounded-lg px-3 py-1"
          >
            My Requests
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            href={"/profile-dashbord"}
            className="bg-transparent border border-emerald-400 text-emerald-400 block rounded-lg px-3 py-1"
          >
            Add pet
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            href={"/profile-dashbord"}
            className="bg-transparent border border-emerald-400 text-emerald-400 block rounded-lg px-3 py-1"
          >
            My Listings
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
}
