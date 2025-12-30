import { Home, Dumbbell, BarChart2, Users, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", icon: Home, href: "#" },
        { name: "Workouts", icon: Dumbbell, href: "#workouts" },
        { name: "Stats", icon: BarChart2, href: "#stats" },
        { name: "Community", icon: Users, href: "#community" },
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-lg border-b border-white/10 px-8 py-4 justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Dumbbell className="text-white w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        FitLife
                    </span>
                </div>

                <ul className="flex gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors">
                    Sign In
                </button>
            </nav>

            {/* Mobile Top Bar (Logo only) */}
            <div className="md:hidden fixed top-0 w-full z-50 bg-dark/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Dumbbell className="text-white w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        FitLife
                    </span>
                </div>
            </div>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 w-full z-50 bg-[#0f172a] border-t border-white/10 px-6 py-4 pb-6 safe-area-bottom">
                <ul className="flex justify-between items-center">
                    {navItems.map((item, index) => (
                        <li key={item.name}>
                            <a href={item.href} className="flex flex-col items-center gap-1 group">
                                <motion.div
                                    whileTap={{ scale: 0.8 }}
                                    className={`p-2 rounded-xl transition-colors ${index === 0 ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <item.icon size={24} />
                                </motion.div>
                                <span className={`text-[10px] font-medium ${index === 0 ? 'text-primary' : 'text-gray-500'}`}>
                                    {item.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
