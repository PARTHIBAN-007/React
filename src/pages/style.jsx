import React from "react"; import { Button } from "@/components/ui/button"; import { motion } from "framer-motion";

export default function StylishSimplePage() { return ( <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4 py-16"> <motion.h1 className="text-4xl font-bold mb-6 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} > Simple & Stylish </motion.h1>

<motion.p
    className="max-w-xl text-center text-lg text-gray-600 mb-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    A clean layout with subtle motion, balanced typography, and a touch of elegance for any modern interface.
  </motion.p>

  <motion.div
    className="flex gap-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
  >
    <Button className="bg-gray-900 text-white hover:bg-gray-800">Get Started</Button>
    <Button variant="outline">Learn More</Button>
  </motion.div>
</div>

); }

