import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Plus, LayoutDashboard, Calendar, ChevronRight, Activity, Clock, Flame } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Dashboard() {
    const navigate = useNavigate();
    const [workouts, setWorkouts] = useState([]);
    const [stats, setStats] = useState({
        totalWorkouts: 0,
        avgTime: "42m",
        caloriesBurned: "12.4k"
    });

    useEffect(() => {
        // Fetch Workouts
        fetch("http://localhost:5000/api/workouts")
            .then(res => res.json())
            .then(data => setWorkouts(data))
            .catch(err => console.error("Error fetching workouts:", err));

        // Fetch Stats
        fetch("http://localhost:5000/api/stats")
            .then(res => res.json())
            .then(data => setStats(prev => ({ ...prev, ...data })))
            .catch(err => console.error("Error fetching stats:", err));
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-72 bg-white border-r border-slate-200 flex-col p-8 fixed h-full">
                <Link to="/" className="flex items-center gap-2 mb-12 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                        <Dumbbell className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-slate-950 uppercase">TOBA-<span className="text-primary italic">FIT</span></span>
                </Link>

                <nav className="flex-1 space-y-4">
                    <Link to="/dashboard" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 text-white font-bold transition-all shadow-xl shadow-slate-200">
                        <LayoutDashboard size={20} /> Dashboard
                    </Link>
                    <Link to="/create-workout" className="flex items-center gap-4 p-4 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-slate-950 font-bold transition-all group">
                        <Plus size={20} className="group-hover:text-primary" /> Create New
                    </Link>
                    <a href="#" className="flex items-center gap-4 p-4 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-slate-950 font-bold transition-all">
                        <Calendar size={20} /> Schedule
                    </a>
                </nav>

                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 mt-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-slate-200" />
                        <div>
                            <p className="text-sm font-black text-slate-950">Alex J.</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pro Member</p>
                        </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" href="/">Logout</Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-72 p-6 md:p-12">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight text-slate-950 mb-2 italic">Performance Dashboard</h1>
                        <p className="text-slate-500 font-medium">Welcome back, Alex. Your trajectory is looking elite.</p>
                    </div>
                    <Button variant="primary" size="md" onClick={() => navigate("/create-workout")}>
                        <Plus size={18} className="mr-2" /> New Workout
                    </Button>
                </header>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { label: "Completed", val: stats.totalWorkouts, icon: Activity, color: "text-primary", bg: "bg-primary/5" },
                        { label: "Total Burn", val: stats.caloriesBurned, icon: Flame, color: "text-rose-500", bg: "bg-rose-500/5" },
                        { label: "Avg Session", val: stats.avgTime, icon: Clock, color: "text-indigo-500", bg: "bg-indigo-500/5" }
                    ].map((stat, i) => (
                        <Link to="/health-report" key={i} className="bg-white border border-slate-200 p-8 rounded-[40px] shadow-sm flex items-center gap-6 group hover:shadow-xl transition-all">
                            <div className={`w-16 h-16 rounded-[24px] ${stat.bg} ${stat.color} flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm`}>
                                <stat.icon size={28} />
                            </div>
                            <div>
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{stat.label}</p>
                                <p className="text-3xl font-black text-slate-950 tracking-tighter">{stat.val}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Workouts List */}
                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black text-slate-950 italic">Recent Sessions</h2>
                        <Link to="/workouts" className="text-sm font-bold text-primary hover:underline">View All</Link>
                    </div>

                    <div className="grid gap-4">
                        {workouts.length > 0 ? (
                            workouts.reverse().map((w) => (
                                <motion.div
                                    key={w.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="bg-white border border-slate-200 p-6 rounded-[32px] hover:border-primary transition-all group flex flex-col md:flex-row md:items-center gap-6 cursor-pointer"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                        <Dumbbell size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-black text-slate-950">{w.title}</h3>
                                        <div className="flex gap-4 mt-1">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{w.type}</p>
                                            <span className="text-slate-200">|</span>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{w.exercises.length} Exercises</p>
                                            <span className="text-slate-200">|</span>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{w.date}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex items-center gap-4">
                                        <div className="text-right">
                                            <p className="text-xs font-black text-slate-950">Active</p>
                                            <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Recorded</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all">
                                            <ChevronRight size={20} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-24 bg-white border-2 border-dashed border-slate-200 rounded-[48px] space-y-6">
                                <Activity className="w-16 h-16 text-slate-200 mx-auto" />
                                <div className="space-y-2">
                                    <p className="text-xl font-black text-slate-950">No activity recorded yet</p>
                                    <p className="text-slate-500 font-medium">Start your first transformation today.</p>
                                </div>
                                <Button variant="primary" size="md" onClick={() => navigate("/create-workout")}>
                                    Create First Workout
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
