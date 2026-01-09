import { Trophy, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Challenges() {
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
                            <Trophy className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-slate-950">Fitness Challenges</h1>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Participate in weekly and monthly challenges to push your limits, earn badges, and compete with the community.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {[
                        { challenge: "100 Burpees", duration: "This Week", participants: "1.2k" },
                        { challenge: "Mile Run", duration: "This Week", participants: "892" },
                        { challenge: "Plank Hold", duration: "This Month", participants: "3.4k" },
                        { challenge: "Squat Quest", duration: "This Month", participants: "2.1k" }
                    ].map((item) => (
                        <div key={item.challenge} className="p-8 border-2 border-slate-200 rounded-2xl hover:border-primary transition-colors cursor-pointer">
                            <h3 className="text-2xl font-black text-slate-950 mb-2">{item.challenge}</h3>
                            <p className="text-slate-600 mb-2">{item.duration}</p>
                            <p className="text-sm text-primary font-bold">{item.participants} participants</p>
                        </div>
                    ))}
                </div>

                <p className="text-slate-500 text-center">Challenge yourself and inspire others! Join a challenge today.</p>
            </div>
        </div>
    );
}
