import { X, CheckCircle, Home, BuildingIcon, Briefcase, Building2, Factory } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { motion } from "framer-motion";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projectTypes = [
    {
      id: "residential",
      icon: Home,
      title: "Residential",
      description: "Luxury Apartments"
    },
    {
      id: "township",
      icon: BuildingIcon,
      title: "Townships",
      description: "Planned Communities"
    },
    {
      id: "commercial",
      icon: Building2,
      title: "Commercial",
      description: "Office & Retail"
    },
    {
      id: "industrial",
      icon: Factory,
      title: "Villas",
      description: "Estate & Parks"
    }
  ];
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset form and close after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="relative w-full max-w-md rounded-lg bg-background p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Successfully Submitted!</h3>
          <p className="mt-2 text-muted-foreground">
            Thank you for your interest. Our Agent will contact you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl rounded-lg bg-background p-8 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Book a Site Visit</h2>
            <p className="text-muted-foreground">
              Fill in your details and we'll get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Project Type</h3>
                <div className="grid grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <motion.div
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedProject(type.id)}
                      className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 p-6 text-center transition-all ${selectedProject === type.id ? 'border-primary bg-primary/10' : 'border-muted-foreground/20 hover:border-primary/50'}`}
                    >
                      <type.icon className="w-8 h-8 mb-2" />
                      <h3 className="font-medium text-base">{type.title}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                      <input
                        type="radio"
                        name="projectType"
                        value={type.id}
                        checked={selectedProject === type.id}
                        className="sr-only"
                        onChange={() => {}}
                      />
                    </motion.div>
                  ))}
                </div>
                {!selectedProject && (
                  <p className="text-sm text-destructive mt-1">Please select a project type</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Message (Optional)</Label>
              <textarea
                id="message"
                rows={3}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Any specific requirements or questions..."
              />
            </div>

            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full"
                disabled={!selectedProject}
              >
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
