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
// import {
//   SubscribePopup,
//   SignIn,
//   Password,
//   SignUp,
// } from "../components/susbscribe";

export default function Home() {
  return (
    <>
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
      {/* <SubscribePopup />

      <Password />
      <SignUp /> */}
    </>
  );
}
