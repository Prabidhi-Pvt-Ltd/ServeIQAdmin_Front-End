import {
  Hero,
  Services,
  Feature,
  About,
  Info,
  Premium,
  NationSection,
  Blog,
  Connect,
  CountrySection,
} from "../components/home";

export default function Home() {
  return (
    <section id="home">
      <Hero />
      <Services />
      <Feature />
      <About />
      <Info />
      <Premium />
      <CountrySection />
      <NationSection />
      <Blog />
      <Connect />
    </section>
  );
}
