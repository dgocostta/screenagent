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
  { label: "Avg. Response Time", value: "1.38s", change: "12.7%", status: "down" },
  { label: "Customer Satisfaction", value: "4.7 / 5", change: "5.1%", status: "up" },
  { label: "Tasks Completed", value: "1,243", change: "15.3%", status: "up" },
];

const catalogItems = [
  { id: 1, name: "UltraView 27-inch 4K Monitor", sku: "MR-27U4K", category: "Monitors", price: "$299.99", status: "Active", image: "https://i.ebayimg.com/images/g/8QwAAeSwU2BpG7Qs/s-l1600.jpg" },
  { id: 2, name: "UltraView 32-inch Curved Monitor", sku: "MR-32CURV", category: "Monitors", price: "$399.99", status: "Active", image: "https://i.ebayimg.com/images/g/g5sAAeSwCVhpG7j1/s-l1600.jpg" },
  { id: 3, name: "ProDisplay 24-inch FHD Monitor", sku: "MR-24FHD", category: "Monitors", price: "$149.99", status: "Active", image: "https://i.ebayimg.com/images/g/0NEAAeSw2tRogphK/s-l1600.jpg" }
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#09090b] text-white selection:bg-[#FF6B00]/30 font-sans overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0 bg-[#09090b]">
        <header className="h-14 border-b border-white/5 flex items-center justify-between px-8 bg-[#09090b] shrink-0">
          <div className="flex items-center gap-4">
             <div className="p-2 hover:bg-white/5 rounded-md cursor-pointer text-zinc-400">
               <Search className="w-4 h-4" />
             </div>
             <h2 className="text-[13px] font-semibold tracking-tight text-zinc-300">Multi-Agent Business Console</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5 text-zinc-400 border-r border-white/10 pr-6">
               <Search className="w-4 h-4" />
               <div className="relative">
                 <Bell className="w-4 h-4" />
                 <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#FF6B00] rounded-full border-2 border-[#09090b] flex items-center justify-center text-[7px] font-black text-white">3</span>
               </div>
               <HelpCircle className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-3 pl-2">
               <div className="flex flex-col items-end">
                 <span className="text-[12px] font-bold">Alex Johnson</span>
                 <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter">Super Admin</span>
               </div>
               <div className="w-9 h-9 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=FF6B00&color=fff" alt="Avatar" />
               </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-black tracking-tight uppercase italic text-white">Client: MR Screen</h1>
                <span className="bg-green-500/10 text-green-500 text-[9px] font-black px-2 py-0.5 rounded-full border border-green-500/20 uppercase tracking-widest">Active</span>
              </div>
              <div className="flex items-center gap-6 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><ShieldHalf className="w-3 h-3 text-[#FF6B00]" /> Client ID: 10027</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#FF6B00]" /> 12 Locations</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#121214] border border-white/5 rounded-lg text-[10px] font-black text-zinc-400 uppercase tracking-tighter hover:bg-white/5 transition-colors">
                <Settings2 className="w-3.5 h-3.5" />
                Client Settings
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#FF6B00] rounded-lg text-[10px] font-black text-white hover:bg-[#FF6B00]/90 shadow-lg shadow-[#FF6B00]/20 transition-all uppercase italic tracking-widest">
                <Plus className="w-3.5 h-3.5" />
                New Agent
              </button>
            </div>
          </div>

          <div className="bg-[#121214] border border-white/5 rounded-2xl p-6 shadow-2xl space-y-6">
            <h3 className="text-[12px] font-black tracking-[0.15em] uppercase italic text-zinc-200">AI Agent Performance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
               {metrics.map((m) => (
                 <div key={m.label} className="bg-black/20 border border-white/5 p-4 rounded-xl space-y-3">
                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-tighter">{m.label}</span>
                    <div className="flex items-baseline gap-2">
                       <span className="text-xl font-black italic tracking-tighter">{m.value}</span>
                       <span className="text-[8px] font-black text-green-500 uppercase italic">{m.change}</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="flex border-b border-white/5 px-2">
              <button className="pb-3 text-[10px] font-black uppercase italic tracking-tighter border-b-2 border-[#FF6B00] text-[#FF6B00]">Product Catalog</button>
              <button className="pb-3 px-8 text-[10px] font-black uppercase italic tracking-tighter text-zinc-500">TV Signage</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3 flex flex-col bg-[#121214] border border-white/5 rounded-2xl overflow-hidden shadow-2xl min-h-[500px]">
                 <div className="p-4 flex items-center justify-between border-b border-white/5 bg-black/10">
                    <h3 className="text-[11px] font-black uppercase italic tracking-widest text-zinc-200">Product Catalog</h3>
                    <button className="bg-[#FF6B00] text-white text-[9px] font-black px-4 py-2 rounded-md uppercase">+ Add Product</button>
                 </div>
                 <div className="flex-1 overflow-x-auto overflow-y-auto">
                    <table className="w-full text-left">
                       <thead className="bg-black/20 text-[9px] font-black text-zinc-600 uppercase tracking-widest border-b border-white/5 sticky top-0">
                          <tr>
                             <th className="px-6 py-4">Product</th>
                             <th className="px-6 py-4">Price</th>
                             <th className="px-6 py-4">Status</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-white/5 text-[11px] text-zinc-400">
                          {catalogItems.map(item => (
                            <tr key={item.id}>
                               <td className="px-6 py-4 flex items-center gap-3">
                                  <div className="w-10 h-10 bg-zinc-900 border border-white/10 rounded-lg overflow-hidden">
                                     <img src={item.image} className="w-full h-full object-cover" />
                                  </div>
                                  <span className="text-zinc-100 font-bold">{item.name}</span>
                               </td>
                               <td className="px-6 py-4 font-black text-white italic">{item.price}</td>
                               <td className="px-6 py-4"><span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[8px] font-black uppercase">{item.status}</span></td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>

              <div className="lg:col-span-2 flex flex-col bg-[#121214] border border-white/5 rounded-2xl overflow-hidden shadow-2xl p-5">
                 <h3 className="text-[11px] font-black uppercase italic tracking-widest mb-4">TV Signage</h3>
                 <div className="flex-1 bg-black rounded-2xl overflow-hidden relative border border-white/5 shadow-inner flex flex-col items-center justify-center p-8">
                    <div className="w-6 h-6 bg-[#FF6B00] rounded-md flex items-center justify-center mb-2 shadow-lg"><span className="text-[11px] font-black italic">M</span></div>
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] italic text-[#FF6B00] mb-6">MR SCREEN</span>
                    <h4 className="text-4xl font-black uppercase italic tracking-tighter leading-none text-white text-center mb-4">See More.<br /><span className="text-[#FF6B00]">Do More.</span></h4>
                    <button className="bg-[#FF6B00] text-white text-[10px] font-black px-8 py-2.5 rounded-full shadow-lg">Explore Collection</button>
                 </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}