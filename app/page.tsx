import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackgroundPattern } from "@/components/background-pattern"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <>
      <BackgroundPattern />
      <Navbar />
      <main>
        <Hero />
        <ScrollAnimation delay={100}>
          <About />
        </ScrollAnimation>
        <ScrollAnimation delay={100}>
          <Skills />
        </ScrollAnimation>
        <ScrollAnimation delay={100}>
          <Experience />
        </ScrollAnimation>
        <ScrollAnimation delay={100}>
          <Projects />
        </ScrollAnimation>
        <ScrollAnimation delay={100}>
          <Contact />
        </ScrollAnimation>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
