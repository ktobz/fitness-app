import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Button({ children, onClick, href, variant = "primary", className = "", size = "md" }) {
    const baseStyles = "inline-flex items-center justify-center rounded-2xl font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-7 py-3.5 text-base",
        lg: "px-10 py-5 text-lg"
    };

    const variants = {
        primary: "bg-slate-900 text-white shadow-xl shadow-slate-200 hover:bg-slate-800 hover:-translate-y-0.5",
        secondary: "bg-white border border-slate-200 text-slate-900 shadow-sm hover:bg-slate-50 hover:-translate-y-0.5",
        accent: "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5",
        ghost: "bg-transparent text-slate-600 hover:bg-slate-100",
        outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
    };

    const content = (
        <motion.span
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2"
        >
            {children}
        </motion.span>
    );

    if (href) {
        return (
            <Link
                to={href}
                className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
            >
                {content}
            </Link>
        );
    }

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {content}
        </motion.button>
    );
}
