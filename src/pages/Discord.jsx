import { MessageSquare, ArrowLeft, Users, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function Discord() {
    const channels = [
        { name: "#announcements", desc: "Latest updates and news", members: "12.5k" },
        { name: "#workout-logs", desc: "Share your training sessions", members: "8.3k" },
        { name: "#nutrition-talk", desc: "Discuss meal plans and recipes", members: "6.2k" },
        { name: "#general-chat", desc: "Connect with the community", members: "9.8k" },
        { name: "#challenges", desc: "Participate in weekly challenges", members: "7.1k" },
        { name: "#coaching", desc: "Get advice from certified coaches", members: "5.4k" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold mb-8">
                    <ArrowLeft className="w-5 h-5" />
                    Back Home
                </Link>

                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-primary/10 rounded-2xl">
                            <MessageSquare className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-white">Join Our Discord Community</h1>
                    </div>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
                        Connect with 50,000+ fitness enthusiasts worldwide. Share your progress, get advice, participate in challenges, and be part of an elite fitness community.
                    </p>
                </div>

                {/* Community Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                        <Users className="w-8 h-8 text-primary mb-3" />
                        <p className="text-slate-400 text-sm font-bold mb-1">ACTIVE MEMBERS</p>
                        <p className="text-4xl font-black text-white">50k+</p>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                        <TrendingUp className="w-8 h-8 text-emerald-500 mb-3" />
                        <p className="text-slate-400 text-sm font-bold mb-1">MESSAGES/DAY</p>
                        <p className="text-4xl font-black text-white">15k+</p>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                        <Award className="w-8 h-8 text-blue-500 mb-3" />
                        <p className="text-slate-400 text-sm font-bold mb-1">VERIFIED COACHES</p>
                        <p className="text-4xl font-black text-white">150+</p>
                    </div>
                </div>

                {/* Channels */}
                <h2 className="text-2xl font-black text-white mb-8">Popular Channels</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {channels.map((channel, i) => (
                        <div key={i} className="bg-slate-800/50 border border-slate-700/50 hover:border-primary/50 rounded-2xl p-6 transition-colors">
                            <h3 className="text-xl font-black text-white mb-2">{channel.name}</h3>
                            <p className="text-slate-400 text-sm mb-4">{channel.desc}</p>
                            <p className="text-xs text-slate-500 font-bold">{channel.members} members</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">Ready to Join?</h2>
                    <p className="text-slate-300 text-lg mb-8">Connect with the community, share your fitness journey, and grow together.</p>
                    <a 
                        href="https://discord.gg/fitness" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors text-lg"
                    >
                        Join Discord Server Now
                    </a>
                </div>
            </div>
        </div>
    );
}
