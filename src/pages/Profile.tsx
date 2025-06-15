
import React from "react";

const Profile = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4 shadow-lg text-5xl text-white font-semibold">
      {/* Placeholder avatar */}
      U
    </div>
    <h1 className="text-3xl font-bold mb-2">User Profile</h1>
    <p className="text-gray-400 mb-6">This is your profile page. (Coming soon: Customize your info, bio, and avatar.)</p>
  </div>
);

export default Profile;
