
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Profile = () => (
  <DashboardLayout title="Your Profile" subtitle="Update your info, bio, and avatar.">
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4 shadow-lg text-5xl text-white font-semibold">
        U
      </div>
      <div className="mt-4 text-lg text-gray-300 font-medium">Username Placeholder</div>
      <div className="text-gray-400 mb-6">A short user bio goes here. (Profile edit coming soon!)</div>
    </div>
  </DashboardLayout>
);

export default Profile;
