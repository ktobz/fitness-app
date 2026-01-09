import { motion } from "framer-motion";
import { Footprints, Flame, Clock, ArrowRight } from "lucide-react";

export default function TodayActivity() {
    const stats = [
        { label: "Steps", value: 8432, goal: 10000, color: "#ff2d55", id: "steps-stat" }, // Red
        { label: "Calories", value: 450, goal: 600, color: "#a4ff00", id: "calories-stat" }, // Green
        { label: "Minutes", value: 42, goal: 60, color: "#00e5ff", id: "minutes-stat" }, // Blue
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-950 rounded-[40px] p-10 shadow-2xl mb-24 relative overflow-hidden group cursor-pointer"
        >
            {/* Glossy overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                {/* Rings Visual */}
                <div className="relative w-56 h-56 flex items-center justify-center filter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <svg className="w-full h-full transform -rotate-90">
                        {stats.map((stat, i) => {
                            const radius = 95 - i * 22;
                            const circumference = 2 * Math.PI * radius;
                            const progress = Math.min(stat.value / stat.goal, 1);
                            const offset = circumference - progress * circumference;

                            return (
                                <g key={stat.label}>
                                    {/* Track */}
                                    <circle
                                        cx="112"
                                        cy="112"
                                        r={radius}
                                        stroke={stat.color}
                                        strokeWidth="18"
                                        fill="transparent"
                                        className="opacity-[0.08]"
                                        strokeLinecap="round"
                                    />
                                    {/* Progress */}
                                    <motion.circle
                                        initial={{ strokeDashoffset: circumference }}
                                        whileInView={{ strokeDashoffset: offset }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.5 }}
                                        cx="112"
                                        cy="112"
                                        r={radius}
                                        stroke={stat.color}
                                        strokeWidth="18"
                                        strokeDasharray={circumference}
                                        fill="transparent"
                                        strokeLinecap="round"
                                        className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                                    />
                                </g>
                            );
                        })}
                    </svg>
                    <div className="absolute flex flex-col items-center">
                        <span className="text-5xl font-black text-white italic">84<span className="text-2xl not-italic">%</span></span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Ready</span>
                    </div>
                </div>

                {/* Legend / Stats */}
                <div className="flex-1 w-full">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Today's Activity</h3>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Tuesday, Jan 06</p>
                        </div>
                        <a href="#detailed-stats" className="group/btn flex items-center gap-2 text-sm font-black text-white hover:text-primary transition-colors bg-white/5 px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10">
                            Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {stats.map((stat) => (
                            <a
                                key={stat.label}
                                href={`#${stat.id}`}
                                className="group/stat flex flex-col gap-3 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: stat.color, boxShadow: `0 0 10px ${stat.color}` }} />
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                                </div>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-4xl font-black text-white tracking-tighter group-hover/stat:text-primary transition-colors">
                                        {stat.value.toLocaleString()}
                                    </span>
                                    <span className="text-sm text-slate-500 font-bold uppercase tracking-tighter">/ {stat.goal.toLocaleString()}</span>
                                </div>
                                <div className="w-full h-2 bg-white/5 rounded-full mt-2 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${(stat.value / stat.goal) * 100}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.8 }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: stat.color }}
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
