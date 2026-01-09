import { MessageSquare, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Discord() {
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
                            <MessageSquare className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-slate-950">Join Our Discord</h1>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Connect with thousands of fitness enthusiasts, share your progress, get advice, and participate in daily challenges on our Discord community.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {[
                        { channel: "#announcements", desc: "Latest updates and news" },
                        { channel: "#workout-logs", desc: "Share your training sessions" },
                        { channel: "#nutrition-talk", desc: "Discuss meal plans and recipes" },
                        { channel: "#general-chat", desc: "Connect with the community" }
                    ].map((item) => (
                        <div key={item.channel} className="p-8 border-2 border-slate-200 rounded-2xl hover:border-primary transition-colors">
                            <h3 className="text-2xl font-black text-slate-950 mb-2">{item.channel}</h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-white py-4 rounded-xl font-bold text-center hover:bg-primary/90 transition-colors">
                    Join Discord Server
                </a>
            </div>
        </div>
    );
}
