import './App.css'
import About from './sections/About'
import Contacts from './sections/Contacts'
import Hero from './sections/Hero'
import ImageScroll from './sections/ImageScroll'
import Projects from './sections/Projects'
import SkillsTools from './sections/SkillsTools'

function App() {

  return (
    <>
    <Hero/>
    <About/>
    <Projects/>
    {/* <ImageScroll/> */}
    <SkillsTools/>
    <Contacts/>
    </>
  )
}

export default App
