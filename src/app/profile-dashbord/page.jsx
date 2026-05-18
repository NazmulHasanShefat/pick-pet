import MyRequestCard from "./my-requests/MyRequestCard";

export default function ProfileDashbord() {
  return (
    <div className="px-5 pt-10">
     <h1 className="text-2xl">My Adation Requests</h1>
     <p className="text-gray-500">Track your adation Requests</p>

     <div className="adaption_request_cards grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <MyRequestCard />
        <MyRequestCard />
        <MyRequestCard />
        <MyRequestCard />
        <MyRequestCard />
        <MyRequestCard />
     </div>
    </div>
  );
}