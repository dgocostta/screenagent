"use client";

import { Sidebar } from "../components/Sidebar";
import { 
  Bell, Search, HelpCircle, ChevronDown, Plus, 
  Settings2, Download, TrendingUp, Edit2, Trash2, Maximize2, RefreshCw, ShieldHalf, MapPin
} from "lucide-react";

const metrics = [
  { label: "Total Conversations", value: "2,847", change: "18.6%" },
  { label: "Resolution Rate", value: "92.4%", change: "6.3%" },
  { label: "Avg. Response Time", value: "1.38s", change: "12.7%" },
  { label: "Customer Satisfaction", value: "4.7 / 5", change: "5.1%" },
  { label: "Tasks Completed", value: "1,243", change: "15.3%" },
];

const catalogItems = [
  { id: 1, name: "UltraView 27-inch 4K Monitor", sku: "MR-27U4K", price: "$299.99", status: "Active", image: "https://i.ebayimg.com/images/g/8QwAAeSwU2BpG7Qs/s-l1600.jpg" },
  { id: 2, name: "UltraView 32-inch Curved Monitor", sku: "MR-32CURV", price: "$399.99", status: "Active", image: "https://i.ebayimg.com/images/g/g5sAAeSwCVhpG7j1/s-l1600.jpg" },
  { id: 3, name: "ProDisplay 24-inch FHD Monitor", sku: "MR-24FHD", price: "$149.99", status: "Active", image: "https://i.ebayimg.com/images/g/0NEAAeSw2tRogphK/s-l1600.jpg" }
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#1A1D21] text-white font-sans overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0 bg-[#1A1D21]">
        <header className="h-14 border-b border-white/5 flex items-center justify-between px-8 bg-[#1A1D21] shrink-0">
          <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Multi-Agent Business Console</h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5 text-zinc-500 border-r border-white/10 pr-6">
               <Search className="w-4 h-4 cursor-pointer" />
               <div className="relative">
                 <Bell className="w-4 h-4 cursor-pointer" />
                 <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#F37C21] rounded-full border border-[#1A1D21] flex items-center justify-center text-[7px] font-bold text-white">3</span>
               </div>
               <HelpCircle className="w-4 h-4 cursor-pointer" />
            </div>
            <div className="flex items-center gap-3">
               <div className="flex flex-col items-end leading-none">
                 <span className="text-[12px] font-bold text-white">Alex Johnson</span>
                 <span className="text-[9px] text-zinc-500 font-bold uppercase mt-1 tracking-tighter">Super Admin</span>
               </div>
               <div className="w-8 h-8 rounded-full border border-white/5 overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=F37C21&color=fff" className="w-full h-full" alt="Avatar" />
               </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-white uppercase">Client: MR Screen</h1>
              <div className="flex items-center gap-6 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><ShieldHalf className="w-3.5 h-3.5 text-[#F37C21]" /> Client ID: 10027</span>
                <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#F37C21]" /> 12 Locations</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-5 py-2.5 bg-[#2A2D32] border border-white/5 rounded-xl text-[10px] font-bold text-zinc-300 uppercase tracking-widest hover:bg-white/[0.03]">Client Settings</button>
              <button className="px-5 py-2.5 bg-[#F37C21] rounded-xl text-[10px] font-bold text-white uppercase tracking-widest shadow-xl shadow-orange-600/20">+ New Agent</button>
            </div>
          </div>

          <div className="bg-[#2A2D32] border border-white/5 rounded-2xl p-7 shadow-2xl space-y-7">
            <h3 className="text-[11px] font-bold tracking-widest uppercase text-zinc-200">AI Agent Performance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
               {metrics.map((m) => (
                 <div key={m.label} className="bg-[#1A1D21] border border-white/5 p-4 rounded-xl space-y-4 shadow-inner">
                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{m.label}</span>
                    <div className="flex items-baseline gap-2">
                       <span className="text-2xl font-bold text-zinc-100">{m.value}</span>
                       <span className="text-[9px] font-bold text-green-500 tracking-tighter uppercase">+{m.change}</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                       <div className="h-full w-2/3 bg-[#F37C21] shadow-[0_0_8px_rgba(243,124,33,0.6)]"></div>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="flex border-b border-white/5 space-x-10 px-2">
              <button className="pb-3 text-[11px] font-bold uppercase tracking-widest border-b-2 border-[#F37C21] text-[#F37C21]">Product Catalog</button>
              <button className="pb-3 text-[11px] font-bold uppercase tracking-widest text-zinc-500">TV Signage</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 flex flex-col bg-[#2A2D32] border border-white/5 rounded-2xl overflow-hidden shadow-2xl min-h-[450px]">
                 <div className="p-5 border-b border-white/5 bg-black/10 flex justify-between items-center">
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-100">Product Catalog</h3>
                    <button className="bg-[#F37C21] text-white text-[9px] font-bold px-4 py-2 rounded uppercase shadow-lg shadow-orange-600/30">+ Add Product</button>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead className="bg-black/10 text-[9px] font-bold text-zinc-600 uppercase tracking-widest border-b border-white/5 sticky top-0 backdrop-blur-xl">
                          <tr><th className="px-8 py-4">Product</th><th className="px-6 py-4 text-right">Price</th><th className="px-6 py-4 text-right">Status</th></tr>
                       </thead>
                       <tbody className="divide-y divide-white/5 text-[12px] text-zinc-400 font-medium">
                          {catalogItems.map(item => (
                            <tr key={item.id} className="hover:bg-white/[0.015] transition-colors group">
                               <td className="px-8 py-5 flex items-center gap-4">
                                  <img src={item.image} className="w-11 h-11 rounded-xl object-cover shadow-2xl border border-white/5 transition-transform group-hover:scale-105" alt="product" />
                                  <div className="flex flex-col space-y-0.5">
                                    <span className="text-zinc-100">{item.name}</span>
                                    <span className="text-[9px] text-zinc-700 font-bold uppercase">SKU: {item.sku}</span>
                                  </div>
                               </td>
                               <td className="px-6 py-5 font-bold text-white text-right">{item.price}</td>
                               <td className="px-6 py-5 text-right"><span className="bg-green-500/10 text-green-500 text-[8px] font-bold uppercase px-3 py-1 rounded-full border border-green-500/20 shadow-inner">Active</span></td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>

              <div className="lg:col-span-2 bg-[#2A2D32] border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-12 space-y-10 min-h-[400px]">
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 text-[#F37C21] flex items-center justify-center">
                       <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
                         <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 19H5.5L12 6.5z"/>
                       </svg>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F37C21]">MR SCREEN</span>
                 </div>
                 <h4 className="text-4xl font-bold uppercase tracking-tight text-center leading-tight text-white">See More.<br />Do More.</h4>
                 <button className="bg-[#F37C21] text-white text-[11px] font-bold px-10 py-3 rounded-full shadow-lg shadow-orange-600/30 uppercase tracking-widest border border-white/10">Explore Collection</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}