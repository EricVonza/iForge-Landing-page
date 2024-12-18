import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Award, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeInUp, hoverScale, sectionAnimation } from "@/lib/animations";
import { 
  sectionClasses, 
  buttonClasses, 
  layoutClasses, 
  textClasses, 
  spacingClasses,
  gridClasses 
} from "@/lib/styles";

export function Academy() {
  const features = [
    {
      title: "Courses and Learning Modules",
      description: "Access comprehensive courses in 3D printing, digital design, and innovative skills.",
      icon: GraduationCap,
    },
    {
      title: "Team Collaboration",
      description: "Join or create teams, participate in challenges, and build connections.",
      icon: Users,
    },
    {
      title: "POAP Badges",
      description: "Earn blockchain-verified badges by completing tasks and progressing through courses.",
      icon: Award,
    },
    {
      title: "Leaderboard",
      description: "Track your progress and achievements against the community.",
      icon: Trophy,
    },
  ];

  return (
    <section id="academy" className={sectionClasses.muted}>
      <motion.div 
        {...sectionAnimation} 
        className={sectionClasses.container}
      >
        <div className={spacingClasses.sectionGap}>
          <SectionHeader
            title="iForge Academy"
            description="Level up your skills with our comprehensive learning platform. Join a community of makers and innovators."
          />

          <div className={`grid grid-cols-1 ${gridClasses.features}`}>
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
                    <motion.div 
                      {...hoverScale}
                      className="inline-flex"
                    >
                      <feature.icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </motion.div>
                    <CardTitle className={textClasses.subtitle}>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className={`${textClasses.description} ${spacingClasses.elementGap}`}>
                      {feature.description}
                    </p>
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
            <a href="https://academy.innovatorsforge.com/auth/sign-in"
            target="_blank">
            <Button 
              size="lg" 
              className={`${buttonClasses.gradient} ${buttonClasses.hover}`}
            >
              Start Learning
            </Button>

            </a>
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
