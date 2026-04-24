"use client";

import { Sidebar } from "../components/Sidebar";
import { 
  Bell, Search, HelpCircle, ChevronDown, Plus, 
  Settings2, Download, TrendingUp, 
  Edit2, Trash2, Maximize2, RefreshCw, ShieldHalf, MapPin
} from "lucide-react";

const metrics = [
  { label: "Total Conversations", value: "2,847", change: "18.6%", status: "up" },
  { label: "Resolution Rate", value: "92.4%", change: "6.3%", status: "up" },
  { label: "Avg. Response Time", value: "1.38s", change: "12.7%", status: "up" },
  { label: "Customer Satisfaction", value: "4.7 / 5", change: "5.1%", status: "up" },
  { label: "Tasks Completed", value: "1,243", change: "15.3%", status: "up" },
];

const catalogItems = [
  { id: 1, name: "UltraView 27-inch 4K Monitor", sku: "MR-27U4K", category: "Monitors", price: "$299.99", status: "Active", image: "https://i.ebayimg.com/images/g/8QwAAeSwU2BpG7Qs/s-l1600.jpg" },
  { id: 2, name: "UltraView 32-inch Curved Monitor", sku: "MR-32CURV", category: "Monitors", price: "$399.99", status: "Active", image: "https://i.ebayimg.com/images/g/g5sAAeSwCVhpG7j1/s-l1600.jpg" },
  { id: 3, name: "ProDisplay 24-inch FHD Monitor", sku: "MR-24FHD", category: "Monitors", price: "$149.99", status: "Active", image: "https://i.ebayimg.com/images/g/0NEAAeSw2tRogphK/s-l1600.jpg" },
  { id: 4, name: "ProDisplay 27-inch QHD Monitor", sku: "MR-27QHD", category: "Monitors", price: "$249.99", status: "Active", image: "https://i.ebayimg.com/images/g/8QwAAeSwU2BpG7Qs/s-l1600.jpg" },
  { id: 5, name: "GamingMax 34-inch UltraWide", sku: "MR-34UW", category: "Monitors", price: "$499.99", status: "Active", image: "https://i.ebayimg.com/images/g/g5sAAeSwCVhpG7j1/s-l1600.jpg" }
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#09090b] text-white selection:bg-[#FF6B00]/30 font-sans overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0 bg-[#09090b]">
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-10 bg-[#09090b] shrink-0">
          <div className="flex items-center gap-6">
             <div className="p-2 hover:bg-white/5 rounded-md cursor-pointer text-zinc-500">
               <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M2.25 4.5H15.75M2.25 9H15.75M2.25 13.5H15.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
             <h2 className="text-sm font-bold tracking-tight text-zinc-200 uppercase tracking-widest italic">Multi-Agent Business Console</h2>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6 text-zinc-500 border-r border-white/5 pr-8">
               <Search className="w-4.5 h-4.5 cursor-pointer hover:text-white transition-colors" />
               <div className="relative">
                 <Bell className="w-4.5 h-4.5 cursor-pointer hover:text-white transition-colors" />
                 <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#FF6B00] rounded-full border-2 border-[#09090b] flex items-center justify-center text-[7px] font-black text-white shadow-xl shadow-orange-600/30">3</span>
               </div>
            </div>
            <div className="flex items-center gap-4 pl-2">
               <div className="flex flex-col items-end">
                 <span className="text-[14px] font-black text-zinc-100 leading-none">Alex Johnson</span>
                 <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Super Admin</span>
               </div>
               <div className="w-10 h-10 rounded-full border-2 border-white/5 p-0.5 shadow-2xl overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=FF6B00&color=fff" className="w-full h-full rounded-full" alt="Avatar" />
               </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-10 space-y-10 custom-scrollbar">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-black tracking-tight uppercase italic text-white leading-none">Client: MR Screen</h1>
                <span className="bg-green-500/10 text-green-500 text-[10px] font-black px-2.5 py-1 rounded-md border border-green-500/20 uppercase tracking-widest shadow-inner">Active</span>
              </div>
              <div className="flex items-center gap-8 text-[11px] text-zinc-500 font-black uppercase tracking-[0.1em]">
                <span className="flex items-center gap-2"><ShieldHalf className="w-3.5 h-3.5 text-[#FF6B00]" /> Client ID: 10027</span>
                <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#FF6B00]" /> 12 Locations</span>
                <span className="flex items-center gap-2 opacity-40 font-bold italic tracking-tighter">Member Since: Jan 12, 2024</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-[#121214] border border-white/5 rounded-xl text-[11px] font-black text-zinc-400 uppercase tracking-widest hover:bg-white/[0.03] shadow-xl">Client Settings</button>
              <button className="px-6 py-3 bg-[#FF6B00] rounded-xl text-[11px] font-black text-white hover:bg-[#FF6B00]/90 shadow-2xl shadow-orange-600/40 transition-all uppercase italic tracking-widest">+ New Agent</button>
            </div>
          </div>

          <div className="bg-[#121214] border border-white/5 rounded-3xl p-8 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent"></div>
            <h3 className="text-[14px] font-black tracking-[0.2em] uppercase italic text-zinc-100">AI Agent Performance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
               {metrics.map((m) => (
                 <div key={m.label} className="bg-black/20 border border-white/5 p-5 rounded-2xl space-y-5 hover:border-[#FF6B00]/40 transition-all shadow-inner group">
                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{m.label}</span>
                    <div className="flex items-baseline gap-3">
                       <span className="text-2xl font-black italic text-zinc-100">{m.value}</span>
                       <span className="text-[10px] font-black text-green-500 flex items-center gap-1 tracking-tighter uppercase italic">{m.change}</span>
                    </div>
                    <div className="h-4 flex items-end">
                       <svg width="100%" height="24" viewBox="0 0 100 24" preserveAspectRatio="none" className="overflow-visible drop-shadow-[0_0_10px_#FF6B00]">
                          <path d="M0,20 Q25,5 50,18 T100,10" fill="none" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse" />
                       </svg>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="flex border-b border-white/5 px-2">
              <button className="pb-4 text-[12px] font-black uppercase italic tracking-widest border-b-2 border-[#FF6B00] text-[#FF6B00]">Product Catalog</button>
              <button className="pb-4 px-12 text-[12px] font-black uppercase italic tracking-widest text-zinc-600 hover:text-zinc-100 transition-colors">TV Signage</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 pb-10">
              <div className="lg:col-span-3 flex flex-col bg-[#121214] border border-white/5 rounded-3xl overflow-hidden shadow-2xl min-h-[500px]">
                 <div className="p-6 border-b border-white/5 bg-black/10 flex justify-between items-center">
                    <h3 className="text-[13px] font-black uppercase italic text-zinc-100 tracking-widest">Product Catalog</h3>
                    <button className="bg-[#FF6B00] text-white text-[9px] font-black px-5 py-2.5 rounded-xl uppercase shadow-lg shadow-orange-600/30 font-black">+ Add Product</button>
                 </div>
                 <div className="overflow-x-auto overflow-y-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse">
                       <thead className="bg-black/20 text-[10px] font-black text-zinc-700 uppercase tracking-widest border-b border-white/5 sticky top-0 z-10 backdrop-blur-md">
                          <tr><th className="px-8 py-5">Product</th><th className="px-6 py-5">Price</th><th className="px-6 py-5">Status</th></tr>
                       </thead>
                       <tbody className="divide-y divide-white/5 text-[12px] font-bold text-zinc-400">
                          {catalogItems.map(item => (
                            <tr key={item.id} className="hover:bg-white/[0.015] transition-colors group">
                               <td className="px-8 py-5 flex items-center gap-5">
                                  <img src={item.image} className="w-12 h-12 rounded-xl object-cover shadow-2xl border border-white/5 group-hover:scale-105 transition-transform duration-300" alt="product" />
                                  <div className="flex flex-col space-y-1">
                                    <span className="text-zinc-100 font-black leading-none">{item.name}</span>
                                    <span className="text-[9px] text-zinc-700 font-black tracking-widest">SKU: {item.sku}</span>
                                  </div>
                               </td>
                               <td className="px-6 py-5 font-black text-white italic tracking-tighter">{item.price}</td>
                               <td className="px-6 py-5"><span className="bg-green-500/10 text-green-500 text-[8px] font-black uppercase px-3 py-1 rounded-full border border-green-500/20 shadow-inner tracking-widest font-black">{item.status}</span></td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
                 <div className="p-6 border-t border-white/5 bg-black/10 flex justify-between items-center">
                    <span className="text-[10px] font-black text-zinc-700 uppercase tracking-widest">Showing 1 to 5 of 25 products</span>
                    <div className="flex items-center gap-2.5">
                       <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#FF6B00] text-white italic font-black shadow-lg shadow-orange-600/30 text-[11px]">1</button>
                       <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/5 hover:bg-white/5 text-zinc-600 text-[11px] font-black">2</button>
                       <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/5 hover:bg-white/5 text-zinc-600 text-[11px] font-black">3</button>
                    </div>
                 </div>
              </div>
              <div className="lg:col-span-2 bg-[#121214] border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-12 space-y-10 relative group">
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 bg-[#FF6B00] rounded-xl flex items-center justify-center shadow-[0_0_30px_#FF6B00] shadow-orange-600/60 rotate-6"><span className="text-[15px] font-black italic text-white -rotate-6 tracking-tighter">M</span></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.6em] italic text-[#FF6B00]">MR SCREEN</span>
                 </div>
                 <h4 className="text-6xl font-black uppercase italic tracking-tighter text-center leading-[0.8] text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                   SEE MORE.<br /><span className="text-[#FF6B00]">DO MORE.</span>
                 </h4>
                 <button className="bg-[#FF6B00] text-white text-[12px] font-black px-12 py-4 rounded-full shadow-[0_0_50px_rgba(255,107,0,0.8)] uppercase italic tracking-widest border border-white/10 hover:scale-105 active:scale-95 transition-all duration-300">Explore Collection</button>
                 <div className="absolute bottom-4 right-4"><Maximize2 className="w-5 h-5 text-zinc-800" /></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}