import ProfileSidebar from "@/components/profile-dashbord/profile-sidebar/ProfileSidebar";

export default function ProfileLayout({ children }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 w-full max-w-7xl mx-auto">
      <div className="lg:col-span-2 col-span-3">
        <ProfileSidebar />
      </div>
      <div className="lg:col-span-10 col-span-9">{children}</div>
    </section>
  );
}
