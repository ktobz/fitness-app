import { Home, Dumbbell, BarChart2, Users, ArrowRight, Zap, Plus, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isOpen, setIsOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState(null);
    const location = useLocation();
    const isLanding = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            if (isLanding) {
                const sections = ["home", "workouts", "stats", "community"];
                const current = sections.find(section => {
                    const el = document.getElementById(section);
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        return rect.top <= 100 && rect.bottom >= 100;
                    }
                    return false;
                });
                if (current) setActiveSection(current);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isLanding]);

    const navItems = [
        { name: "Home", icon: Home, href: "/", id: "home" },
        {
            name: "Programs",
            icon: Dumbbell,
            href: "/workouts",
            id: "workouts",
            subItems: [
                { name: "Pro Training", href: "/workouts?type=pro" },
                { name: "Elite Library", href: "/workouts?type=elite" },
                { name: "Form Lab", href: "/workouts?type=form" }
            ]
        },
        { name: "Create", icon: Plus, href: "/create-workout", id: "create" },
        {
            name: "Performance",
            icon: Zap,
            href: "/performance-lab",
            id: "ai",
            subItems: [
                { name: "AI Coach", href: "/performance-lab?tab=ai" },
                { name: "Stats Lab", href: "/performance-lab?tab=stats" }
            ]
        },
        { name: "Community", icon: Users, href: isLanding ? "#community" : "/#community", id: "community" },
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${scrolled || isOpen ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3' : 'py-4'}`}>
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                            <Dumbbell className="text-white w-6 h-6" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-slate-950">
                            TOBA-<span className="text-primary italic">FIT</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50 backdrop-blur-sm">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${activeSection === item.id && isLanding ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-950'}`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/login" className="text-sm font-bold text-slate-500 hover:text-slate-950 transition-colors">Log In</Link>
                        <Button variant="primary" size="sm" href="/signup">Get Started</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-950 hover:bg-slate-200 transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden bg-white border-t border-slate-100 mt-2"
                        >
                            <div className="flex flex-col px-4 py-3 gap-1">
                                {navItems.map((item) => (
                                    <div key={item.name} className="flex flex-col w-full gap-0">
                                        {item.subItems ? (
                                            <button
                                                type="button"
                                                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 active:bg-slate-100 transition-colors cursor-pointer"
                                                onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <item.icon size={20} className="text-slate-600" />
                                                    <span className="font-semibold text-slate-900">{item.name}</span>
                                                </div>
                                                <ChevronDown
                                                    size={18}
                                                    className={`text-slate-400 transition-transform duration-200 ${expandedItem === item.name ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                        ) : (
                                            <Link
                                                to={item.href}
                                                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 active:bg-slate-100 transition-colors"
                                            >
                                                <item.icon size={20} className="text-slate-600" />
                                                <span className="font-semibold text-slate-900">{item.name}</span>
                                            </Link>
                                        )}

                                        {/* Accordion Content */}
                                        <AnimatePresence mode="wait">
                                            {item.subItems && expandedItem === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pl-11 pr-3 pb-2 flex flex-col gap-1">
                                                        {item.subItems.map((sub) => (
                                                            <Link
                                                                key={sub.name}
                                                                to={sub.href}
                                                                className="py-2.5 px-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded transition-colors"
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}

                                <div className="h-px bg-slate-100 my-3" />

                                <div className="flex flex-col gap-2 pb-2">
                                    <Link to="/login" className="flex items-center justify-center py-2.5 px-4 rounded-lg border border-slate-200 font-semibold text-slate-900 hover:bg-slate-50 active:bg-slate-100 transition-colors text-sm">
                                        Log In
                                    </Link>
                                    <Button variant="primary" size="md" href="/signup" className="w-full rounded-lg text-sm">
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Mobile Bottom Navigation (Optional: Hidden if top menu is open) */}
            {!isOpen && (
                <nav className="lg:hidden fixed bottom-4 left-4 right-4 z-40 bg-slate-950/95 backdrop-blur-xl rounded-2xl border border-white/10 p-2 shadow-2xl">
                    <ul className="flex justify-around items-center">
                        {navItems.map((item) => (
                            <li key={item.name} className="flex-1">
                                <Link to={item.href} className="relative flex flex-col items-center justify-center py-3 px-2 group rounded-lg transition-colors hover:bg-white/5">
                                    <AnimatePresence>
                                        {(activeSection === item.id && isLanding) && (
                                            <motion.div
                                                layoutId="active-pill"
                                                className="absolute inset-0 bg-white/10 rounded-lg"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </AnimatePresence>
                                    <item.icon size={24} className={`relative z-10 transition-colors ${activeSection === item.id && isLanding ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`} />
                                    <span className="text-xs font-bold mt-1 text-slate-400 group-hover:text-slate-200 transition-colors">{item.name.slice(0, 4)}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    );
}
