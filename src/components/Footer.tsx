import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import f9Logo from "@/assets/f9-logo.svg";

const Footer = () => {
  const quickLinks = [
    { label: "Privacy Policy" },
    { label: "Terms of Service" },
    { label: "Cookie Policy" },
    { label: "Sitemap" },
  ];

  const projects = [
    { label: "Bhoomatha Heights" },
    { label: "Corporate Plaza" },
    { label: "Villa Paradise" },
    { label: "Bhoomatha Square" },
  ];

  const legal = [
    { label: "Privacy Policy" },
    { label: "Terms of Service" },
    { label: "Cookie Policy" },
    { label: "Sitemap" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Instagram, label: "Instagram" },
    { icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-heading">
              <span className="text-primary-foreground">Bhoomatha</span>
              <span className="text-accent ml-1">Group</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6">
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
                <span key={index} className="text-primary-foreground/60">
                  <social.icon className="w-5 h-5" />
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="text-primary-foreground/80">
                  {link.label}
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
                  {project.label}
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
                  123 Business Park, Whitefield,<br />
                  Bangalore 560066, India
                </span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-5 w-5 flex-shrink-0" />
                +1 (234) 567-890
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-5 w-5 flex-shrink-0" />
                info@bhoomathagroup.com
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