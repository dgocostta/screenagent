"use client";

import { useState, useEffect, useRef } from "react";
import { Send, User, ChevronLeft, MoreVertical, Check, CheckCheck } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const products = [
  { id: "1", title: "Dell P2217H 22″ Monitor", price: "€85.00", specs: "HDMI, DP, VGA, Full HD", warehouse: "Dublin" },
  { id: "2", title: "Dell UltraSharp U2515H 25\"", price: "€145.00", specs: "2K Resolution, IPS, Widescreen", warehouse: "Dublin" },
  { id: "3", title: "Dell P2314H 23\" Monitor", price: "€95.00", specs: "Full HD, Professional Series", warehouse: "Athlone" },
];

export default function WhatsAppAgent() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! I'm the MR Screen AI assistant. 🖥️ I saw you were looking at our monitors.", sender: "bot", time: "11:00 AM" },
    { id: 2, text: "Are you looking for something for gaming, or more for a clean home office setup?", sender: "bot", time: "11:00 AM" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMsg = { id: messages.length + 1, text: input, sender: "user", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages([...messages, newMsg]);
    setInput("");
    setIsTyping(true);

    // AI Logic Simulation (Two-Not-Three Principle)
    setTimeout(() => {
      setIsTyping(false);
      let response = "";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes("office") || lowerInput.includes("work")) {
        response = "For office work, you want clarity. I have the **Dell P2217H (€85)** which is great value, or the **UltraSharp U2515H (€145)** if you want that crisp 2K resolution for spreadsheets. Which one fits your desk better?";
      } else if (lowerInput.includes("gaming") || lowerInput.includes("game")) {
        response = "Nice! For gaming, I suggest the **Dell P2319h (€110)** for the faster response time, or the **34\\\" Curved Philips (€340)** for total immersion. Want to see the specs for the curved one?";
      } else {
        response = "I can definitely help with that. Andrew has a few of the **Dell 23\\\" P2314H (€95)** in the Dublin warehouse ready for pickup today. Should I send you the payment link for that, or do you want to see a 4K option?";
      }

      setMessages(prev => [...prev, { 
        id: prev.length + 1, 
        text: response, 
        sender: "bot", 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-[#efeae2] dark:bg-[#0b141a]">
      {/* Header */}
      <header className="bg-[#008069] dark:bg-[#202c33] p-3 flex items-center gap-3 text-white shadow-sm">
        <ChevronLeft className="w-6 h-6" />
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
          <img src="https://via.placeholder.com/40" alt="MR Screen" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-sm">MR Screen AI</h1>
          <p className="text-[10px] text-white/80">Online</p>
        </div>
        <MoreVertical className="w-5 h-5" />
      </header>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={cn(
              "max-w-[85%] rounded-lg p-2.5 shadow-sm relative text-[13.5px]",
              msg.sender === "bot" 
                ? "bg-white dark:bg-[#202c33] self-start rounded-tl-none text-gray-800 dark:text-[#e9edef]" 
                : "bg-[#d9fdd3] dark:bg-[#005c4b] self-end rounded-tr-none text-gray-800 dark:text-[#e9edef] ml-auto"
            )}
          >
            <p className="whitespace-pre-wrap">{msg.text}</p>
            <div className="flex items-center justify-end gap-1 mt-1">
              <span className="text-[9px] text-gray-400 uppercase">{msg.time}</span>
              {msg.sender === "user" && <CheckCheck className="w-3 h-3 text-[#53bdeb]" />}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="bg-white dark:bg-[#202c33] self-start rounded-lg rounded-tl-none p-2 shadow-sm">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <footer className="bg-[#f0f2f5] dark:bg-[#202c33] p-3 flex items-center gap-2">
        <input 
          type="text" 
          placeholder="Type a message" 
          className="flex-1 bg-white dark:bg-[#2a3942] dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button 
          onClick={handleSend}
          className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center text-white shadow-sm hover:bg-[#008f6f] transition-colors"
        >
          <Send className="w-5 h-5 ml-0.5" />
        </button>
      </footer>
    </div>
  );
}