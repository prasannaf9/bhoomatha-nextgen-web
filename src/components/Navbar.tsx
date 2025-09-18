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
    { label: "Home", href: "https://bhoomatha.cloudecommerce.in/" },
    { label: "About Us", href: "https://www.bhoomathagroup.com/about-us" },
    { label: "Projects", href: "https://www.bhoomathagroup.com/projects" },
    { label: "Resorts", href: "https://www.bhoomathagroup.com/resorts" },
    { label: "NRIs", href: "https://www.bhoomathagroup.com/nris" },
    { label: "Contact Us", href: "https://www.bhoomathagroup.com/contact-us" },
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
            <a href="https://www.facebook.com/bhoomathagroup" target="_blank" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
           
            <a href="https://www.instagram.com/bhoomathagroup/" target="_blank" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/company/bhoomathagroup/" target="_blank" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://www.youtube.com/channel/UCLeSKd_nTItjPBk9HiHEzNg" target="_blank" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
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
                <a target="_blank"
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
                <a 
                  href="https://www.bhoomathagroup.com/book-now"
                  className="border border-primary text-primary hover:bg-primary/10 text-xs h-8 px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                  target="_blank"
                >
                  Book Now
                </a>
                <a 
                  href="https://www.bhoomathagroup.com/site-visit"
                  className="bg-primary hover:bg-primary/90 text-xs h-8 px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground"
                  target="_blank"
                >
                  Site Visit
                </a>
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