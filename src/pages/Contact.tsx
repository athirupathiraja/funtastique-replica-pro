import { useState, useEffect } from "react";
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
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
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

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Pre-select theme from URL parameter
    const themeParam = searchParams.get('theme');
    if (themeParam) {
      setFormData(prev => ({ ...prev, theme: themeParam }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        toast({
          title: `🎉 ${t('contact.page.bookingSuccess')}`,
          description: t('contact.page.bookingSuccessDesc'),
        });
        setFormData({ name: "", email: "", phone: "", message: "", partySize: "", theme: "", timeSlot: "" });
        setDate(undefined);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again or contact us directly.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to send message. Please contact us directly via phone or email.",
        variant: "destructive"
      });
    }
  };

  const themes = [
    { value: "frozen", labelKey: "themes.frozen.title", icon: "❄️" },
    { value: "princess", labelKey: "themes.princess.title", icon: "👑" },
    { value: "cupcake", labelKey: "themes.cupcake.title", icon: "🧁" },
    { value: "bracelet", labelKey: "themes.bracelet.title", icon: "💎" },
    { value: "cartoon", labelKey: "themes.cartoon.title", icon: "🎨" },
    { value: "custom", labelKey: "contact.page.customTheme", icon: "✨" }
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
            <span className="block text-foreground">{t('contact.page.heroTitle')}</span>
            <span className="block text-primary">{t('contact.page.heroSubtitle')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium animate-fade-in">
            {t('contact.page.heroDescription').split('unforgettable celebration').map((part, i, arr) => (
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="text-primary font-bold">unforgettable celebration</span>
                </span>
              ) : part
            ))}
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
      <section className="py-20 px-1 md:px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column - Calendar (2/5 width) */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-xl p-3 md:p-6 border-2 border-primary/10 animate-scale-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                      <CalendarIcon className="w-6 h-6 text-white" />
                    </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{t('contact.page.pickDate')}</h3>
                    <p className="text-sm text-muted-foreground">{t('contact.page.choosePartyDay')}</p>
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
                      💡 {t('contact.page.mondaysClosed')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form (3/5 width) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 border-2 border-primary/10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                    <PartyPopper className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{t('contact.page.partyDetails')}</h3>
                    <p className="text-sm text-muted-foreground">{t('contact.page.tellUsAbout')}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="fb8476d5-ce6b-4882-8fe5-005695e51850" />
                  
                  {/* Honeypot Spam Protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                  
                  {/* Hidden Date Field */}
                  <input type="hidden" name="date" value={date ? format(date, 'PPP') : ''} />
                  
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-bold">1</div>
                      {t('contact.form.name')}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="name"
                        placeholder={`${t('contact.page.namePlaceholder')} *`}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="h-12 text-base border-2 focus:border-primary transition-colors"
                      />
                      <Input
                        type="tel"
                        name="phone"
                        placeholder={`${t('contact.page.phonePlaceholder')} *`}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="h-12 text-base border-2 focus:border-primary transition-colors"
                      />
                    </div>
                    <Input
                      type="email"
                      name="email"
                      placeholder={`${t('contact.page.emailPlaceholder')} *`}
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
                      {t('contact.page.partyDetails')}
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Party Size */}
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {t('contact.page.selectPartySize')}
                        </label>
                        <Select name="partySize" value={formData.partySize} onValueChange={(value) => setFormData({...formData, partySize: value})}>
                          <SelectTrigger className="h-12 border-2 focus:border-primary">
                            <SelectValue placeholder={t('contact.page.selectPartySize')} />
                          </SelectTrigger>
                          <SelectContent>
                            {partySizes.map((size) => (
                              <SelectItem key={size} value={size}>{size}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <input type="hidden" name="partySize" value={formData.partySize} />
                      </div>

                      {/* Time Slot */}
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {t('contact.page.selectTimeSlot')}
                        </label>
                        <Select name="timeSlot" value={formData.timeSlot} onValueChange={(value) => setFormData({...formData, timeSlot: value})}>
                          <SelectTrigger className="h-12 border-2 focus:border-primary">
                            <SelectValue placeholder={t('contact.page.selectTimeSlot')} />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <input type="hidden" name="timeSlot" value={formData.timeSlot} />
                      </div>
                    </div>

                    {/* Theme Selection */}
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block flex items-center gap-2">
                        <PartyPopper className="w-4 h-4" />
                        {t('contact.page.selectTheme')}
                      </label>
                      <Select name="theme" value={formData.theme} onValueChange={(value) => setFormData({...formData, theme: value})}>
                        <SelectTrigger className="h-12 border-2 focus:border-primary">
                          <SelectValue placeholder={t('contact.page.selectTheme')} />
                        </SelectTrigger>
                        <SelectContent>
                          {themes.map((theme) => (
                            <SelectItem key={theme.value} value={theme.value}>
                              {theme.icon} {t(theme.labelKey)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="theme" value={formData.theme} />
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-4 pt-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-bold">3</div>
                      {t('contact.form.message')}
                    </h4>
                    <Textarea
                      name="message"
                      placeholder={t('contact.page.messagePlaceholder')}
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
                      {t('contact.form.submit')}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      {t('contact.page.bookingSuccessDesc')}
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
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mb-4 text-3xl">
                📞
              </div>
              <h3 className="font-bold text-lg mb-2">{t('contact.page.callUs')}</h3>
              <a href="tel:+15147151432" className="text-primary hover:text-primary/80 transition-colors font-medium">
                {t('contact.phone.value')}
              </a>
              <p className="text-sm text-muted-foreground mt-2">{t('contact.page.hoursWeekday')}<br/>{t('contact.page.hoursWeekend')}</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mb-4 text-3xl">
                ✉️
              </div>
              <h3 className="font-bold text-lg mb-2">{t('contact.page.emailUs')}</h3>
              <a href="mailto:centrefuntastique@gmail.com" className="text-primary hover:text-primary/80 transition-colors font-medium break-all">
                {t('contact.email.value')}
              </a>
              <p className="text-sm text-muted-foreground mt-2">{t('contact.page.respondTime')}</p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-secondary rounded-full flex items-center justify-center mb-4 text-3xl">
                📍
              </div>
              <h3 className="font-bold text-lg mb-2">{t('contact.page.visitUs')}</h3>
              <p className="text-muted-foreground">
                {t('locations.detail.addressLine1')}<br />
                {t('locations.detail.addressLine2')}
              </p>
              <a href="https://maps.google.com/?q=3551+Rue+Bélair+Montréal" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium mt-2 inline-block">
                {t('contact.page.getDirections')} →
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

      {/* Trust Badge */}
      <section className="py-8 px-4 bg-white border-t">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted-foreground">
            Website crafted with care by{' '}
            <a 
              href="https://griffinstudios.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Griffin Studios
            </a>
            {' '}— Web solutions for growing businesses
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
