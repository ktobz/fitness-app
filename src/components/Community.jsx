import { motion } from "framer-motion";
import { Star, ArrowUpRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Marathon Enthusiast",
        text: "The professional form check is like having a private coach 24/7. My running mechanics have never been better.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        stars: 5,
        id: "sarah"
    },
    {
        name: "Marcus Thorne",
        role: "Hybrid Athlete",
        text: "Finally, an app that balances strength and mobility with actual data. The UI is stunning and functional.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        stars: 5,
        id: "marcus"
    },
    {
        name: "Elena Rodriguez",
        role: "Yoga Practitioner",
        text: "The flows are challenging yet mindful. I've integrated this into my daily morning routine perfectly.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        stars: 5,
        id: "elena"
    }
];

export default function Community() {
    return (
        <section id="community" className="py-32 px-6 bg-white relative">
            <div className="container mx-auto">
                <div className="max-w-3xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 shadow-sm" />
                                ))}
                            </div>
                            <span className="text-sm font-black text-slate-950">100,000+ Strong</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-slate-950">
                            The Community of <br />
                            <span className="text-primary italic">High Achievers</span>
                        </h2>

                        <p className="text-slate-500 text-xl font-medium leading-relaxed">
                            Join over a hundred thousand athletes pushing their limits every single day.
                            Your journey is solo, but your support is global.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-slate-50 border border-slate-100 p-10 rounded-[32px] hover:bg-white hover:border-slate-200 hover:shadow-xl transition-all group flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-2xl border-2 border-white shadow-lg group-hover:scale-110 transition-transform" />
                                <div>
                                    <h4 className="font-black text-slate-950">{t.name}</h4>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.stars)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                                ))}
                            </div>

                            <p className="text-slate-600 text-lg font-medium leading-loose italic flex-1">&quot;{t.text}&quot;</p>

                            <div className="mt-8 pt-8 border-t border-slate-200/50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">Share Achievement</span>
                                <ArrowUpRight className="w-5 h-5 text-primary" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <Link to="/discord" className="inline-flex items-center gap-4 group">
                        <div className="w-16 h-16 rounded-3xl bg-slate-950 flex items-center justify-center text-white group-hover:bg-primary transition-colors shadow-2xl">
                            <MessageSquare className="w-7 h-7" />
                        </div>
                        <div className="text-left">
                            <p className="text-xl font-black text-slate-950">Join the Discord</p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-primary transition-colors">Connect with the team</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
