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
          <img src={iForgeLogo} alt="iForge Logo" className="h-12" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden absolute right-0 mr-4"
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
        <div className="hidden lg:flex justify-center items-center w-full">
         <NavigationMenu>
          <NavigationMenuList className="flex w-full space-x-4 justify-center">
          <NavigationMenuItem className="w-full lg:w-auto">
          <NavigationMenuLink
          className={cn(
            "group inline-flex h-10 w-full items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
          )}
          href="#academy"
        >
          Academy
        </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full lg:w-auto">
        <NavigationMenuLink
          className={cn(
            "group inline-flex h-10 w-full items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
          )}
          href="#store"
        >
          Online Store
        </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full lg:w-auto">
        <NavigationMenuLink
          className={cn(
            "group inline-flex h-10 w-full items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
          )}
          href="#maker"
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
                    href="#academy"
                    
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Academy
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
                    href="#maker"
                    className="block px-1 py-2 text-sm hover:bg-accent rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Maker Store
                  </a>
                </li>
                <li>
                  <a
                    href="https://academy.innovatorsforge.com/auth/sign-in"
                    target="_blank"
                    className="block px-4 py-2 text-sm bg-orange-500 text-white rounded-md border border-orange-500 hover:bg-orange-700 hover:text-white hover:border-orange-700" >
                      
                    Community
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <div className="absolute right-5">
        <a href="https://academy.innovatorsforge.com/auth/sign-in"
        target="_blank">
        <Button variant="default" className="w-full flex justify-end hidden lg:inline-flex">
          Community
        </Button>
        </a>
        </div>
        
        
      </div>
    </header>
  );
}
