"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutGrid, Users, BarChart3, MessageSquare, ListTodo, GitBranch,
  Package, Tv, FolderClosed, Play, Monitor,
  Contact2, MapPin, UserCircle2, ShieldHalf, LayoutPanelLeft, Settings,
  ChevronRight
} from "lucide-react";

const navGroups = [
  {
    title: "AI AGENTS",
    items: [
      { icon: Users, label: "Agents", href: "/agent/mr-screen" },
      { icon: BarChart3, label: "Performance", href: "/performance" },
      { icon: MessageSquare, label: "Conversations", href: "/conversations" },
      { icon: ListTodo, label: "Tasks", href: "/tasks" },
      { icon: GitBranch, label: "Workflows", href: "/workflows" },
    ]
  },
  {
    title: "CONTENT & PRODUCTS",
    items: [
      { icon: Package, label: "Product Catalog", href: "/catalog" },
      { icon: Tv, label: "TV Signage", href: "/signage" },
      { icon: FolderClosed, label: "Media Library", href: "/media" },
      { icon: Play, label: "Playlists", href: "/playlists" },
      { icon: Monitor, label: "Displays", href: "/displays" },
    ]
  },
  {
    title: "CLIENTS & CONFIG",
    items: [
      { icon: Contact2, label: "Clients", href: "/clients" },
      { icon: MapPin, label: "Locations", href: "/locations" },
      { icon: UserCircle2, label: "Users", href: "/users" },
      { icon: ShieldHalf, label: "Roles & Permissions", href: "/roles" },
      { icon: LayoutPanelLeft, label: "Integrations", href: "/integrations" },
      { icon: Settings, label: "Settings", href: "/settings" },
    ]
  }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-[#1A1D21] flex flex-col border-r border-white/5 shrink-0 overflow-hidden font-sans">
      <div className="p-6 mb-4 flex items-center gap-3">
        <div className="w-8 h-8 text-[#F37C21] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 19H5.5L12 6.5z"/>
          </svg>
        </div>
        <h1 className="text-sm font-bold tracking-widest text-white uppercase">MR SCREEN</h1>
      </div>

      <div className="flex-1 px-4 space-y-7 pb-10 overflow-y-auto custom-scrollbar">
        <Link href="/" className={pathname === "/" ? "flex items-center gap-3 px-4 py-2 rounded-lg text-sm bg-[#F37C21] text-white font-bold" : "flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white"}>
          <LayoutGrid className="w-4 h-4" />
          Overview
        </Link>

        {navGroups.map((group) => (
          <div key={group.title} className="space-y-1">
            <h3 className="px-4 text-[9px] font-bold text-zinc-500 tracking-widest mb-2 uppercase">{group.title}</h3>
            {group.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={isActive ? "flex items-center gap-3.5 px-4 py-2 rounded-lg text-[11px] font-medium text-white bg-white/5 shadow-inner" : "flex items-center gap-3.5 px-4 py-2 rounded-lg text-[11px] text-zinc-500 hover:text-white transition-colors"}
                >
                  <item.icon className={isActive ? "w-4 h-4 text-[#F37C21]" : "w-4 h-4 text-zinc-600 group-hover:text-zinc-300"} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-white/5 bg-[#1A1D21]">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#2A2D32]">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-tighter">Systems Operational</span>
        </div>
      </div>
    </aside>
  );
}