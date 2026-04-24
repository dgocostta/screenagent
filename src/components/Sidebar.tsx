"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingCart, MessageSquare, Settings, LogOut, Package, ShieldCheck } from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Package, label: "Product Catalog", href: "/catalog" },
  { icon: MessageSquare, label: "AI Agents", href: "/agent/mr-screen" },
  { icon: ShoppingCart, label: "Orders", href: "/orders" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen w-72 bg-[#09090b] text-zinc-400 border-r border-white/5 p-8">
      <div className="flex items-center gap-3 mb-12 group cursor-pointer px-2">
        <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/20 group-hover:scale-110 transition-transform duration-300">
          <ShieldCheck className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-black tracking-tighter text-white uppercase italic">ScreenAgent</h1>
          <span className="text-[10px] font-bold text-orange-500/80 uppercase tracking-[0.2em] -mt-1 ml-0.5">Enterprise</span>
        </div>
      </div>
      
      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 group
                ${isActive 
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-600/20" 
                  : "hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-zinc-500 group-hover:text-orange-500"} transition-colors`} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-6">
        <div className="bg-gradient-to-br from-zinc-900 to-[#121214] border border-white/5 p-6 rounded-3xl space-y-3 relative overflow-hidden">
          <div className="relative z-10 space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Subscription</p>
            <p className="text-sm font-bold text-white tracking-tight">Pro Plan</p>
          </div>
          <div className="relative z-10 w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-orange-600 rounded-full shadow-[0_0_8px_rgba(234,88,12,0.5)]" />
          </div>
        </div>

        <button className="flex items-center gap-4 px-4 py-3 w-full text-sm font-bold text-zinc-500 hover:text-red-400 transition-colors group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all">
             <LogOut className="w-4 h-4" />
          </div>
          Log out
        </button>
      </div>
    </div>
  );
}