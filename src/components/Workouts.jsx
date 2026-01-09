import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Activity, Flame, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import TodayActivity from "./TodayActivity";

const workouts = [
    {
        title: "Strength Training",
        desc: "Build professional-grade muscle and functional power with guided weights.",
        icon: Dumbbell,
        color: "from-blue-600 to-indigo-600",
        stats: "45 mins • Intermediate",
        href: "/workouts"
    },
    {
        title: "HIIT Cardio",
        desc: "Maximize fat loss and explosive endurance with high-intensity intervals.",
        icon: Flame,
        color: "from-orange-500 to-rose-500",
        stats: "25 mins • Advanced",
        href: "/workouts"
    },
    {
        title: "Yoga Flow",
        desc: "Recover faster and find athletic balance with precision flow sessions.",
        icon: Activity,
        color: "from-emerald-500 to-teal-500",
        stats: "30 mins • All Levels",
        href: "/workouts"
    },
    {
        title: "Endurance Run",
        desc: "Scientific pacing for your first 5K or elite performance marathons.",
        icon: HeartPulse,
        color: "from-pink-500 to-purple-600",
        stats: "60 mins • Advanced",
        href: "/workouts"
    },
];

export default function Workouts() {
    return (
        <section id="workouts" className="py-32 px-6 bg-white relative">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-slate-950">
                            Professional <br />
                            <span className="text-primary italic">Training Programs</span>
                        </h2>
                        <p className="text-slate-500 text-xl font-medium leading-relaxed">
                            Elite-level programs designed by world-class athletes and sports scientists.
                            Choose your path and start your transformation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <Link to="/programs" className="group flex items-center gap-3 text-lg font-black text-slate-950 hover:text-primary transition-colors">
                            View All Programs
                            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                <TodayActivity />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {workouts.map((workout, index) => (
                        <Link key={index} to={workout.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -12 }}
                                className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 hover:bg-white hover:border-slate-200 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] transition-all cursor-pointer group flex flex-col h-full"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${workout.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <workout.icon className="text-white w-8 h-8" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-black mb-3 text-slate-950 group-hover:text-primary transition-colors">{workout.title}</h3>
                                    <p className="text-slate-500 font-medium mb-6 leading-relaxed">{workout.desc}</p>
                                </div>

                                <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between mt-auto">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{workout.stats}</span>
                                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 md:hidden text-center">
                    <Link to="/programs" className="inline-flex items-center gap-2 text-lg font-black text-slate-950">
                        View All Programs <ArrowUpRight className="w-5 h-5 text-primary" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
