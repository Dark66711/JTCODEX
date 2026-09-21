import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MaintenanceDomain } from "@/components/MaintenanceDomain";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "JTCodex",
  description:
    "Diseño y desarrollo de páginas web modernas, rápidas y adaptables para negocios, emprendedores y profesionales en México.",
  areaServed: {
    "@type": "Country",
    name: "México"
  },
  email: "danieljaviertorresgarcia@gmail.com",
  telephone: "+52 618 274 9907"
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <Pricing />
        <MaintenanceDomain />
        <Solutions />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
