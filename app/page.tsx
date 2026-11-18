"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8 relative overflow-hidden">
      {/* Magic-UI emulation using Framer Motion */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b82f6]/20 blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[80vh] relative z-10">
        <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-[#a3a3a3] border-[#333333]">
          Precision Architecture
        </Badge>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-center mb-6 text-[#fafafa]"
        >
          Scalable Craft.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]">Artistic Execution.</span>
        </motion.h1>
        <p className="text-xl text-[#a3a3a3] text-center mb-10 max-w-2xl">
          Architectural Boutique Agency for the digital era.
        </p>
        <div className="flex gap-4">
          <Button className="h-12 rounded-full bg-[#8b5cf6] px-8 text-white hover:bg-[#7c3aed] transition-all duration-300 hover:scale-105">
            Architect Your Vision
          </Button>
          <Button variant="outline" className="h-12 rounded-full text-white border-[#333333] bg-transparent px-8 hover:bg-[#171717] hover:border-[#444444] transition-all duration-300">
            Explore Capabilities
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16 relative z-10">
        <Card className="bg-[#171717] border-[#333333] rounded-3xl hover:border-[#8b5cf6]/50 transition-colors duration-300">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-2">Precision Architecture</h2>
            <p className="text-[#a3a3a3]">Scalable, reliable infrastructure for enterprise.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#171717] border-[#333333] rounded-3xl hover:border-[#8b5cf6]/50 transition-colors duration-300">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-2">Artistic Execution</h2>
            <p className="text-[#a3a3a3]">Premium craftsmanship for premium brands.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

