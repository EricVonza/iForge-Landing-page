import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeIn, sectionAnimation, hoverScale } from "@/lib/animations";
import {
  sectionClasses,
  gradientClasses,
  buttonClasses,
  textClasses,
} from "@/lib/styles";

import Printer from "./assets";

export function OnlineStore() {
  return (
    <section id="store" className={sectionClasses.muted}>
      <motion.div {...fadeIn} className={sectionClasses.container}>
        <SectionHeader
          title="iForge Online Store"
          description="Get started with professional-grade 3D printers from trusted brands."
        />

        <motion.div {...sectionAnimation} className="mt-16">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <motion.h3
                    {...fadeIn}
                    className={`text-2xl font-bold ${gradientClasses.text}`}
                  >
                    Bambu Lab 3D Printers
                  </motion.h3>
                  <motion.p
                    {...fadeIn}
                    transition={{ delay: 0.1 }}
                    className={textClasses.description}
                  >
                    Experience next-generation 3D printing with Bambu Lab's
                    innovative printers. Featuring advanced auto-leveling,
                    high-speed printing, and exceptional print quality.
                  </motion.p>
                  <motion.div {...hoverScale}>
                    <a href="https://store.innovatorsforge.com/pages/shop-products"
                    target="_blank"
                    >
                    <Button size="lg" className={buttonClasses.gradient}>
                      Shop Now
                    </Button>
                    </a>
                  </motion.div>
                </div>
                <motion.div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                  <img
                    src={Printer}
                    alt="Beautiful Scenery"
                    className="w-full h-full"
                  />
                  <div className={gradientClasses.radial} />
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
