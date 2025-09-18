import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import f9Logo from "@/assets/f9-logo.svg";
import logo from "@/assets/logo.webp";

const Footer = () => {
  const quickLinks = [
    { label: "Privacy Policy", href: "https://www.bhoomathagroup.com/privacy-policy" },
    { label: "Careers", href: "https://www.bhoomathagroup.com/careers" },
   
  ];

  const projects = [
    { label: "Bhoomatha Heights", href: "https://www.bhoomathagroup.com/projects" },
    { label: "Corporate Plaza", href: "https://www.bhoomathagroup.com/projects" },
    { label: "Villa Paradise", href: "https://www.bhoomathagroup.com/projects" },
    { label: "Bhoomatha Square", href: "https://www.bhoomathagroup.com/projects" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "https://www.bhoomathagroup.com/privacy-policy" },
    { label: "Careers", href: "https://www.bhoomathagroup.com/careers" },
    
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/bhoomathagroup" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/bhoomathagroup/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/bhoomathagroup/" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/channel/UCLeSKd_nTItjPBk9HiHEzNg" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
          <div className="flex items-center">
              <a href="#" className="h-20 w-auto">
                <img 
                  src={logo} 
                  alt="Bhoomatha Group Logo" 
                  className="h-full w-auto object-contain"
                />
              </a>
            </div>
            <p className="text-primary-foreground/80 mb-2">
              Building dreams and creating legacies through exceptional real estate
              development and innovative urban solutions.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="text-primary-foreground/80">
                  <a href={link.href} target="_blank" className="hover:text-primary-foreground transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold mb-4">Our Projects</h4>
            <ul className="space-y-2">
              {projects.map((project, index) => (
                <li key={index} className="text-primary-foreground/80">
                  <a href={project.href} target="_blank" className="hover:text-primary-foreground transition-colors">{project.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                D.No.48-14-85 & 86, 3rd & 4th Floors, Rama Talkies Junction, Opp. Subham Prema Hospital, 
                <br/>Visakhapatnam - 530 013.

                </span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-5 w-5 flex-shrink-0" />
                +91 7799753333
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-5 w-5 flex-shrink-0" />
                bhoomatha@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © 2024 Bhoomatha Group. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <span>Designed by</span>
              <img 
                src={f9Logo}
                alt="f9tech" 
                className="h-5 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;