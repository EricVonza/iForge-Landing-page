import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import iForgeLogo from "./iforgelogo.png";
import FacebookIcon from "./icons8-facebook.svg";
import MediumIcon from "./icons8-medium.svg";
import TikTokIcon from "./icons8-tiktok.svg";
import TwitterXIcon from "./icons8-twitterx.svg";
import YouTubeIcon from "./icons8-youtube.svg";

import { fadeIn, hoverScale } from "@/lib/animations";
import {
  sectionClasses,
  gridClasses,
  spacingClasses,
  textClasses,
} from "@/lib/styles";

export function Footer() {
  const links = {
    services: [
      { name: "iForge Academy", href: "https://academy.innovatorsforge.com/auth/sign-in" },
      { name: "Online Store", href: "https://store.innovatorsforge.com/pages/shop-products" },
      { name: "Maker Store", href: "#maker" },
    ],
    social: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/innovatorsforge",
        icon: FacebookIcon,
      },
      {
        name: "Twitter",
        href: "https://www.x.com/InnovatorsForge/",
        icon: TwitterXIcon,
      },
      {
        name: "Medium",
        href: "https://medium.com/@competition",
        icon: MediumIcon,
      },
      {
        name: "YouTube",
        href: "https://youtube.com/@innovatorsforge?si=j9eqc3TOzMgYvBex",
        icon: YouTubeIcon,
      },
      {
        name: "TikTok",
        href: "https://www.tiktok.com/@innovatorsforge",
        icon: TikTokIcon,
      },
    ],
  };

  return (
    <motion.footer {...fadeIn} className={sectionClasses.footer}>
      <div className={sectionClasses.container}>
        <div className={spacingClasses.footerGap}>
          {/* Header Section */}
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
            <div className="relative w-full pt-[56.25%] sm:pt-[40%] lg:pt-[30%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.851585197263!2d36.83773986865609!3d-1.2613150959125083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1777451ff151%3A0x835b0fbe8bcefab8!2siForge%20(Innovators%20Forge)!5e0!3m2!1sen!2ske!4v1735771696167!5m2!1sen!2ske"
              width="100%"
              height="150%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
               referrerPolicy="no-referrer-when-downgrade">

            </iframe>
            </div>


            {/* Links Section */}
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${textClasses.description} hover:text-foreground transition-colors duration-200`}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Social Links Section */}
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${textClasses.description} hover:text-foreground transition-colors duration-200`}
                    >
                      <span className="sr-only">{item.name}</span>
                      {typeof item.icon === "string" ? (
                        <img src={item.icon} alt={item.name} className="h-5 w-5" />
                      ) : (
                        <item.icon className="h-5 w-5" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Separator */}
          <Separator className="my-8" />

          {/* Footer Bottom */}
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
                  target="_blank"
                  rel="noopener noreferrer"
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
