import { ArrowLeft, TrendingUp, BarChart3, Target, Zap, Activity, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PerformanceReport() {
    const performanceData = {
        overallScore: 94,
        weeklyPrecision: 89,
        performanceGains: 23,
        bestDay: "Wednesday",
        streakDays: 12,
        totalWorkouts: 48
    };

    const weeklyStats = [
        { day: "Mon", score: 85, intensity: 7 },
        { day: "Tue", score: 92, intensity: 8 },
        { day: "Wed", score: 94, intensity: 9 },
        { day: "Thu", score: 88, intensity: 7 },
        { day: "Fri", score: 91, intensity: 8 },
        { day: "Sat", score: 90, intensity: 7 },
        { day: "Sun", score: 86, intensity: 6 }
    ];

    const insights = [
        { title: "Peak Performance", desc: "Your best lifts occur between 3-5 PM", icon: Zap },
        { title: "Form Consistency", desc: "94% form consistency on compound lifts", icon: Target },
        { title: "Volume Progression", desc: "+23% increase in total volume this month", icon: TrendingUp },
        { title: "Recovery Rate", desc: "Optimal recovery detected - push harder", icon: Activity }
    ];

    const monthlyProgress = [
        { metric: "Strength Gains", value: "+18%", color: "from-blue-600 to-indigo-600" },
        { metric: "Endurance", value: "+15%", color: "from-orange-500 to-rose-500" },
        { metric: "Form Score", value: "+12%", color: "from-emerald-500 to-teal-500" },
        { metric: "Consistency", value: "+23%", color: "from-pink-500 to-purple-600" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <Link to="/performance-lab" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold mb-8">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Lab
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-primary/10 rounded-2xl">
                            <BarChart3 className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-white">Performance Report</h1>
                    </div>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                        Comprehensive analysis of your fitness performance, weekly precision, and monthly gains.
                    </p>
                </motion.div>

                {/* Key Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid md:grid-cols-3 gap-6 mb-16"
                >
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8">
                        <p className="text-slate-400 text-sm font-bold mb-3">OVERALL SCORE</p>
                        <p className="text-5xl font-black text-white mb-2">{performanceData.overallScore}</p>
                        <p className="text-emerald-400 text-sm font-bold">↑ 8% from last week</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-2xl p-8">
                        <p className="text-slate-400 text-sm font-bold mb-3">WEEKLY PRECISION</p>
                        <p className="text-5xl font-black text-white mb-2">{performanceData.weeklyPrecision}%</p>
                        <p className="text-blue-400 text-sm font-bold">Form consistency excellent</p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 rounded-2xl p-8">
                        <p className="text-slate-400 text-sm font-bold mb-3">PERFORMANCE GAINS</p>
                        <p className="text-5xl font-black text-white mb-2">+{performanceData.performanceGains}%</p>
                        <p className="text-emerald-400 text-sm font-bold">Monthly progression</p>
                    </div>
                </motion.div>

                {/* Weekly Performance Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 mb-16"
                >
                    <h2 className="text-2xl font-black text-white mb-8">Weekly Performance</h2>
                    <div className="grid grid-cols-7 gap-4 mb-6">
                        {weeklyStats.map((day, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <p className="text-slate-400 text-sm font-bold mb-2">{day.day}</p>
                                <div className="w-full bg-slate-700/50 rounded-lg p-2 flex flex-col items-center justify-end h-32 relative">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${(day.score / 100) * 100}%` }}
                                        transition={{ delay: i * 0.05, duration: 0.6 }}
                                        className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-lg absolute bottom-0"
                                    />
                                    <p className="relative z-10 text-white font-bold text-sm mt-2">{day.score}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center pt-6 border-t border-slate-700/50">
                        <span className="text-slate-400 text-sm">Average Score: 89/100</span>
                        <span className="text-emerald-400 font-bold">↑ 5% improvement</span>
                    </div>
                </motion.div>

                {/* Monthly Progress */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid md:grid-cols-2 gap-6 mb-16"
                >
                    {monthlyProgress.map((item, i) => (
                        <div key={i} className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 text-white`}>
                            <p className="text-slate-200/80 text-sm font-bold mb-2">MONTHLY GAIN</p>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-3xl font-black mb-1">{item.metric}</p>
                                    <p className="text-slate-100/70 text-sm">From last month</p>
                                </div>
                                <p className="text-4xl font-black">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Performance Insights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-black text-white mb-8">Performance Insights</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {insights.map((insight, i) => (
                            <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-primary/50 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                                        <insight.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-white mb-2">{insight.title}</h3>
                                        <p className="text-slate-400 text-sm">{insight.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
                        <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                        <p className="text-slate-400 text-sm font-bold mb-1">CURRENT STREAK</p>
                        <p className="text-4xl font-black text-white">{performanceData.streakDays}</p>
                        <p className="text-slate-500 text-sm mt-2">days of training</p>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
                        <Activity className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                        <p className="text-slate-400 text-sm font-bold mb-1">TOTAL WORKOUTS</p>
                        <p className="text-4xl font-black text-white">{performanceData.totalWorkouts}</p>
                        <p className="text-slate-500 text-sm mt-2">this month</p>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
                        <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                        <p className="text-slate-400 text-sm font-bold mb-1">BEST DAY</p>
                        <p className="text-4xl font-black text-white">{performanceData.bestDay}</p>
                        <p className="text-slate-500 text-sm mt-2">highest performance</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
