import React from "react"; import { Button } from "@/components/ui/button"; import { Sparkles } from "lucide-react"; import { motion } from "framer-motion";

export default function RandomStylePage() { return ( <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex flex-col items-center justify-center p-8 gap-12"> <motion.h1 className="text-5xl font-extrabold text-center drop-shadow-xl" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} > Welcome to the Funky Page <Sparkles className="inline ml-2 text-yellow-300" /> </motion.h1>

<motion.div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.8 }}
  >
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="rounded-2xl p-6 shadow-xl bg-white text-black hover:scale-105 transition-transform duration-300"
      >
        <h2 className="text-xl font-semibold mb-2">Card {i + 1}</h2>
        <p className="text-sm">
          This is a randomly styled card with colorful vibes and hover animation.
        </p>
      </div>
    ))}
  </motion.div>

  <motion.div
    className="flex gap-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2 }}
  >
    <Button className="bg-yellow-300 text-black hover:bg-yellow-400">Action 1</Button>
    <Button className="bg-cyan-400 text-white hover:bg-cyan-500">Action 2</Button>
  </motion.div>
</div>

); }

