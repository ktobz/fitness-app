import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, RefreshCcw, CheckCircle2, AlertTriangle, Play, ChevronLeft, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function PerformanceLab() {
    const [status, setStatus] = useState("idle"); // idle, recording, analyzing, results
    const [formScore, setFormScore] = useState(0);
    const videoRef = useRef(null);
    const [issues, setIssues] = useState([]);

    const startAnalysis = () => {
        setStatus("recording");
        // Simulated countdown or recording phase
        setTimeout(() => {
            setStatus("analyzing");
            setTimeout(() => {
                setStatus("results");
                setFormScore(92);
                setIssues([
                    "Back slightly arched during peak lift",
                    "Keep consistent tempo on descent",
                    "Great knee alignment"
                ]);
            }, 3000);
        }, 5000);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white pb-20">
            {/* Header */}
            <header className="border-b border-white/5 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/dashboard" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold">
                        <ChevronLeft size={20} />
                        <span>Dashboard</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="text-primary" size={20} />
                        <span className="text-xs font-black uppercase tracking-[0.2em]">TOBA-FIT Performance Advisor</span>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 pt-12 max-w-5xl">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Viewport/Camera */}
                    <div className="lg:col-span-3">
                        <div className="relative aspect-video bg-slate-900 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
                            {status === "idle" && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                                        <Camera className="text-white/20 w-10 h-10" />
                                    </div>
                                    <h2 className="text-3xl font-black mb-4">Ready for Form Check?</h2>
                                    <p className="text-slate-400 font-medium mb-10 max-w-sm text-lg">
                                        Position your camera to see your full body. Our analytics engine will track 17 key points in real-time.
                                    </p>
                                    <Button size="lg" onClick={startAnalysis}>
                                        <Zap className="mr-2 fill-current" /> Initialize Scanner
                                    </Button>
                                </div>
                            )}

                            {status === "recording" && (
                                <div className="absolute inset-0 bg-slate-900">
                                    {/* Mock Camera Feed */}
                                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="w-20 h-20 rounded-full border-4 border-white/20 border-t-white animate-spin mb-6" />
                                        <p className="text-2xl font-black italic uppercase tracking-widest">Scanning Performance...</p>
                                    </div>
                                    {/* AI Skeleton Overlay Simulation */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
                                        <path d="M100,100 L150,200 L120,350" stroke="#6366f1" strokeWidth="4" fill="none" className="animate-pulse" />
                                        <circle cx="100" cy="100" r="6" fill="#6366f1" />
                                        <circle cx="150" cy="200" r="6" fill="#6366f1" />
                                        <circle cx="120" cy="350" r="6" fill="#6366f1" />
                                    </svg>
                                </div>
                            )}

                            {status === "analyzing" && (
                                <div className="absolute inset-0 bg-primary flex flex-col items-center justify-center">
                                    <div className="relative">
                                        <div className="w-32 h-32 rounded-full border-8 border-white/20 border-t-white animate-spin" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Activity className="text-white w-10 h-10 animate-bounce" />
                                        </div>
                                    </div>
                                    <p className="mt-8 text-2xl font-black italic uppercase tracking-widest">Calculating Biometrics...</p>
                                </div>
                            )}

                            {status === "results" && (
                                <div className="absolute inset-0">
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 p-12 flex flex-col justify-end">
                                        <div className="flex items-center gap-6 mb-4">
                                            <div className="w-24 h-24 rounded-3xl bg-emerald-500 flex items-center justify-center text-4xl font-black italic">
                                                {formScore}
                                            </div>
                                            <div>
                                                <h3 className="text-4xl font-black tracking-tighter">Elite Form Detect</h3>
                                                <p className="text-emerald-500 font-bold uppercase tracking-widest">Performance Verified</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Controls/Analysis Sidebar */}
                    <div className="lg:col-span-2 space-y-8">
                        <section className="p-8 rounded-[40px] bg-slate-900 border border-white/5">
                            <h3 className="text-xl font-black italic mb-8 flex items-center gap-3">
                                <CheckCircle2 className="text-primary" /> Performance Insights
                            </h3>

                            <div className="space-y-6">
                                {status === "results" ? (
                                    issues.map((issue, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.2 }}
                                            className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            {issue.toLowerCase().includes("great") ? (
                                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0"><CheckCircle2 size={16} /></div>
                                            ) : (
                                                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0"><AlertTriangle size={16} /></div>
                                            )}
                                            <p className="text-sm font-medium leading-relaxed">{issue}</p>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="py-20 text-center opacity-30">
                                        <p className="text-sm font-bold uppercase tracking-widest italic">Waiting for data...</p>
                                    </div>
                                )}
                            </div>
                        </section>

                        <div className="p-8 rounded-[40px] bg-indigo-600 space-y-4 shadow-xl shadow-indigo-500/20">
                            <h4 className="font-black italic text-xs uppercase tracking-widest">Pro Tip</h4>
                            <p className="text-lg font-bold leading-relaxed">
                                &quot;Focus on the eccentric phase of the lift to maximize muscle fiber recruitment.&quot;
                            </p>
                        </div>

                        {status === "results" && (
                            <Button className="w-full py-6 rounded-[30px]" onClick={() => setStatus("idle")}>
                                <RefreshCcw className="mr-2" size={20} /> New Analysis
                            </Button>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
