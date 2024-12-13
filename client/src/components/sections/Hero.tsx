import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, pulseAnimation, staggerChildren } from "@/lib/animations";
import { sectionClasses, gradientClasses, buttonClasses } from "@/lib/styles";

export function Hero() {
  const callToActions = [
    { href: "https://academy.innovatorsforge.com", text: "Join Academy" },
    { href: "https://store.innovatorsforge.com/collections/3d-printers-1", text: "Shop Printers" },

  ];
      {/*  Should be included into the Call to Action Array in the future  { href: "#maker", text: "Visit Maker Store" } */}



  return (
    <section className={sectionClasses.hero}>
      <div className={sectionClasses.container}>
        <motion.div {...staggerChildren} className="mx-auto max-w-3xl text-center">
          <motion.h1 
            {...fadeInUp}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${gradientClasses.text}`}
          >
            Unleash Your Creative Potential with 3D Printing
          </motion.h1>
          <motion.p 
            {...fadeInUp} 
            transition={{ delay: 0.1 }}
            className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground"
          >
            Join the iForge ecosystem to learn, create, and innovate in the world of 3D printing. 
            Start your journey with iForge Academy and unlock your creative potential.
          </motion.p>
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
          >
            {callToActions.map((cta) => (
              <Button 
                key={cta.href} 
                size="lg" 
                className={buttonClasses.gradient}
                asChild
              >
                <a href={cta.href}>{cta.text}</a>
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className={gradientClasses.grid} />
        
        <div 
          className="absolute inset-0 opacity-[0.06] bg-no-repeat bg-center bg-[length:60%_auto] mix-blend-overlay transform scale-110"
          style={{ backgroundImage: 'url(/iforge-logo.png)' }}
        />

        {[
          { className: "top-20 left-10 w-64 h-64", delay: 0 },
          { className: "bottom-20 right-10 w-80 h-80", delay: 0.5 },
          { className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96", delay: 1 }
        ].map((shape, index) => (
          <motion.div 
            key={index}
            {...pulseAnimation}
            transition={{ ...pulseAnimation.transition, delay: shape.delay }}
            className={`absolute ${shape.className} bg-primary/10 rounded-full blur-3xl`}
          />
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background/90" />
      </div>
    </section>
  );
}
