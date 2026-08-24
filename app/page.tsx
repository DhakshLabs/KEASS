import { Hero } from "@/components/sections/hero";
import { Value } from "@/components/sections/value";
import { About } from "@/components/sections/about";
import { Difference } from "@/components/sections/difference";
import { Process } from "@/components/sections/process";
import { Partners } from "@/components/sections/partners";
import { Experts } from "@/components/sections/experts";
import { Testimonials } from "@/components/sections/testimonials";
import { Insights } from "@/components/sections/insights";
import { Leadership } from "@/components/sections/leadership";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Value />
      <About />
      <Difference />
      <Process />
      <Partners />
      <Experts />
      <Testimonials />
      <Insights />
      <Leadership />
      <Contact />
    </>
  );
}
