
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { BackButton } from "@/components/ui/BackButton";
import { UserCircle2, AtSign, Mail, Users } from "lucide-react";

const Profile = () => (
  <DashboardLayout title="Your Profile" subtitle="Update your info, bio, and avatar.">
    <BackButton />
    <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-white/10 rounded-2xl p-9 shadow animate-fade-in">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg text-6xl text-white font-semibold">
        <UserCircle2 className="w-24 h-24" />
      </div>
      <div className="flex-1 space-y-3">
        <div className="font-semibold text-white text-xl flex items-center gap-2">
          <AtSign className="w-5 h-5 text-blue-400" /> 
          Username <span className="text-gray-400 text-base ml-2">/ user123</span>
        </div>
        <div className="text-gray-400">A short user bio goes here. Real editing features are coming soon!</div>
        <div className="flex gap-5 mt-4">
          <div className="flex items-center gap-2 text-gray-300">
            <Mail className="w-5 h-5 text-cyan-300" /> user@email.com
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Users className="w-5 h-5 text-purple-300" /> 12,500 followers
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Profile;
