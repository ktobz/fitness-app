import { Users, ArrowLeft, MessageSquare, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function CommunityPage() {
    const communities = [
        {
            name: "Strength Warriors",
            members: 2400,
            desc: "Dedicated to building elite-level strength",
            color: "from-blue-600 to-indigo-600"
        },
        {
            name: "Cardio Champions",
            members: 1800,
            desc: "High-intensity athletes pushing endurance limits",
            color: "from-orange-500 to-rose-500"
        },
        {
            name: "Flex & Flow",
            members: 1500,
            desc: "Yoga and mobility-focused community",
            color: "from-emerald-500 to-teal-500"
        },
        {
            name: "Elite Hypertrophy",
            members: 2100,
            desc: "Advanced muscle-building techniques and form",
            color: "from-pink-500 to-purple-600"
        },
        {
            name: "Marathon Masters",
            members: 950,
            desc: "Long-distance running and endurance training",
            color: "from-yellow-500 to-orange-500"
        },
        {
            name: "Functional Fitness",
            members: 1600,
            desc: "Real-world movement patterns and functional strength",
            color: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold mb-8">
                    <ArrowLeft className="w-5 h-5" />
                    Back Home
                </Link>

                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-primary/10 rounded-2xl">
                            <Users className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-slate-950">Community Hub</h1>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Join thousands of fitness enthusiasts in specialized communities. Connect, compete, and grow together with like-minded athletes.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: Users, title: "100k+ Members", desc: "Active community worldwide" },
                        { icon: MessageSquare, title: "Daily Discussions", desc: "Share tips and motivations" },
                        { icon: Award, title: "Challenges", desc: "Weekly community competitions" }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-white border-2 border-slate-200 rounded-xl text-center">
                            <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                            <h3 className="font-bold text-slate-950 mb-1">{item.title}</h3>
                            <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-black text-slate-950 mb-8">Join a Community</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {communities.map((community, i) => (
                        <div key={i} className={`bg-gradient-to-br ${community.color} rounded-2xl p-8 text-white hover:shadow-xl transition-all cursor-pointer group`}>
                            <h3 className="text-2xl font-black mb-2 group-hover:scale-105 transition-transform">{community.name}</h3>
                            <p className="text-white/80 mb-6">{community.desc}</p>
                            <div className="flex items-center justify-between pt-6 border-t border-white/20">
                                <span className="text-sm font-bold">{community.members.toLocaleString()} members</span>
                                <button className="px-4 py-2 bg-white text-slate-950 rounded-lg font-bold hover:bg-slate-100 transition-colors text-sm">
                                    Join Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-2xl p-12">
                    <h2 className="text-3xl font-black text-slate-950 mb-6">Create Your Own Community</h2>
                    <p className="text-slate-600 text-lg mb-8 max-w-2xl">
                        Have a unique fitness niche? Start your own community and build a following of like-minded enthusiasts.
                    </p>
                    <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
                        Start Community
                    </button>
                </div>
            </div>
        </div>
    );
}
