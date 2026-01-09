import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Workouts from "../components/Workouts";
import Stats from "../components/Stats";
import Community from "../components/Community";
import Footer from "../components/Footer";

export default function Landing() {
    return (
        <div className="bg-slate-50 min-h-screen text-slate-900 pb-20 md:pb-0 font-sans selection:bg-primary/20">
            <Navbar />
            <Hero />
            <Workouts />
            <Stats />
            <Community />
            <Footer />
        </div>
    )
}
