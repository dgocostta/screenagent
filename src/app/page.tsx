"use client";

import { Sidebar } from "../components/Sidebar";
import { 
  Bell, Search, HelpCircle, ChevronDown, Plus, 
  Settings2, Download, TrendingUp, Edit2, Trash2, Maximize2, RefreshCw, ShieldHalf, MapPin, Menu, Info
} from "lucide-react";

const metrics = [
  { label: "Total Conversations", value: "2,847", change: "18.6%", trend: "up", path: "M0,20 Q15,5 30,18 T60,10 T100,15" },
  { label: "Resolution Rate", value: "92.4%", change: "6.3%", trend: "up", path: "M0,15 Q20,25 40,10 T80,15 T100,5" },
  { label: "Avg. Response Time", value: "1.38s", change: "12.7%", trend: "down", path: "M0,25 Q30,15 50,20 T100,10" },
  { label: "Customer Satisfaction", value: "4.7 / 5", change: "5.1%", trend: "up", path: "M0,20 Q15,5 30,18 T60,10 T100,15" },
  { label: "Tasks Completed", value: "1,243", change: "15.3%", trend: "up", path: "M0,15 Q40,5 60,20 T100,10" },
];

const catalogItems = [
  { id: 1, name: "UltraView 27-inch 4K Monitor", sku: "MR-27U4K", price: "$299.99", image: "https://i.ebayimg.com/images/g/8QwAAeSwU2BpG7Qs/s-l1600.jpg" },
  { id: 2, name: "UltraView 32-inch Curved Monitor", sku: "MR-32CURV", price: "$399.99", image: "https://i.ebayimg.com/images/g/g5sAAeSwCVhpG7j1/s-l1600.jpg" },
  { id: 3, name: "ProDisplay 24-inch FHD Monitor", sku: "MR-24FHD", price: "$149.99", image: "https://i.ebayimg.com/images/g/0NEAAeSw2tRogphK/s-l1600.jpg" }
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#09090b] text-white font-sans overflow-hidden selection:bg-[#FF6B00]/30">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-[#09090b]">
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#09090b] shrink-0">
          <div className="flex items-center gap-6">
             <Menu className="w-5 h-5 text-zinc-500 cursor-pointer" />
             <h2 className="text-sm font-bold tracking-tight text-zinc-300 uppercase italic">Multi-Agent Business Console</h2>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6 text-zinc-500 border-r border-white/5 pr-8">
               <Search className="w-5 h-5 cursor-pointer" />
               <div className="relative">
                 <Bell className="w-5 h-5 cursor-pointer" />
                 <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#FF6B00] rounded-full border-2 border-[#09090b] flex items-center justify-center text-[7px] font-black text-white">3</span>
               </div>
               <HelpCircle className="w-5 h-5 cursor-pointer" />
            </div>
            <div className="flex items-center gap-4">
               <div className="flex flex-col items-end leading-none">
                 <span className="text-[13px] font-black text-white">Alex Johnson</span>
                 <span className="text-[9px] text-zinc-500 font-bold uppercase mt-1">Super Admin</span>
               </div>
               <div className="w-10 h-10 rounded-full border-2 border-white/5 p-0.5 bg-zinc-800">
                  <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=FF6B00&color=fff" className="w-full h-full rounded-full" alt="Avatar" />
               </div>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar">
          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl font-black tracking-tight uppercase italic leading-none">Client: MR Screen</h1>
                <span className="bg-green-500/10 text-green-500 text-[10px] font-black px-3 py-1 rounded-md border border-green-500/20 uppercase tracking-widest">Active</span>
              </div>
              <div className="flex items-center gap-10 text-[11px] text-zinc-500 font-black uppercase tracking-[0.15em]">
                <span className="flex items-center gap-2.5"><ShieldHalf className="w-4 h-4 text-[#FF6B00]" /> Client ID: 10027</span>
                <span className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-[#FF6B00]" /> 12 Locations</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-[#121214] border border-white/5 rounded-xl text-[11px] font-black text-zinc-400 uppercase">Client Settings</button>
              <button className="px-7 py-3 bg-[#FF6B00] rounded-xl text-[11px] font-black text-white uppercase italic tracking-widest shadow-2xl shadow-orange-600/40">+ New Agent</button>
            </div>
          </div>
          <div className="bg-[#121214] border border-white/5 rounded-[32px] p-8 shadow-2xl space-y-8 relative overflow-hidden">
            <h3 className="text-[14px] font-black tracking-[0.25em] uppercase italic text-zinc-100">AI Agent Performance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
               {metrics.map((m) => (
                 <div key={m.label} className="bg-black/20 border border-white/5 p-7 rounded-[32px] space-y-7 hover:border-[#FF6B00]/40 transition-all">
                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{m.label}</span>
                    <div className="flex items-baseline gap-3">
                       <span className="text-3xl font-black italic text-zinc-100 tracking-tighter">{m.value}</span>
                       <span className={`text-[10px] font-black text-green-500 uppercase italic`}>+{m.change}</span>
                    </div>
                    <div className="h-10 flex items-end">
                       <svg width="100%" height="32" viewBox="0 0 100 32" preserveAspectRatio="none" className="overflow-visible"><path d={m.path} fill="none" stroke="#FF6B00" strokeWidth="3" strokeLinecap="round" className="animate-pulse" /></svg>
                    </div>
                    <div className="text-[9px] font-black text-zinc-700 uppercase italic opacity-60">vs May 11 – May 17</div>
                 </div>
               ))}
            </div>
          </div>
          <div className="flex border-b border-white/5 px-2">
              <button className="pb-5 text-[12px] font-black uppercase italic tracking-[0.2em] border-b-2 border-[#FF6B00] text-[#FF6B00]">Product Catalog</button>
              <button className="pb-5 px-12 text-[12px] font-black uppercase italic tracking-[0.2em] text-zinc-600">TV Signage</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-3 flex flex-col bg-[#121214] border border-white/5 rounded-[44px] overflow-hidden shadow-2xl min-h-[600px]">
                 <div className="p-8 border-b border-white/5 bg-black/10 flex justify-between items-center">
                    <h3 className="text-[14px] font-black uppercase italic text-white">Product Catalog</h3>
                    <button className="bg-[#FF6B00] text-white text-[10px] font-black px-6 py-3 rounded-xl uppercase shadow-lg shadow-orange-600/30 font-black">+ Add Product</button>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead className="bg-black/20 text-[10px] font-black text-zinc-700 uppercase tracking-widest border-b border-white/5 sticky top-0">
                          <tr><th className="px-10 py-6">Product</th><th className="px-6 py-6">Price</th><th className="px-6 py-6 text-right">Status</th></tr>
                       </thead>
                       <tbody className="divide-y divide-white/5 text-[13px] font-bold text-zinc-400">
                          {catalogItems.map(item => (
                            <tr key={item.id} className="hover:bg-white/[0.015] transition-colors group">
                               <td className="px-10 py-6 flex items-center gap-6">
                                  <img src={item.image} className="w-16 h-16 rounded-2xl object-cover shadow-2xl" alt="product" />
                                  <div className="flex flex-col"><span className="text-zinc-100 font-black text-base">{item.name}</span><span className="text-[10px] text-zinc-700 uppercase font-black tracking-widest mt-1">SKU: {item.sku}</span></div>
                               </td>
                               <td className="px-6 py-6 font-black text-white italic text-lg">{item.price}</td>
                               <td className="px-6 py-6 text-right"><span className="bg-green-500/10 text-green-500 text-[9px] font-black uppercase px-4 py-1.5 rounded-full border border-green-500/20 shadow-inner tracking-widest">Active</span></td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
              <div className="lg:col-span-2 bg-[#121214] border border-white/5 rounded-[44px] shadow-2xl flex flex-col items-center justify-center p-14 space-y-12 relative overflow-hidden group">
                 <div className="flex flex-col items-center gap-4 relative z-10 scale-110">
                    <div className="w-14 h-14 bg-[#FF6B00] rounded-2xl flex items-center justify-center shadow-[0_0_40px_#FF6B00] rotate-6 border border-white/20 shadow-orange-600/70"><svg viewBox="0 0 24 24" className="w-8 h-8 text-white -rotate-6" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4.5L18.5 19H5.5L12 6.5z"/></svg></div>
                    <span className="text-[14px] font-black uppercase tracking-[0.7em] italic text-[#FF6B00]">MR SCREEN</span>
                 </div>
                 <h4 className="text-7xl font-black uppercase italic tracking-tighter text-center leading-[0.8] text-white relative z-10">SEE MORE.<br /><span className="text-[#FF6B00]">DO MORE.</span></h4>
                 <button className="bg-[#FF6B00] text-white text-[13px] font-black px-14 py-4 rounded-full shadow-[0_0_80px_rgba(255,107,0,0.8)] uppercase italic tracking-widest transform transition-all duration-700 border-2 border-white/10 relative z-10">Explore Collection</button>
                 <div className="absolute inset-0 z-0 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1500"><img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="display" /></div>
              </div>
          </div>
        </div>
        <footer className="h-20 border-t border-white/5 flex items-center justify-between px-16 bg-[#09090b] shrink-0 text-[11px] font-black text-zinc-700 uppercase tracking-[0.6em]">
           <span className="opacity-40">© 2024 MR Screen. All rights reserved.</span>
           <div className="flex items-center gap-20">
              <a href="#" className="hover:text-[#FF6B00] transition-colors italic tracking-widest opacity-80 font-black">Privacy Policy</a>
              <a href="#" className="hover:text-[#FF6B00] transition-colors italic tracking-widest opacity-80 font-black">Terms of Service</a>
              <a href="#" className="hover:text-[#FF6B00] transition-colors italic tracking-widest text-zinc-500 font-black">Support</a>
           </div>
        </footer>
      </div>
    </div>
  );
}