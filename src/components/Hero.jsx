import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 md:pt-0">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                        <span className="text-secondary text-sm font-semibold tracking-wide uppercase">
                            🚀 #1 AI Fitness App
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        Transform Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Body & Mind
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                        Personalized workouts, real-time tracking, and a community that pushes you forward. Start your journey today.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <Button>Start Free Trial</Button>
                        <Button variant="secondary">View Demo</Button>
                    </div>

                    <div className="mt-12 flex items-center justify-center md:justify-start gap-6 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold">10k+</span> Users
                        </div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full" />
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold">4.9</span> Rating
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-all duration-500">
                        {/* Mock UI Card */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gray-700 animate-pulse" />
                            <div className="flex-1">
                                <div className="h-4 w-32 bg-gray-700/50 rounded mb-2" />
                                <div className="h-3 w-20 bg-gray-700/30 rounded" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-24 w-full bg-gray-700/20 rounded-xl" />
                            <div className="grid grid-cols-2 gap-3">
                                <div className="h-20 bg-primary/20 rounded-xl" />
                                <div className="h-20 bg-secondary/20 rounded-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Floating badges */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -top-10 -right-10 bg-dark border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">🔥</div>
                        <div>
                            <p className="text-xs text-gray-400">Streak</p>
                            <p className="font-bold">12 Days</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
