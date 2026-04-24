import { Sidebar } from "../components/Sidebar";
import { ThemeToggle } from "../components/ThemeToggle";
import { Users, ShoppingBag, MessageCircle, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Active Agents", value: "12", icon: MessageCircle, trend: "+2 this week" },
  { label: "Total Leads", value: "1,284", icon: Users, trend: "+12.5%" },
  { label: "Orders Closed", value: "432", icon: ShoppingBag, trend: "+8.2%" },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-card/50 backdrop-blur">
          <h2 className="text-lg font-semibold">Pulse Overview</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome back, Admin</span>
            <ThemeToggle />
          </div>
        </header>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card border border-border p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-orange-600/10 rounded-lg">
                    <stat.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-xs font-medium text-green-500 flex items-center gap-1">
                    {stat.trend}
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card border border-border p-6 rounded-xl h-96">
              <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">Agent Conversations</h3>
              <div className="h-full flex items-center justify-center text-muted-foreground italic border-2 border-dashed border-border rounded-lg">
                Real-time conversation chart will be here
              </div>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl h-96">
              <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">Recent Orders</h3>
              <div className="h-full flex items-center justify-center text-muted-foreground italic border-2 border-dashed border-border rounded-lg">
                Recent order stream will be here
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}