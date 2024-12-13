import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Store, Printer, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeIn, hoverScale, sectionAnimation } from "@/lib/animations";
import {
  sectionClasses,
  buttonClasses,
  gridClasses,
  spacingClasses,
  textClasses,
  layoutClasses,
} from "@/lib/styles";
import ComingSoon from "./ComingSoon";

export function MakerStore() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const features = [
    {
      icon: Store,
      title: "Buy 3D Models",
      description: "Browse and purchase high-quality 3D models from our community.",
    },
    {
      icon: Printer,
      title: "On-Demand Printing",
      description: "Get your designs printed through our manufacturing centers.",
    },
    {
      icon: DollarSign,
      title: "Sell Your Designs",
      description: "List your 3D models and earn from every sale.",
    },
  ];

  return (
    <section id="maker" className={sectionClasses.default}>
      <div className="absolute inset-0 bg-grid-pattern bg-[size:2rem_2rem] opacity-30" />
      <motion.div {...fadeIn} className={sectionClasses.container}>
        <div className={spacingClasses.sectionGap}>
          <SectionHeader
            title="iForge Maker Store"
            description="Your marketplace for 3D designs and on-demand manufacturing."
          />

          <div className={gridClasses.features}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className={`${layoutClasses.card} group ${buttonClasses.hover}`}>
                  <CardHeader className={spacingClasses.elementGap}>
                    <motion.div {...hoverScale} className="inline-flex">
                      <feature.icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </motion.div>
                    <h3 className={textClasses.subtitle}>{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className={textClasses.description}>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {!showComingSoon ? (
              <Button
                size="lg"
                className={`${buttonClasses.gradient} ${buttonClasses.hover}`}
                onClick={() => setShowComingSoon(true)}
              >
                Explore the Maker Store
              </Button>
            ) : (
              <ComingSoon />
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}