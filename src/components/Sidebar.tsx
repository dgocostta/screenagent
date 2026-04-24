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
    <aside className="w-[280px] h-screen bg-[#09090b] flex flex-col border-r border-white/5 shrink-0 overflow-hidden">
      <div className="p-8 mb-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#FF6B00] flex items-center justify-center rounded-lg shadow-lg rotate-3 shadow-orange-600/30">
            <span className="text-white font-black text-2xl italic tracking-tighter -rotate-3">M</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-black tracking-widest text-white uppercase italic leading-none">MR SCREEN</h1>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 space-y-9 pb-10 overflow-y-auto">
        <div>
          <Link href="/" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[#FF6B00] bg-[#FF6B00]/10 font-bold text-sm border border-orange-500/10 transition-all">
            <LayoutGrid className="w-4 h-4" />
            Overview
          </Link>
        </div>

        {navGroups.map((group) => (
          <div key={group.title} className="space-y-1.5">
            <h3 className="px-4 text-[10px] font-black text-zinc-500 tracking-[0.2em] mb-4 uppercase">{group.title}</h3>
            {group.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all group ${isActive ? 'text-white bg-white/5 shadow-inner' : 'text-zinc-500 hover:text-zinc-100 hover:bg-white/[0.02]'}`}
                >
                  <item.icon className={`w-4 h-4 ${isActive ? 'text-[#FF6B00]' : 'text-zinc-600 group-hover:text-zinc-300'}`} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      <div className="p-6 space-y-2 mt-auto border-t border-white/5 bg-[#09090b]">
        <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#121214] border border-white/5 mb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse"></span>
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-tight">System Status</span>
          </div>
          <ChevronDown className="w-3 h-3 text-zinc-600 rotate-[-90deg]" />
        </div>
        <button className="flex items-center gap-3 px-4 py-2 text-[11px] font-black text-zinc-600 hover:text-zinc-200 transition-colors w-full uppercase italic tracking-widest">
          <LayoutPanelLeft className="w-4 h-4 rotate-180" />
          Collapse
        </button>
      </div>
    </aside>
  );
}