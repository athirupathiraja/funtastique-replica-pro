import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Calendar as CalendarIcon, Users, PartyPopper, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format } from "date-fns";

const Contact = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    partySize: "",
    theme: "",
    timeSlot: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "🎉 Booking Request Sent!",
      description: "We'll get back to you within 24 hours to confirm your party details.",
    });
    setFormData({ name: "", email: "", phone: "", message: "", partySize: "", theme: "", timeSlot: "" });
    setDate(undefined);
  };

  const themes = [
    { value: "frozen", label: "❄️ Frozen Party", icon: "❄️" },
    { value: "princess", label: "👑 Princess Party", icon: "👑" },
    { value: "cupcake", label: "🧁 Cupcake Decorating", icon: "🧁" },
    { value: "bracelet", label: "💎 Bracelet Making", icon: "💎" },
    { value: "cartoon", label: "🎨 Cartoon Party", icon: "🎨" },
    { value: "custom", label: "✨ Custom Theme", icon: "✨" }
  ];

  const timeSlots = [
    "10:00 AM - 12:00 PM",
    "12:30 PM - 2:30 PM",
    "3:00 PM - 5:00 PM",
    "5:30 PM - 7:30 PM"
  ];

  const partySizes = [
    "1-5 children",
    "6-10 children",
    "11-15 children",
    "16-20 children",
    "20+ children"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-primary/20 via-primary/10 to-background overflow-hidden">
        {/* Fun Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating Calendar Icons */}
          <div className="absolute top-12 right-16 animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="w-10 h-10 bg-primary/60 rounded-lg shadow-lg flex items-center justify-center">
              <CalendarIcon className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="absolute top-24 right-32 animate-float-slow" style={{ animationDelay: "1s" }}>
            <div className="w-8 h-8 bg-secondary/60 rounded-lg shadow-lg flex items-center justify-center">
              <PartyPopper className="w-4 h-4 text-white" />
            </div>
          </div>
          
          {/* Floating Hearts */}
          <div className="absolute top-16 left-20 animate-float" style={{ animationDelay: "0.8s" }}>
            <div className="w-5 h-5 bg-pink-400/60 transform rotate-45 shadow-lg">
              <div className="w-2.5 h-2.5 bg-pink-400/60 rounded-full absolute -top-1 -left-1"></div>
              <div className="w-2.5 h-2.5 bg-pink-400/60 rounded-full absolute -top-1 -right-1"></div>
            </div>
          </div>
          
          {/* Floating Stars */}
          <div className="absolute bottom-20 left-16 animate-float" style={{ animationDelay: "2s" }}>
            <div className="w-4 h-4 bg-yellow-400/60 transform rotate-45 shadow-lg">
              <div className="w-1 h-1 bg-white/60 rounded-full absolute top-0 left-0 animate-ping"></div>
            </div>
          </div>
          
          {/* Floating Balloons */}
          <div className="absolute bottom-16 right-20 animate-float" style={{ animationDelay: "2.2s" }}>
            <div className="w-6 h-9 bg-gradient-to-b from-blue-400/60 to-cyan-400/50 rounded-full shadow-lg"></div>
            <div className="w-0.5 h-6 bg-gray-400/40 ml-3"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight animate-fade-in">
            <span className="block text-foreground">Book Your</span>
            <span className="block text-primary">Funtastique Party!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium animate-fade-in">
            Select your date, choose your theme, and we'll create an <span className="text-primary font-bold">unforgettable celebration</span>.
          </p>
        </div>
        
        {/* Wavy Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,60 600,60 900,30 C1050,15 1150,0 1200,0 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column - Calendar (2/5 width) */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-primary/10 animate-scale-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                      <CalendarIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Pick a Date</h3>
                      <p className="text-sm text-muted-foreground">Choose your party day</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date() || date.getDay() === 1}
                      className="rounded-md border-0 mx-auto"
                      classNames={{
                        months: "flex flex-col",
                        month: "space-y-4",
                        caption: "flex justify-center pt-1 relative items-center mb-4",
                        caption_label: "text-lg font-bold text-foreground",
                        nav: "space-x-1 flex items-center",
                        nav_button: "h-10 w-10 bg-white hover:bg-primary/10 rounded-lg transition-colors",
                        nav_button_previous: "absolute left-1",
                        nav_button_next: "absolute right-1",
                        table: "w-full border-collapse",
                        head_row: "flex w-full",
                        head_cell: "text-muted-foreground rounded-md w-full font-semibold text-sm py-2",
                        row: "flex w-full mt-2",
                        cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 w-full",
                        day: "h-12 w-full p-0 font-medium hover:bg-primary/10 rounded-lg transition-all hover:scale-105",
                        day_selected: "bg-gradient-to-br from-primary to-primary-light text-white hover:from-primary hover:to-primary-light hover:text-white font-bold shadow-lg",
                        day_today: "bg-secondary/10 text-secondary font-bold ring-2 ring-secondary/30",
                        day_outside: "text-muted-foreground/30 opacity-50",
                        day_disabled: "text-muted-foreground/20 line-through",
                        day_hidden: "invisible",
                      }}
                    />
                  </div>

                  {date && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl animate-fade-in border-2 border-primary/20">
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Selected: {format(date, "PPP")}</span>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      💡 Mondays are closed for maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form (3/5 width) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary/10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                    <PartyPopper className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Party Details</h3>
                    <p className="text-sm text-muted-foreground">Tell us about your celebration</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-bold">1</div>
                      Contact Information
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="h-12 text-base border-2 focus:border-primary transition-colors"
                      />
                      <Input
                        type="tel"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="h-12 text-base border-2 focus:border-primary transition-colors"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-12 text-base border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Party Details */}
                  <div className="space-y-4 pt-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-bold">2</div>
                      Party Preferences
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Party Size */}
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Number of Children
                        </label>
                        <Select value={formData.partySize} onValueChange={(value) => setFormData({...formData, partySize: value})}>
                          <SelectTrigger className="h-12 border-2 focus:border-primary">
                            <SelectValue placeholder="Select party size" />
                          </SelectTrigger>
                          <SelectContent>
                            {partySizes.map((size) => (
                              <SelectItem key={size} value={size}>{size}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Time Slot */}
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Preferred Time
                        </label>
                        <Select value={formData.timeSlot} onValueChange={(value) => setFormData({...formData, timeSlot: value})}>
                          <SelectTrigger className="h-12 border-2 focus:border-primary">
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Theme Selection */}
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block flex items-center gap-2">
                        <PartyPopper className="w-4 h-4" />
                        Party Theme
                      </label>
                      <Select value={formData.theme} onValueChange={(value) => setFormData({...formData, theme: value})}>
                        <SelectTrigger className="h-12 border-2 focus:border-primary">
                          <SelectValue placeholder="Choose a theme (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          {themes.map((theme) => (
                            <SelectItem key={theme.value} value={theme.value}>
                              {theme.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-4 pt-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-bold">3</div>
                      Additional Information
                    </h4>
                    <Textarea
                      placeholder="Any special requests, dietary restrictions, or questions? Let us know!"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-[120px] text-base border-2 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      <PartyPopper className="w-5 h-5 mr-2" />
                      Send Booking Request
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      We'll confirm your booking within 24 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 px-4 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow animate-fade-in">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <a href="tel:+15147151432" className="text-primary hover:text-primary/80 transition-colors font-medium">
                +1 (514) 715-1432
              </a>
              <p className="text-sm text-muted-foreground mt-2">Mon-Fri: By Appointment<br/>Sat-Sun: 10 AM - 8 PM</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <a href="mailto:centrefuntastique@gmail.com" className="text-primary hover:text-primary/80 transition-colors font-medium break-all">
                centrefuntastique@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">We respond within 24 hours</p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-secondary rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-muted-foreground">
                3551 Rue Bélair<br />
                Montréal, QC H2A 2B1
              </p>
              <a href="https://maps.google.com/?q=3551+Rue+Bélair+Montréal" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium mt-2 inline-block">
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.1876892744246!2d-73.60259792344383!3d45.54935327107449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91896f5e0f3b7%3A0x5e8c9e6f9e0f8e0!2s3551%20Rue%20B%C3%A9lair%2C%20Montr%C3%A9al%2C%20QC%20H2A%202B1!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Centre Funtastique Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
