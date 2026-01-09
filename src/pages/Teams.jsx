import { Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Teams() {
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
                        <h1 className="text-5xl font-black text-slate-950">Find Your Team</h1>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Join or create fitness teams to collaborate with friends, compete with other squads, and stay motivated together.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {[
                        { team: "The Grinders", members: "24 members", goal: "Strength & Hypertrophy" },
                        { team: "Cardio Kings", members: "18 members", goal: "Endurance & Speed" },
                        { team: "Core Crew", members: "32 members", goal: "Functional Fitness" },
                        { team: "The Iron Squad", members: "41 members", goal: "Powerlifting" }
                    ].map((item) => (
                        <div key={item.team} className="p-8 border-2 border-slate-200 rounded-2xl hover:border-primary transition-colors cursor-pointer">
                            <h3 className="text-2xl font-black text-slate-950 mb-2">{item.team}</h3>
                            <p className="text-slate-600 mb-2">{item.members}</p>
                            <p className="text-sm text-primary font-bold">{item.goal}</p>
                        </div>
                    ))}
                </div>

                <p className="text-slate-500 text-center">Find your squad and achieve your fitness goals together!</p>
            </div>
        </div>
    );
}
