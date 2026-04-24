import { Sidebar } from "../components/Sidebar";
import { ThemeToggle } from "../components/ThemeToggle";
import { Users, ShoppingBag, MessageCircle, ArrowUpRight, Activity, Zap } from "lucide-react";

const stats = [
  { label: "Active Agents", value: "12", icon: Zap, trend: "+2 this week", color: "text-orange-500", bg: "bg-orange-500/10" },
  { label: "Total Leads", value: "1,284", icon: Users, trend: "+12.5%", color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Orders Closed", value: "432", icon: ShoppingBag, trend: "+8.2%", color: "text-green-500", bg: "bg-green-500/10" },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#09090b] text-zinc-100 selection:bg-orange-500/30">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto overflow-x-hidden border-l border-white/5">
        <header className="h-20 flex items-center justify-between px-10 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
          <div className="space-y-0.5">
            <h2 className="text-xl font-bold tracking-tight text-white">Pulse Overview</h2>
            <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Real-time business performance</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-sm font-semibold text-white">Andrew (Admin)</span>
              <span className="text-[10px] text-orange-500 font-bold uppercase tracking-tighter bg-orange-500/10 px-1.5 py-0.5 rounded">Super Admin</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 border-2 border-white/10 flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20">
              AS
            </div>
            <ThemeToggle />
          </div>
        </header>

        <div className="p-10 space-y-10 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="group bg-[#121214] border border-white/5 p-8 rounded-3xl hover:border-orange-500/50 hover:bg-[#161618] transition-all duration-300 shadow-2xl shadow-black/50">
                <div className="flex items-center justify-between mb-6">
                  <div className={cn("p-3 rounded-2xl", stat.bg)}>
                    <stat.icon className={cn("w-6 h-6", stat.color)} />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 shadow-inner">
                    <span className="text-[11px] font-bold text-zinc-300">{stat.trend}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-green-500" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <p className="text-sm text-zinc-400 font-medium tracking-wide uppercase tracking-widest text-[10px]">{stat.label}</p>
                  <p className="text-4xl font-black tracking-tighter text-white tabular-nums">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#121214] border border-white/5 p-8 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8">
                 <Activity className="w-5 h-5 text-orange-500/20 group-hover:text-orange-500/50 transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-zinc-200 mb-8 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Agent Conversations
              </h3>
              <div className="h-[300px] flex items-center justify-center text-zinc-500 italic border-2 border-dashed border-white/5 rounded-2xl bg-zinc-900/50 group-hover:bg-zinc-900/80 transition-colors">
                <div className="text-center space-y-2">
                  <p className="font-medium text-zinc-400">Live Stream Initializing...</p>
                  <p className="text-[10px] uppercase tracking-tighter">Waiting for incoming traffic</p>
                </div>
              </div>
            </div>

            <div className="bg-[#121214] border border-white/5 p-8 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8">
                 <ShoppingBag className="w-5 h-5 text-green-500/20 group-hover:text-green-500/50 transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-zinc-200 mb-8 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Recent Orders
              </h3>
              <div className="h-[300px] flex items-center justify-center text-zinc-500 italic border-2 border-dashed border-white/5 rounded-2xl bg-zinc-900/50 group-hover:bg-zinc-900/80 transition-colors">
                <div className="text-center space-y-2">
                  <p className="font-medium text-zinc-400">Transaction Stream Secure</p>
                  <p className="text-[10px] uppercase tracking-tighter">No orders in last 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}