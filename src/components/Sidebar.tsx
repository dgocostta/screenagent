"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingCart, MessageSquare, Settings, LogOut, Package } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Package, label: "Product Catalog", href: "/catalog" },
  { icon: MessageSquare, label: "AI Agents", href: "/agents" },
  { icon: ShoppingCart, label: "Orders", href: "/orders" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen w-64 border-r border-border bg-card text-card-foreground">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center font-bold text-white">
            SA
          </div>
          <h1 className="text-xl font-bold tracking-tight">ScreenAgent</h1>
        </div>
        
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-orange-600/10 text-orange-600"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-border">
        <button className="flex items-center gap-3 px-3 py-2 w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <LogOut className="w-4 h-4" />
          Log out
        </button>
      </div>
    </div>
  );
}