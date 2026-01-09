import { motion } from "framer-motion";
import { TrendingUp, Award, Target, ArrowRight } from "lucide-react";

export default function Stats() {
    return (
        <section id="stats" className="py-32 px-6 bg-slate-50 relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="text-slate-900 text-xs font-bold tracking-widest uppercase">Performance Tracking</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-slate-950">
                            Deep Insights into <br />
                            <span className="text-secondary italic">Your Progress</span>
                        </h2>

                        <p className="text-slate-500 text-xl font-medium mb-12 leading-relaxed">
                            Stop guessing. Our performance analytics engine analyzes every rep, every run, and every rest period to optimize your path to perfection.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { label: "Weekly Precision", val: "98.4%", icon: Target, id: "precision" },
                                { label: "Performance Gain", val: "+12.5%", icon: TrendingUp, id: "gains" },
                                { label: "Goals Reached", val: "12/12", icon: Award, id: "goals" }
                            ].map((stat) => (
                                <a key={stat.id} href={`#${stat.id}`} className="group p-6 rounded-[32px] bg-white border border-slate-200 hover:border-primary transition-all hover:shadow-xl shadow-slate-200/50">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{stat.label}</p>
                                    <p className="text-3xl font-black text-slate-950">{stat.val}</p>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="bg-slate-950 p-10 rounded-[48px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] relative z-10 border border-white/5">
                            <div className="flex justify-between items-center mb-12">
                                <h4 className="text-xl font-black text-white italic">Velocity Training</h4>
                                <a href="#full-charts" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors flex items-center gap-2">
                                    Full Report <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            <div className="flex items-end justify-between h-56 gap-4">
                                {[45, 75, 55, 95, 70, 85, 60].map((h, i) => (
                                    <div key={i} className="flex-1 flex flex-col gap-3 items-center group cursor-pointer">
                                        <div className="w-full relative flex items-end justify-center h-full">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "circOut" }}
                                                className="w-full bg-linear-to-t from-primary/30 to-primary rounded-t-2xl relative"
                                            >
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-950 text-[10px] font-black py-1.5 px-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all shadow-xl pointer-events-none">
                                                    {h * 12}pts
                                                </div>
                                            </motion.div>
                                        </div>
                                        <span className="text-[10px] font-black uppercase text-slate-600 group-hover:text-primary transition-colors">
                                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-10 border-t border-white/5 grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Peak Performance</p>
                                    <p className="text-2xl font-black text-white">12,482 <span className="text-xs font-bold text-emerald-500">+12%</span></p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Total Effort</p>
                                    <p className="text-2xl font-black text-white">8.4 hrs <span className="text-xs font-bold text-rose-500">-2%</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-200 z-20 flex items-center gap-4"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary font-black text-2xl">🏆</div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">New Record</p>
                                <p className="font-black text-slate-950">Top 1% Worldwide</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
