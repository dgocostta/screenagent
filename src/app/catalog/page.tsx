"use client";

import { Sidebar } from "../../components/Sidebar";
import { ThemeToggle } from "../../components/ThemeToggle";
import { Search, Filter, Plus, Warehouse, Edit2, Trash2, ExternalLink } from "lucide-react";
import { useState } from "react";

const products = [
  { id: "1", title: "Dell P2217H 22″ Monitor HDMI Display port VGA", price: "€85.00", platform: "eBay", status: "Live", stock: 12, warehouses: { d: 5, a: 4, c: 3 } },
  { id: "2", title: "Dell UltraSharp U2515H 25\" Widescreen LED Monitor 2k", price: "€145.00", platform: "eBay", status: "Live", stock: 8, warehouses: { d: 4, a: 2, c: 2 } },
  { id: "3", title: "Dell 23\" P2314H Full HD 1920 x 1080P LED", price: "€95.00", platform: "eBay", status: "Live", stock: 15, warehouses: { d: 10, a: 3, c: 2 } },
  { id: "4", title: "Dell P2217H 22″ Full HD Office CCTV Screen", price: "€89.00", platform: "eBay", status: "Live", stock: 20, warehouses: { d: 8, a: 7, c: 5 } },
  { id: "5", title: "Dell P2018H 20-Inch LED Monitor HDMI DP VGA", price: "€75.00", platform: "eBay", status: "Live", stock: 6, warehouses: { d: 3, a: 2, c: 1 } },
  { id: "6", title: "Dell 23\" P2319h LED IPS Full HD 1080p Monitor", price: "€110.00", platform: "eBay", status: "Live", stock: 11, warehouses: { d: 5, a: 3, c: 3 } },
  { id: "7", title: "Dell P2213T, 22\" HD 1680x1050 Monitor Display", price: "€65.00", platform: "eBay", status: "Live", stock: 9, warehouses: { d: 4, a: 3, c: 2 } },
  { id: "8", title: "Genuine Dell Laptop Charger 19.5V 6.7A 130W", price: "€35.00", platform: "eBay", status: "Live", stock: 25, warehouses: { d: 15, a: 5, c: 5 } },
];

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-card/50 backdrop-blur sticky top-0 z-10">
          <h2 className="text-lg font-semibold">Product Catalog (MR Screen)</h2>
          <div className="flex items-center gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
              <Plus className="w-4 h-4" />
              Add Product
            </button>
            <ThemeToggle />
          </div>
        </header>

        <div className="p-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-600/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-orange-600/10 text-orange-600 border border-orange-600/20 rounded-lg text-sm font-medium hover:bg-orange-600/20 transition-colors">
                <Warehouse className="w-4 h-4" />
                Inventory Sync
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <th className="px-6 py-4">Product Name</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Stock (D / A / C)</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-muted/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">{product.title}</p>
                        <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded uppercase font-bold tracking-tight">
                          {product.platform}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-500/10 text-green-500 uppercase">
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-foreground">
                      {product.price}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-orange-600 font-bold bg-orange-600/10 px-1.5 py-0.5 rounded">{product.warehouses.d}</span>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-foreground bg-muted px-1.5 py-0.5 rounded">{product.warehouses.a}</span>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-foreground bg-muted px-1.5 py-0.5 rounded">{product.warehouses.c}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-orange-600/10 hover:text-orange-600 rounded-lg transition-colors">
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-2 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}