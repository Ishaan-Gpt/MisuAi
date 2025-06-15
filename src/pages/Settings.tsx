
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { BackButton } from "@/components/ui/BackButton";
import { Settings as SettingsIcon, Bell, Lock, User as UserIcon } from "lucide-react";

const Settings = () => (
  <DashboardLayout
    title="Settings"
    subtitle="Adjust your AI Assistant settings, account, and integrations."
  >
    <BackButton />
    <div className="bg-white/5 rounded-2xl p-10 border border-white/10 text-gray-300 shadow animate-fade-in flex flex-col gap-5">
      <div className="flex items-center gap-3 mb-3">
        <SettingsIcon className="text-purple-400" />
        <span className="font-semibold text-xl text-white">User Preferences</span>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 p-5 rounded-lg bg-slate-900/70 border border-purple-900/30">
          <span className="flex items-center gap-2 text-white font-medium text-lg mb-2">
            <UserIcon className="text-blue-400" /> Account
          </span>
          <p className="text-gray-400 text-sm mb-2">Change username, email, or password.</p>
          <button className="px-4 py-2 rounded bg-purple-500/80 text-white font-semibold hover:scale-105 transition-transform shadow mt-2">Edit Account</button>
        </div>
        <div className="flex-1 p-5 rounded-lg bg-slate-900/70 border border-purple-900/30">
          <span className="flex items-center gap-2 text-white font-medium text-lg mb-2">
            <Bell className="text-yellow-400" /> Notifications
          </span>
          <p className="text-gray-400 text-sm mb-2">Toggle updates & activity alerts.</p>
          <button className="px-4 py-2 rounded bg-purple-500/80 text-white font-semibold hover:scale-105 transition-transform shadow mt-2">Manage Notifications</button>
        </div>
        <div className="flex-1 p-5 rounded-lg bg-slate-900/70 border border-purple-900/30">
          <span className="flex items-center gap-2 text-white font-medium text-lg mb-2">
            <Lock className="text-pink-400" /> Privacy
          </span>
          <p className="text-gray-400 text-sm mb-2">Manage privacy & security settings.</p>
          <button className="px-4 py-2 rounded bg-purple-500/80 text-white font-semibold hover:scale-105 transition-transform shadow mt-2">Privacy Settings</button>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Settings;
