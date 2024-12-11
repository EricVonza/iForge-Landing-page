import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeIn, sectionAnimation } from "@/lib/animations";
import { sectionClasses, spacingClasses } from "@/lib/styles";

export function About() {
  return (
    <section id="about" className={sectionClasses.muted}>
      <div className="absolute inset-0 bg-grid-pattern bg-[size:2rem_2rem] opacity-40" />
      <motion.div {...fadeIn} className={sectionClasses.container}>
        <div className={spacingClasses.sectionGap}>
          
          <SectionHeader 
          
            title="About iForge"
            description="iForge is dedicated to fostering innovation, creativity, and hands-on learning in the world of 3D printing."
          />
          
          
          <motion.div {...sectionAnimation} className={spacingClasses.contentGap}>
            <motion.p 
              className="text-lg text-muted-foreground text-center max-w-3xl mx-auto"
            >
              Through iForge Academy, our Online Store, and the Maker Store, we provide all the tools and resources 
              needed to succeed in the world of 3D printing and digital manufacturing.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
