import { Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Coaching() {
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
                            <Users className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-slate-950">Live Coaching</h1>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Connect with elite personal coaches who will guide you through real-time training sessions and provide personalized feedback.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {[
                        { name: "Coach Mike", specialty: "Strength & Power" },
                        { name: "Coach Sarah", specialty: "Weight Loss & Cardio" },
                        { name: "Coach James", specialty: "Mobility & Injury Prevention" },
                        { name: "Coach Elena", specialty: "Athletic Performance" }
                    ].map((coach) => (
                        <div key={coach.name} className="p-8 border-2 border-slate-200 rounded-2xl hover:border-primary transition-colors">
                            <div className="w-16 h-16 bg-slate-300 rounded-full mb-4" />
                            <h3 className="text-2xl font-black text-slate-950 mb-2">{coach.name}</h3>
                            <p className="text-slate-600">{coach.specialty}</p>
                        </div>
                    ))}
                </div>

                <p className="text-slate-500 text-center">Book a session with one of our certified coaches to accelerate your progress.</p>
            </div>
        </div>
    );
}
