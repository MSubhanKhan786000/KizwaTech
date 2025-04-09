import { useTranslations } from "next-intl";

import {
  Footer,
  GlobalPartners,
  Services,
  Testimonials,
  WhyChoseUs,
  Companies,
  Hero,
} from "@/components";
import People from "@/components/People";

export default function Home() {
  const t = useTranslations("index");

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Hero />
      <GlobalPartners />
      <Companies />
      <Services />
      <WhyChoseUs />
      {/* <People /> */}
      <Testimonials />
      <Footer />
    </main>
  );
}
