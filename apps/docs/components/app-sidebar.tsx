"use client";

import * as React from "react";
import {
  BookOpen,
  Command,
  Terminal,
  Component,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

type SubItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
};

type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: SubItem[];
};

type NavGroup = {
  title: string;
  url?: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items: NavItem[];
};

// Menu items.
const navMain: NavGroup[] = [
  {
    title: "Application",
    url: "#",
    icon: LayoutTemplate,
    isActive: true,
    items: [
      {
        title: "Playground",
        url: "/",
        icon: Command,
      },
    ],
  },
  {
    title: "Documentation",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "Introduction",
        url: "/docs",
        icon: Terminal,
      },
      {
        title: "Components",
        url: "#",
        icon: Component,
        items: [
          {
            title: "DynamicIsland",
            url: "/docs/components/dynamic-island",
          },
        ],
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    React Dynamic Island
                  </span>
                  <span className="truncate text-xs">Documentation</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.items && item.items.length > 0 ? (
                      <>
                        <SidebarMenuButton
                          tooltip={item.title}
                          className="font-medium text-muted-foreground"
                        >
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                        <SidebarMenu className="ml-2 border-l pl-2">
                          {item.items.map((subItem) => (
                            <SidebarMenuItem key={subItem.title}>
                              <SidebarMenuButton
                                asChild
                                isActive={pathname === subItem.url}
                                size="sm"
                              >
                                <Link href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </>
                    ) : (
                      <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                        isActive={pathname === item.url}
                      >
                        <Link href={item.url}>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground text-center">
          v0.1.0
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
