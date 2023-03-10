import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Business from "./components/Business"
import Billing from "./components/Billing"
import CardDeal from "./components/CardDeal"
import Testimonials from "./components/Testimonials"
import Clients from "./components/Clients"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="container flow-body">
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
