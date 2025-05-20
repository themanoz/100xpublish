"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LucideIcon, Youtube } from "lucide-react";
// import Teams from "./Teams";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  {
    label: "Recent videos",
    href: "/dashboard/videos",
    icon: Youtube,
  },
];

const channels = [
  {
    id: "adfadsfasdfasdf",
    name: "100xDevs",
    avatar: "/100xdevs.jpeg",
  },
  {
    id: "akdlkjasdfasdfoij",
    name: "Harkirat Singh",
    avatar: "/kirat.jpeg",
  },
];

export default function DashboardSideBar() {
  return (
    <Sidebar collapsible="offcanvas" variant="floating">
      <SidebarHeader className="text-center font-semibold">
        {/* <Teams /> */}
        100xPublish
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Channels</SidebarGroupLabel>
          <SidebarMenu>
            {channels.map((channel) => (
              <SidebarMenuItem key={channel.name}>
                <Link
                  href={`/dashboard/channel/${channel.id}`}
                  className="flex items-center gap-2"
                >
                  <SidebarMenuButton>
                  <Image
                      src={channel.avatar}
                      alt="avatar"
                      width={25}
                      height={25}
                      className="object-cover rounded-xl"
                    />
                    {channel.name}
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <SidebarMenuButton>Add channel</SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
