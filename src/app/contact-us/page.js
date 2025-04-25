'use client';
import Hero from '../../components/ui/Hero';
import NavButtons from '../../components/common/NavButtons';
import ContactInfoCard from '../../components/contact/ContactInfoCard/ContactInfoCard';
import ContactForm from '../../components/contact/ContactForm/ContactForm';

export default function ContactUsPage() {
  return (
    <div className="py-8 container mx-auto px-4">
      <Hero />
      <div className="mb-80"></div>
      <NavButtons />

      <div className="w-full flex flex-col lg:flex-row gap-8 mt-10 mb-16">
        <ContactInfoCard />
        <ContactForm />
      </div>
    </div>
  );
}