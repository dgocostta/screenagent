"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutGrid, Users, BarChart3, MessageSquare, ListTodo, GitBranch,
  Package, Tv, FolderClosed, Play, Monitor,
  Contact2, MapPin, UserCircle2, ShieldHalf, LayoutPanelLeft, Settings,
  ChevronDown
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
    <aside className="w-[240px] h-screen bg-[#09090b] flex flex-col border-r border-white/5 shrink-0 overflow-hidden font-sans">
      <div className="p-6 mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FF6B00] flex items-center justify-center rounded-lg shadow-lg rotate-3 shadow-orange-600/30">
            <span className="text-white font-black text-xl italic tracking-tighter">M</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xs font-black tracking-widest text-white uppercase italic leading-none">MR SCREEN</h1>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 space-y-6 pb-10 overflow-y-auto custom-scrollbar">
        <nav>
          <Link href="/" className="flex items-center gap-3 px-4 py-2 rounded-lg text-[#FF6B00] bg-[#FF6B00]/10 font-bold text-xs transition-all">
            <LayoutGrid className="w-4 h-4" />
            Overview
          </Link>
        </nav>

        {navGroups.map((group) => (
          <div key={group.title} className="space-y-1">
            <h3 className="px-4 text-[9px] font-black text-zinc-500 tracking-[0.2em] mb-2 uppercase">{group.title}</h3>
            {group.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-[11px] font-semibold transition-all ${isActive ? 'text-white bg-white/5' : 'text-zinc-500 hover:text-zinc-100 hover:bg-white/[0.02]'}`}
                >
                  <item.icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FF6B00]' : 'text-zinc-600'}`} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      <div className="p-4 space-y-2 mt-auto border-t border-white/5 bg-[#09090b]">
        <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#121214] border border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-tight">System Operational</span>
          </div>
        </div>
      </div>
    </aside>
  );
}