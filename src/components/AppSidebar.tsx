
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

  const routes = [
    {
      label: "Overview",
      icon: Gauge,
      href: "/deployed-agents",
    },
    {
      label: "Performance Dashboard",
      icon: BarChart3,
      href: "/deployed-agents?tab=dashboard",
    },
    {
      label: "Manage Agents",
      icon: Users,
      href: "/deployed-agents?tab=manage",
    },
  ];

  const currentPath = location.pathname + location.search;

  return (
    <Sidebar className="min-h-screen bg-slate-950 border-r border-white/10 shadow-lg">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Deployed Agents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={currentPath === route.href}
                  >
                    <a
                      href={route.href}
                      onClick={e => {
                        e.preventDefault();
                        navigate(route.href);
                      }}
                      className="flex items-center gap-2"
                    >
                      <route.icon className="w-4 h-4" />
                      <span>{route.label}</span>
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
