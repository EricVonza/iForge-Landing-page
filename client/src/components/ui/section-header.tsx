import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <motion.h2 
        {...fadeInUp}
        className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
