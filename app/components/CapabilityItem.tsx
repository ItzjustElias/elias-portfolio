import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const CapabilityItem = ({ title, description, index }: { title: string, description: string, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border-b border-white/10 cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="py-12 flex justify-between items-center transition-all duration-500">
        <div className="flex items-baseline gap-6">
          <span className="font-mono text-xs text-[#5D3FD3]">0{index + 1}</span>
          <h3 className={`text-4xl md:text-7xl font-black uppercase tracking-tighter transition-opacity ${isOpen ? 'opacity-100' : 'opacity-40'}`}>
            {title}
          </h3>
        </div>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-4xl">→</motion.span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-zinc-400 text-xl max-w-md">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 h-fit">
                {["Strategy", "Innovation", "Execution"].map(tag => (
                  <span key={tag} className="border border-white/10 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};