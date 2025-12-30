import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workouts from "./components/Workouts";
import Stats from "./components/Stats";
import Community from "./components/Community";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-dark min-h-screen text-white pb-20 md:pb-0 font-sans selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Workouts />
      <Stats />
      <Community />
      <Footer />
    </div>
  )
}
