import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Zap, Users, Dumbbell, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const slides = [
        {
            id: 1,
            badge: "New: 2024 Pro Training Programs",
            title: "TOBA-FIT",
            subtitle: "Professional Training",
            description: "Professional training, redefined. Built for athletes by athletes. Join a community of high achievers and unlock your full physical potential.",
            primaryCTA: "Start Training Free",
            secondaryCTA: "Watch Demo",
            icon: Dumbbell,
            stats: [
                { label: "Elite Coaches", value: "50+" },
                { label: "Weekly Workouts", value: "200+" },
                { label: "Happy Users", value: "100k+" }
            ],
            visual: "mockup"
        },
        {
            id: 2,
            badge: "Personalized Power Coaching",
            title: "PERFORM",
            subtitle: "The Lab",
            description: "Track every rep, analyze your form, and push past plateaus with our cutting-edge Performance Lab. Real-time data for real-world results.",
            primaryCTA: "Explore the Lab",
            secondaryCTA: "Learn More",
            icon: Zap,
            stats: [
                { label: "Data Points", value: "1M+" },
                { label: "Personalized Feedback", value: "Real-time" },
                { label: "Accuracy", value: "99.2%" }
            ],
            visual: "stats"
        },
        {
            id: 3,
            badge: "Global Fitness Network",
            title: "CONNECT",
            subtitle: "Join the Tribe",
            description: "Fitness is better together. Compete in global leaderboards, join local squads, and share your progress with a community that inspires.",
            primaryCTA: "Join Community",
            secondaryCTA: "Find Squads",
            icon: Users,
            stats: [
                { label: "Active Squads", value: "5k+" },
                { label: "Leaderboards", value: "12" },
                { label: "Social Interactions", value: "2M+" }
            ],
            visual: "community"
        }
    ];

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32 pb-20">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-slate-50/50">
                <div className="absolute top-[-10%] left-[-10%] w-150 h-150 bg-indigo-500/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-150 h-150 bg-rose-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto relative h-full">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="grid lg:grid-cols-2 gap-16 items-center w-full"
                    >
                        {/* Text Content */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 hover:bg-slate-50 transition-colors group"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
                                <span className="text-slate-900 text-xs font-bold tracking-tight uppercase">
                                    {slide.badge}
                                </span>
                                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                            </motion.div>

                            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9] text-slate-950">
                                {slide.title}<br />
                                <span className="text-2xl md:text-4xl text-primary italic">{slide.subtitle}</span>
                            </h1>

                            <p className="text-slate-500 text-lg md:text-xl font-medium mb-12 max-w-lg leading-relaxed">
                                {slide.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button href="#workouts" size="lg" variant="primary" className="shadow-2xl">
                                    {slide.primaryCTA} <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button href="#stats" size="lg" variant="secondary" className="group">
                                    <Play className="mr-2 w-5 h-5 fill-slate-950" /> {slide.secondaryCTA}
                                </Button>
                            </div>

                            <div className="mt-12 flex flex-wrap items-center gap-8 text-slate-500">
                                {slide.stats.map((stat, i) => (
                                    <div key={i} className="group">
                                        <p className="text-2xl font-black text-slate-950 group-hover:text-primary transition-colors">{stat.value}</p>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-600">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Section */}
                        <div className="relative hidden lg:block">
                            <div className="relative z-10 bg-white border border-slate-200 p-8 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] -rotate-3 hover:rotate-0 transition-all duration-700">
                                {slide.visual === "mockup" && (
                                    <>
                                        <div className="flex justify-between items-center mb-10">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-white font-bold text-xl uppercase">{slide.title[0]}</div>
                                                <div>
                                                    <p className="font-bold text-slate-950">Elite Performance</p>
                                                    <p className="text-xs text-slate-400 font-bold tracking-wider uppercase">Pro Level</p>
                                                </div>
                                            </div>
                                            <div className="px-4 py-2 rounded-xl bg-slate-50 text-slate-950 text-xs font-bold border border-slate-100 italic">&quot;Peak Condition&quot;</div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 group cursor-pointer hover:border-indigo-500/30 transition-colors">
                                                <p className="text-sm font-bold text-slate-400 mb-1 uppercase tracking-wider">Focus</p>
                                                <p className="text-3xl font-black text-slate-950 group-hover:text-indigo-600 transition-colors">Strength</p>
                                            </div>
                                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 group cursor-pointer hover:border-rose-500/30 transition-colors">
                                                <p className="text-sm font-bold text-slate-400 mb-1 uppercase tracking-wider">Intensity</p>
                                                <p className="text-3xl font-black text-slate-950 group-hover:text-rose-600 transition-colors">85%</p>
                                            </div>
                                        </div>
                                        <div className="h-40 w-full bg-slate-50 border border-slate-100 rounded-3xl p-6 relative overflow-hidden group cursor-pointer">
                                            <p className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Weekly Progress</p>
                                            <div className="flex items-end gap-2 h-16">
                                                {[40, 60, 45, 90, 65, 80, 50, 70, 40].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-indigo-500/10 rounded-t-lg group-hover:bg-indigo-500/20 transition-colors" style={{ height: `${h}%` }} />
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                                {slide.visual === "stats" && (
                                    <>
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="p-4 bg-primary/10 rounded-2xl">
                                                <Zap className="text-primary w-8 h-8" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-950 text-xl tracking-tight">AI Engine v4.0</p>
                                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">System Status: Optimal</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4 mb-8">
                                            {[
                                                { label: "Movement Precision", val: 94 },
                                                { label: "Stability Index", val: 88 },
                                                { label: "Power Output", val: 97 }
                                            ].map((stat, i) => (
                                                <div key={i} className="space-y-2">
                                                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                                                        <span>{stat.label}</span>
                                                        <span>{stat.val}%</span>
                                                    </div>
                                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${stat.val}%` }}
                                                            className="h-full bg-primary"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-4 bg-slate-950 text-white rounded-2xl flex items-center justify-between">
                                            <span className="text-sm font-bold italic">Real-time Form Analysis</span>
                                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                        </div>
                                    </>
                                )}
                                {slide.visual === "community" && (
                                    <>
                                        <div className="mb-10">
                                            <p className="font-bold text-slate-950 text-xl tracking-tight">Global Leaderboard</p>
                                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Season 12: Week 4</p>
                                        </div>
                                        <div className="space-y-3 mb-6">
                                            {[
                                                { name: "Sarah 'The Flash'", points: "12,402", color: "bg-amber-500" },
                                                { name: "Mike D. Power", points: "11,895", color: "bg-slate-300" },
                                                { name: "Luna J. Flow", points: "11,200", color: "bg-orange-400" }
                                            ].map((user, i) => (
                                                <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                                                    <div className={`w-8 h-8 rounded-full ${user.color} flex items-center justify-center text-white font-bold text-xs`}>{i + 1}</div>
                                                    <div className="flex-1">
                                                        <p className="text-sm font-bold text-slate-900">{user.name}</p>
                                                    </div>
                                                    <p className="text-sm font-black text-slate-950">{user.points}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex -space-x-3 justify-center">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                                            ))}
                                            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-950 flex items-center justify-center text-[10px] text-white font-bold">+2.4k</div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute bottom-4 left-0 w-full flex justify-between items-center px-4">
                    <div className="flex gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > currentSlide ? 1 : -1);
                                    setCurrentSlide(i);
                                }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-8 bg-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
                            />
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-slate-200 hover:border-primary hover:text-primary transition-colors bg-white/50 backdrop-blur-sm"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full border border-slate-200 hover:border-primary hover:text-primary transition-colors bg-white/50 backdrop-blur-sm"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
