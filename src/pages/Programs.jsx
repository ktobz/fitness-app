import { Dumbbell, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Programs() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold mb-8">
                    <ArrowLeft className="w-5 h-5" />
                    Back Home
                </Link>

                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-primary/10 rounded-2xl">
                            <Dumbbell className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-slate-950">Training Programs</h1>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Explore our comprehensive collection of scientifically-designed training programs tailored to your fitness goals and experience level.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {[
                        { title: "Strength Building", desc: "Advanced hypertrophy and strength protocols" },
                        { title: "Cardio Endurance", desc: "HIIT and steady-state cardio programs" },
                        { title: "Flexibility & Mobility", desc: "Dynamic stretching and range of motion work" },
                        { title: "Functional Training", desc: "Real-world movement patterns and core work" }
                    ].map((program) => (
                        <div key={program.title} className="p-8 border-2 border-slate-200 rounded-2xl hover:border-primary transition-colors">
                            <h3 className="text-2xl font-black text-slate-950 mb-2">{program.title}</h3>
                            <p className="text-slate-600">{program.desc}</p>
                        </div>
                    ))}
                </div>

                <p className="text-slate-500 text-center">Start your transformation today with one of our expertly-crafted programs.</p>
            </div>
        </div>
    );
}
