
import { Gauge, Users, BarChart3 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Only match ?tab=dashboard (or no tab for overview)
  const isDashboard = location.search === "?tab=dashboard" || location.search === "" || location.search === "?tab=overview";
  const isManage = location.search === "?tab=manage";

  const routes = [
    {
      label: "Performance Dashboard",
      icon: Gauge,
      href: "/deployed-agents?tab=dashboard",
      isActive: isDashboard,
    },
    {
      label: "Manage Agents",
      icon: Users,
      href: "/deployed-agents?tab=manage",
      isActive: isManage,
    },
  ];

  return (
    <Sidebar className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-r border-white/10 shadow-lg">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="select-none text-xs font-semibold uppercase text-gray-400 mb-2 tracking-widest pl-3 pt-8 md:pt-0">
            Deployed Agents
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={route.isActive}
                  >
                    <a
                      href={route.href}
                      onClick={e => {
                        e.preventDefault();
                        navigate(route.href);
                      }}
                      className={`flex items-center gap-3 py-2 px-3 rounded-lg transition bg-transparent ${
                        route.isActive
                          ? "bg-gradient-to-r from-blue-700/30 to-purple-700/30 text-white font-semibold shadow-inner"
                          : "hover:bg-white/5 text-gray-300"
                      }`}
                    >
                      <route.icon className="w-5 h-5" />
                      <span className="text-base">{route.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
