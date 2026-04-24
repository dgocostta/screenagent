"use client";

import { useState, useEffect, useRef } from "react";
import { Send, ChevronLeft, MoreVertical, CheckCheck, Smartphone } from "lucide-react";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
}

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  time: string;
  product?: Product;
}

const products: Product[] = [
  { 
    id: "1", 
    title: "Dell P2217H 22-inch Monitor", 
    price: "85.00", 
    image: "https://i.ebayimg.com/images/g/0NEAAeSw2tRogphK/s-l1600.jpg"
  },
  { 
    id: "2", 
    title: "Philips 346B1C 34-inch Curved 2K", 
    price: "340.00", 
    image: "https://i.ebayimg.com/images/g/g5sAAeSwCVhpG7j1/s-l1600.jpg"
  }
];

export default function WhatsAppAgent() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey! I am the MR Screen AI assistant. I saw you were looking at our monitors.", sender: "bot", time: "11:00 AM" },
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
    const userMsg: Message = { id: messages.length + 1, text: input, sender: "user", time: "11:05 AM" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const isGame = input.toLowerCase().includes("game");
      const responseText = isGame 
        ? "For gaming, nothing beats the Curved Philips 34-inch! Want to see the payment link?"
        : "For office work, I have the Dell P2217H (85.00) or the UltraSharp U2515H. Which fits your desk?";
      
      const botMsg: Message = { 
        id: Date.now(), 
        text: responseText, 
        sender: "bot", 
        time: "11:06 AM", 
        product: isGame ? products[1] : products[0] 
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-[#efeae2] dark:bg-[#0b141a] font-sans">
      <header className="bg-[#075e54] dark:bg-[#202c33] p-3 flex items-center gap-3 text-white shadow-md z-10">
        <ChevronLeft className="w-6 h-6" />
        <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center font-bold text-xs text-white shadow-lg">MS</div>
        <div className="flex-1">
          <h1 className="font-bold text-[15px]">MR Screen AI</h1>
          <p className="text-[11px] text-white/70">Online</p>
        </div>
        <MoreVertical className="w-5 h-5 text-white/80" />
      </header>
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#e5ddd5] dark:bg-[#0b141a]">
        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col">
            <div className={`max-w-[85%] rounded-xl px-3 py-2 shadow-sm relative text-[14px] ${msg.sender === "bot" ? "bg-white dark:bg-[#202c33] self-start rounded-tl-none text-black dark:text-white" : "bg-[#d9fdd3] dark:bg-[#005c4b] self-end rounded-tr-none ml-auto text-black dark:text-white"}`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
              <div className="text-right text-[10px] opacity-60 mt-1 uppercase font-medium">{msg.time}</div>
            </div>
            {msg.sender === 'bot' && msg.product && (
              <div className="mt-2 self-start bg-white dark:bg-[#202c33] rounded-2xl overflow-hidden shadow-xl border border-zinc-200 dark:border-white/5 w-64">
                <img src={msg.product.image} className="w-full h-32 object-cover" alt="product" />
                <div className="p-3">
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white">{msg.product.title}</h4>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-orange-600 font-black text-sm">EUR {msg.product.price}</span>
                    <button className="bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Buy Now</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <footer className="bg-[#f0f2f5] dark:bg-[#202c33] p-3 flex items-center gap-3">
        <input type="text" placeholder="Type a message" className="flex-1 bg-white dark:bg-[#2a3942] rounded-full px-4 py-2 text-sm outline-none text-black dark:text-white" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()} />
        <button onClick={handleSend} className="w-12 h-12 bg-[#00a884] rounded-full text-white shadow-lg flex items-center justify-center shrink-0 active:scale-95 transition-transform"><Send className="w-5 h-5" /></button>
      </footer>
    </div>
  );
}