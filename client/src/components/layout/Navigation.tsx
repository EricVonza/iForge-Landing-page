import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import iForgeLogo from "./iforgelogo.png";
import ComingSoon from "../sections/ComingSoon"
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img src={iForgeLogo} alt="iForge Logo" className="h-16" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  )}
                  href="https://academy.innovatorsforge.com/"
                >
                  Academy
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  )}
                  href="https://store.innovatorsforge.com/pages/shop-products"
                >
                  Online Store
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  )}
                  
                  href="https://www.shutterstock.com/image-illustration/coming-soon-web-banner-sign-600nw-2286318125.jpg"
                  target="_blank"
                  >
                
                  Maker Store
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background border-b lg:hidden">
            <nav className="container py-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <a
                    href="https://store.innovatorsforge.com/"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#store"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Online Store
                  </a>
                </li>
                <li>
                  <a
                    href="../sections/ComingSoon"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Maker Store
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <a href="https://academy.innovatorsforge.com">
        <Button variant="default" className="hidden lg:inline-flex">
          Community
        </Button>
        </a>
        
      </div>
    </header>
  );
}