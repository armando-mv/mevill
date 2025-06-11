
import { Metadata } from 'next';
import AnimatedSection from '@/components/layout/AnimatedSection';
import ContactForm from '@/components/sections/ContactForm';
import HeroSection from '@/components/sections/HeroSection';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Mevill Constructions for inquiries, project discussions, or partnership opportunities.',
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Get In Touch"
        subtitle="We're here to answer your questions and discuss your next project. Reach out to us, and let's build something great together."
      />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            
            <AnimatedSection>
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">Contact Information</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Feel free to contact us through any of the methods below, or use the form to send us a direct message. We look forward to hearing from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-8 w-8 text-accent mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-accent-foreground">Our Office</h3>
                    <p className="text-foreground/70">123 Construction Way, Suite 456<br />Buildingtown, ST 78901</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-8 w-8 text-accent mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-accent-foreground">Phone</h3>
                    <a href="tel:+1234567890" className="text-foreground/70 hover:text-primary transition-colors">(123) 456-7890</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-8 w-8 text-accent mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-accent-foreground">Email</h3>
                    <a href="mailto:info@mevill.com" className="text-foreground/70 hover:text-primary transition-colors">info@mevill.com</a>
                  </div>
                </div>
              </div>
              <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="https://placehold.co/600x400.png" 
                  alt="Map to Mevill Constructions office" 
                  data-ai-hint="office location map" 
                  width={600} 
                  height={400} 
                  className="w-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100} className="bg-card p-8 md:p-10 rounded-xl shadow-xl">
              <h2 className="font-headline text-3xl font-bold text-primary mb-8 text-center md:text-left">Send Us a Message</h2>
              <ContactForm />
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
}
