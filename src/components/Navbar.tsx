import { useState, useEffect } from "react";
import { Menu, X, Search, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.webp";
import { BookingForm } from "./BookingForm";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Resorts", href: "#" },
    { label: "NRIs", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:bhoomatha@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-3 w-3" />
              bhoomatha@gmail.com
            </a>
           
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-background"
        )}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="h-20 w-auto">
                <img 
                  src={logo} 
                  alt="Bhoomatha Group Logo" 
                  className="h-full w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="tel:+917799753333" 
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  +91 77997 53333
                </a>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary/10 text-xs h-8 px-3"
                  onClick={() => setIsBookingFormOpen(true)}
                >
                  Book Now
                </Button>
                <Button 
                  variant="default"
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-xs h-8 px-3"
                  onClick={() => window.open('https://wa.me/917799753333', '_blank')}
                >
                  Site Visit
                </Button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="container mx-auto px-6 py-4 bg-background border-t">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-foreground/80 hover:text-primary font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t">
              <Button className="w-full btn-hero">Get Quote</Button>
            </div>
          </div>
        </div>
      </nav>
      
      <BookingForm 
        isOpen={isBookingFormOpen} 
        onClose={() => setIsBookingFormOpen(false)} 
      />
    </>
  );
};

export default Navbar;