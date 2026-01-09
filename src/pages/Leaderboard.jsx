import { BarChart3, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Leaderboard() {
    const topUsers = [
        { rank: 1, name: "Sarah 'The Flash'", points: 12402, streak: 45 },
        { rank: 2, name: "Mike D. Power", points: 11895, streak: 38 },
        { rank: 3, name: "Luna J. Flow", points: 11200, streak: 52 },
        { rank: 4, name: "Alex Strength", points: 10150, streak: 29 },
        { rank: 5, name: "Jamie Elite", points: 9876, streak: 35 }
    ];

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
                            <BarChart3 className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-slate-950">Global Leaderboard</h1>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Compete with the community and see where you rank among fitness enthusiasts worldwide.
                    </p>
                </div>

                <div className="space-y-2 mb-12">
                    {topUsers.map((user) => (
                        <div key={user.rank} className="flex items-center gap-6 p-6 bg-white border-2 border-slate-200 rounded-xl hover:border-primary transition-colors">
                            <div className="text-3xl font-black text-primary w-12 text-center">{user.rank}</div>
                            <div className="flex-1">
                                <p className="text-lg font-bold text-slate-950">{user.name}</p>
                                <p className="text-sm text-slate-500">{user.streak} day streak</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-black text-slate-950">{user.points.toLocaleString()}</p>
                                <p className="text-xs text-slate-400">points</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-slate-500 text-center">Keep pushing to earn more points and climb the leaderboard!</p>
            </div>
        </div>
    );
}
