import ProfileSidebar from "@/components/profile-dashbord/profile-sidebar/ProfileSidebar";

export default function ProfileLayout({ children }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12">
      <div className="col-span-2">
        <ProfileSidebar />
      </div>
      <div className="col-span-10">{children}</div>
    </section>
  );
}
