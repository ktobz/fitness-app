import { motion } from "framer-motion";
import { Dumbbell, ArrowRight, Mail, Lock, User, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Signup() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-full h-full -z-10">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl"
            >
                <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] flex flex-col md:flex-row gap-12">
                    {/* Left: Info */}
                    <div className="flex-1 hidden md:flex flex-col justify-between py-4">
                        <div>
                            <Link to="/" className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-10 shadow-lg">
                                <Dumbbell className="text-white w-6 h-6" />
                            </Link>
                            <h2 className="text-4xl font-black tracking-tight text-slate-950 mb-6 leading-tight">
                                Join TOBA-FIT <br />
                                <span className="text-primary italic">1% Club</span>
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    { icon: Target, text: "Personalized Training Plans" },
                                    { icon: User, text: "Track progress with pro-level data" },
                                    { icon: Dumbbell, text: "Join 100k+ global athletes" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="font-bold text-slate-600 group-hover:text-slate-950 transition-colors">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            <p className="text-sm font-medium text-slate-500 italic leading-relaxed">
                                &quot;Joining FitLife was the best decision for my fitness journey. The UI is just the cherry on top.&quot;
                            </p>
                            <p className="mt-4 text-xs font-black uppercase tracking-widest text-slate-950">— Sarah J.</p>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="flex-1">
                        <div className="md:hidden flex flex-col items-center mb-8">
                            <h1 className="text-3xl font-black text-slate-950">Join TOBA-FIT</h1>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="text"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium"
                                        placeholder="Alex Johnson"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="email"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="password"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium"
                                        placeholder="Create password"
                                    />
                                </div>
                            </div>

                            <Button className="w-full py-4 shadow-2xl" variant="primary" size="lg" href="/dashboard">
                                Create Account <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </form>

                        <p className="mt-8 text-center text-slate-500 font-medium text-sm">
                            Already have an account? <Link to="/login" className="text-primary font-black hover:underline italic">Sign In</Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
