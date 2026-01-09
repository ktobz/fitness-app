import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Clock, Flame, Dumbbell, ChevronRight, Star, X, CheckCircle2, List } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function WorkoutLibrary() {
    const [programs, setPrograms] = useState([]);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        fetch("http://localhost:5000/api/library")
            .then(res => res.json())
            .then(data => setPrograms(data))
            .catch(err => console.error("Error fetching library:", err));
    }, []);

    const filteredPrograms = filter === "All"
        ? programs
        : programs.filter(p => p.category === filter);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="container mx-auto px-6 pt-32 pb-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 mb-6 italic">
                            The <span className="text-primary">Program</span> Library
                        </h1>
                        <p className="text-slate-500 text-xl font-medium leading-relaxed">
                            Scientifically designed workout tracks to push you beyond your limits.
                            Every program includes full breakdown and video guidance.
                        </p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {["All", "Strength", "HIIT", "Yoga", "Abs", "Cardio", "Calisthenics", "Recovery"].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2.5 rounded-full font-bold transition-all text-sm border ${filter === f
                                ? "bg-slate-950 text-white border-slate-950 shadow-xl shadow-slate-200"
                                : "bg-slate-50 text-slate-500 border-slate-100 hover:bg-slate-100"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredPrograms.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedProgram(p)}
                        >
                            <div className="relative aspect-video rounded-[40px] overflow-hidden mb-6 shadow-xl border border-slate-100">
                                <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.title} />
                                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-all flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                                        <Play className="text-slate-950 fill-slate-950 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-slate-950 shadow-sm border border-white/20">
                                    {p.category}
                                </div>
                                <div className="absolute bottom-6 right-6 px-4 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-white shadow-sm">
                                    {p.difficulty}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-black text-slate-950 group-hover:text-primary transition-colors pr-4 leading-tight">{p.title}</h3>
                                    <div className="flex items-center gap-1 text-emerald-500">
                                        <Star size={14} className="fill-current" />
                                        <span className="text-xs font-black">{p.rating}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><Clock size={14} /> {p.duration}</span>
                                    <span className="flex items-center gap-1"><Flame size={14} /> {p.calories} Cal</span>
                                </div>
                                <div className="pt-4 flex items-center justify-between border-t border-slate-100 group-hover:border-primary/20 transition-colors">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-200" />
                                        <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">By {p.instructor}</span>
                                    </div>
                                    <ChevronRight className="text-slate-200 group-hover:text-primary transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            {/* Detailed Program Modal */}
            <AnimatePresence>
                {selectedProgram && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProgram(null)}
                            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            className="relative w-full max-w-5xl bg-white rounded-[48px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedProgram(null)}
                                className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-slate-400 hover:text-slate-950 transition-all flex items-center justify-center border border-slate-100"
                            >
                                <X size={24} />
                            </button>

                            {/* Left: Media & Header */}
                            <div className="md:w-1/2 relative bg-slate-950 min-h-[300px]">
                                <div className="absolute inset-0 overflow-hidden">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`${selectedProgram.videoUrl}?autoplay=1&mute=1&loop=1&playlist=${selectedProgram.videoUrl.split('/').pop().split('?')[0]}`}
                                        title="Program Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="scale-150 grayscale-[0.2]"
                                    ></iframe>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                                </div>

                                <div className="absolute bottom-12 left-12 right-12 text-white">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-primary text-[10px] font-black uppercase tracking-widest">{selectedProgram.category}</span>
                                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-widest">{selectedProgram.difficulty}</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4 leading-tight">{selectedProgram.title}</h2>
                                    <div className="flex items-center gap-6 text-slate-300 font-bold text-xs uppercase tracking-widest">
                                        <span className="flex items-center gap-2 font-black text-white"><Clock size={16} /> {selectedProgram.duration}</span>
                                        <span className="flex items-center gap-2 font-black text-white"><Flame size={16} /> {selectedProgram.calories} Cal</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Details */}
                            <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto bg-white custom-scrollbar">
                                <div className="space-y-12">
                                    <section>
                                        <h3 className="text-xl font-black italic mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                                            <List className="text-primary" size={20} /> Instructions
                                        </h3>
                                        <div className="space-y-4">
                                            {selectedProgram.instructions.map((step, i) => (
                                                <div key={i} className="flex gap-4 group">
                                                    <span className="w-6 h-6 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-[10px] font-black group-hover:bg-primary group-hover:text-white transition-colors">{i + 1}</span>
                                                    <p className="text-slate-500 font-medium leading-relaxed flex-1">{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-black italic mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                                            <Dumbbell className="text-primary" size={20} /> Movement Breakdown
                                        </h3>
                                        <div className="grid gap-3">
                                            {selectedProgram.exercises.map((ex, i) => (
                                                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-primary/20 transition-all flex justify-between items-center group">
                                                    <div>
                                                        <h4 className="font-black text-slate-950 group-hover:text-primary transition-colors">{ex.name}</h4>
                                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{ex.sets} Sets</p>
                                                    </div>
                                                    <span className="text-sm font-black text-slate-950 bg-slate-50 px-3 py-1 rounded-lg">{ex.reps} Reps</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <button className="w-full py-5 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-primary transition-all shadow-xl shadow-slate-200">
                                        Start Session Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
