import { Helmet } from "react-helmet";
import "./App.css";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Hero from "./sections/Hero";
import ImageScroll from "./sections/ImageScroll";
import Projects from "./sections/Projects";
import SkillsTools from "./sections/SkillsTools";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Samrat Bhattacharya Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Samrat Bhattacharya, CSE 2026 batch of NIT Agartala"
        />
        <meta
          name="keywords"
          content="Samrat Bhattacharya, NIT Agartala, 2026, batch of 2026, 2026 batch, National Institute of Technology Agartala, Computer Science and Engineering, CSE, Google Developer Student Clubs, GDSC, Web Development, Decembothon, MERN Stack, Coding Clubs, Student Leadership, Developers and coders club, DCC, BTC, Board of Technical Council, Gymkhana, Gymkhana Technical"
        />
        <link
          rel="cannonical"
          href="https://samratbhattacharya-portfolio-0.vercel.app/"
        />
      </Helmet>
      <Hero />
      <About />
      <Projects />
      <ImageScroll />
      <SkillsTools />
      <Contacts />
    </>
  );
}

export default App;
