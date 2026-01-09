import { Users, ArrowLeft, MapPin, Users2, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export default function FindSquads() {
    const squads = [
        {
            name: "The Grinders",
            location: "New York, NY",
            members: 24,
            focus: "Strength & Hypertrophy",
            level: "Advanced",
            image: "bg-blue-600"
        },
        {
            name: "Morning Warriors",
            location: "Los Angeles, CA",
            members: 18,
            focus: "HIIT & Cardio",
            level: "All Levels",
            image: "bg-orange-500"
        },
        {
            name: "Flex & Flow",
            location: "Austin, TX",
            members: 32,
            focus: "Yoga & Mobility",
            level: "Beginner-Intermediate",
            image: "bg-emerald-500"
        },
        {
            name: "Iron Squad",
            location: "Chicago, IL",
            members: 41,
            focus: "Powerlifting",
            level: "Advanced",
            image: "bg-purple-600"
        },
        {
            name: "Endurance Elite",
            location: "Seattle, WA",
            members: 15,
            focus: "Running & Marathon",
            level: "Advanced",
            image: "bg-pink-500"
        },
        {
            name: "Peak Performance",
            location: "Denver, CO",
            members: 28,
            focus: "Functional Fitness",
            level: "All Levels",
            image: "bg-green-600"
        },
        {
            name: "Urban Athletes",
            location: "Boston, MA",
            members: 22,
            focus: "CrossFit Style",
            level: "All Levels",
            image: "bg-red-600"
        },
        {
            name: "Wellness Warriors",
            location: "Miami, FL",
            members: 35,
            focus: "Balanced Fitness",
            level: "All Levels",
            image: "bg-cyan-500"
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
                        <h1 className="text-5xl font-black text-slate-950">Find Your Squad</h1>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Connect with local training groups and find your perfect fitness crew. Train together, motivate each other, and achieve your goals as a team.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: Users2, title: "Connect Locally", desc: "Find squads in your area" },
                        { icon: Trophy, title: "Team Challenges", desc: "Compete in group competitions" },
                        { icon: MapPin, title: "Global Reach", desc: "Join communities worldwide" }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-white border-2 border-slate-200 rounded-xl">
                            <item.icon className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-bold text-slate-950 mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mb-8">
                    <input 
                        type="search" 
                        placeholder="Search squads by location or focus..." 
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-primary"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {squads.map((squad, i) => (
                        <div key={i} className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-primary hover:shadow-lg transition-all">
                            <div className={`h-24 ${squad.image}`} />
                            <div className="p-6">
                                <h3 className="text-xl font-black text-slate-950 mb-2">{squad.name}</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm">{squad.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <Users className="w-4 h-4" />
                                        <span className="text-sm">{squad.members} members</span>
                                    </div>
                                    <div className="text-sm text-slate-600">
                                        <p className="font-semibold">{squad.focus}</p>
                                        <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded mt-1 inline-block">{squad.level}</span>
                                    </div>
                                </div>
                                <button className="w-full bg-primary text-white py-2 rounded-lg font-bold hover:bg-primary/90 transition-colors text-sm">
                                    Join Squad
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-black text-slate-950 mb-4">Can't find your squad?</h2>
                    <p className="text-slate-600 mb-6">Create a new squad and invite your training partners</p>
                    <button className="bg-slate-950 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                        Create New Squad
                    </button>
                </div>
            </div>
        </div>
    );
}
