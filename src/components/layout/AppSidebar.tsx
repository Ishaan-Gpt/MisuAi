
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  BarChart2,
  History as HistoryIcon,
  Rocket,
  UserCircle2,
  Settings as SettingsIcon,
  LogOut,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

const menu = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart2,
  },
  {
    title: "History",
    url: "/history",
    icon: HistoryIcon,
  },
  {
    title: "Deployed Agents",
    url: "/deployed-agents",
    icon: Rocket,
  },
];

const user = [
  {
    title: "Profile",
    url: "/profile",
    icon: UserCircle2,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: SettingsIcon,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sidebar className="min-h-screen border-r border-white/10 bg-gradient-to-b from-slate-950 to-gray-900 w-64">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-purple-300 text-sm pt-2 pb-1">Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className={clsx(
                          "flex items-center gap-2 px-3 py-2 w-full rounded transition-colors",
                          isActive
                            ? "bg-purple-600/30 text-purple-200 font-semibold shadow"
                            : "hover:bg-purple-400/10 text-gray-300"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-purple-300 text-sm pt-4 pb-1">Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {user.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className={clsx(
                          "flex items-center gap-2 px-3 py-2 w-full rounded transition-colors",
                          isActive
                            ? "bg-purple-600/30 text-purple-200 font-semibold shadow"
                            : "hover:bg-purple-400/10 text-gray-300"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button
                    onClick={() => {
                      // Placeholder: add sign out logic if needed
                      navigate("/");
                    }}
                    className="flex items-center gap-2 px-3 py-2 w-full rounded hover:bg-red-300/10 transition-colors text-red-300"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sign out</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
