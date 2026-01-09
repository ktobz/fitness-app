import { Dumbbell, Instagram, Twitter, Youtube, ArrowRight, MessageCircle, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    const sections = [
        {
            title: "Product",
            links: [
                { name: "Programs", href: "/programs" },
                { name: "Live Coaching", href: "/coaching" },
                { name: "Nutrition", href: "/nutrition" },
                { name: "Wearables", href: "/wearables" }
            ]
        },
        {
            title: "Community",
            links: [
                { name: "Discord", href: "/discord" },
                { name: "Teams", href: "/teams" },
                { name: "Challenges", href: "/challenges" },
                { name: "Leaderboard", href: "/leaderboard" }
            ]
        },
        {
            title: "Support",
            links: [
                { name: "Help Center", href: "/help" },
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms" },
                { name: "Safety", href: "/safety" }
            ]
        }
    ];

    return (
        <footer className="bg-slate-950 pt-24 pb-12 px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-8 group cursor-pointer w-fit">
                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center transition-transform group-hover:scale-110">
                                <Dumbbell className="text-slate-950 w-6 h-6" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">
                                TOBA-<span className="text-primary italic">FIT</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-lg font-medium leading-[1.8] max-w-sm mb-10">
                            The intelligent health platform that adapts to your life, your goals, and your unique body.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                                { Icon: MessageCircle, href: "https://discord.com", label: "Discord" },
                                { Icon: Youtube, href: "https://youtube.com", label: "YouTube" }
                            ].map(({ Icon, href, label }, i) => (
                                <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {sections.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white font-black italic uppercase tracking-[0.2em] text-xs mb-10">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-slate-500 hover:text-white font-bold transition-all flex items-center gap-1 group">
                                            {link.name}
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">© 2026 TOBA-FIT. All rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#lang" className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 underline underline-offset-4 decoration-white/20 hover:decoration-white">
                            English (US)
                        </a>
                        <a href="#status" className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" /> Systems Operational
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
