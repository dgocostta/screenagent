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
    <aside className="w-64 h-screen bg-[#09090b] flex flex-col border-r border-white/5 shrink-0 overflow-hidden font-sans">
      <div className="p-6 mb-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#FF6B00] flex items-center justify-center rounded-lg shadow-lg rotate-2 shadow-orange-600/20">
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-white -rotate-2" fill="currentColor">
            <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 19H5.5L12 6.5z"/>
          </svg>
        </div>
        <div className="flex flex-col leading-none">
          <h1 className="text-sm font-black tracking-widest text-white uppercase italic">MR SCREEN</h1>
        </div>
      </div>

      <div className="flex-1 px-4 space-y-8 pb-10 overflow-y-auto">
        <div>
          <Link href="/" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[#FF6B00] bg-[#FF6B00]/10 font-bold text-xs transition-all border border-[#FF6B00]/20">
            <LayoutGrid className="w-4 h-4" />
            Overview
          </Link>
        </div>

        {navGroups.map((group) => (
          <div key={group.title} className="space-y-1">
            <h3 className="px-4 text-[9px] font-black text-zinc-500 tracking-[0.2em] mb-4 uppercase">{group.title}</h3>
            {group.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-4 px-4 py-2 rounded-xl text-[12px] font-medium transition-all group ${isActive ? 'text-white bg-white/5 shadow-inner' : 'text-zinc-500 hover:text-zinc-100'}`}
                >
                  <item.icon className={`w-4 h-4 transition-colors ${isActive ? 'text-[#FF6B00]' : 'text-zinc-600 group-hover:text-zinc-300'}`} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      <div className="p-6 space-y-2 mt-auto border-t border-white/5 bg-[#09090b]">
        <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#121214] border border-white/5 group cursor-pointer hover:bg-white/[0.02] transition-all">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-zinc-200 uppercase leading-none">System Status</span>
              <span className="text-[8px] font-bold text-zinc-600 uppercase mt-0.5 tracking-tighter">All Systems Operational</span>
            </div>
          </div>
          <ChevronRight className="w-3 h-3 text-zinc-700" />
        </div>
        <button className="flex items-center gap-4 px-4 py-3 text-[11px] font-bold text-zinc-500 hover:text-zinc-100 transition-colors w-full uppercase tracking-widest leading-none">
          <LayoutPanelLeft className="w-4 h-4 rotate-180" />
          Collapse
        </button>
      </div>
    </aside>
  );
}