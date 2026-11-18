"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] p-4 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Precision Architecture.
          <br />
          <span className="text-[#3B82F6]">Artistic Execution.</span>
        </h1>
        <p className="max-w-xl text-lg text-zinc-400">
          Scalable Craft for the modern digital era.
        </p>
        <div className="flex gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#3B82F6] px-8 py-3 text-sm font-semibold transition hover:bg-[#2563EB]"
          >
            Architect Your Vision
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-zinc-700 px-8 py-3 text-sm font-semibold transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            Explore Capabilities
          </motion.button>
        </div>
      </motion.div>
    </main>
  );
}
