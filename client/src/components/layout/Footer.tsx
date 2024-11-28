import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import iForgeLogo from "./iforgelogo.png";
import { fadeIn, hoverScale } from "@/lib/animations";
import {
  sectionClasses,
  gridClasses,
  spacingClasses,
  textClasses,
  layoutClasses,
} from "@/lib/styles";

export function Footer() {
  const links = {
    services: [
      { name: "iForge Academy", href: "https://academy.innovatorsforge.com" },
      { name: "Online Store", href: "https://store.innovatorsforge.com" },
      { name: "Maker Store", href: "#maker" },
    ],
    social: [

      /*Insert Tiktok here*/
      {
        name: "Facebook",
        href: "https://www.tiktok.com/@innovatorsforge",
        icon: Facebook,
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61555254366066",
        icon: Facebook,
      },
      

      /*-----Change Twitter icon-----*/
      {
        name: "Twitter",
        href: "https://www.x.com/InnovatorsForge/",
        icon: Twitter,
      },

        /*-----Replace with medium social-----*/

      { name: "Instagram", href: "https://medium.com/@competition", icon: Instagram },
      
      {
        name: "YouTube",
        href: "https://youtube.com/@innovatorsforge?si=j9eqc3TOzMgYvBex",
        icon: Youtube,
      },
    ],
  };

  return (
    <motion.footer {...fadeIn} className={sectionClasses.footer}>
      <div className={sectionClasses.container}>
        <div className={spacingClasses.footerGap}>
          <div className={`${gridClasses.twoColumns} gap-8`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.img
                {...hoverScale}
                src={iForgeLogo}
                alt="iForge Logo"
                className="h-10 w-auto"
              />
              <p className={`${textClasses.description} max-w-md`}>
                Empowering makers through education, innovation, and
                cutting-edge 3D printing technology.
              </p>
            </motion.div>

            <div className={`${gridClasses.twoColumns} gap-8`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className={textClasses.subtitle}>Services</h3>
                <ul className="space-y-3">
                  {links.services.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        {...hoverScale}
                        href={link.href}
                        className={`${textClasses.description} hover:text-foreground transition-colors duration-200`}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className={textClasses.subtitle}>Follow Us</h3>
                <div className="flex space-x-4">
                  {links.social.map((item) => (
                    <motion.a
                      key={item.name}
                      {...hoverScale}
                      href={item.href}
                      className={`${textClasses.description} hover:text-foreground transition-colors duration-200`}
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <Separator className="my-8" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className={textClasses.description}>
              © 2024 iForge. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service"].map((text) => (
                <motion.a
                  key={text}
                  {...hoverScale}
                  href="#"
                  className={`${textClasses.description} hover:text-foreground transition-colors duration-200`}
                >
                  {text}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
