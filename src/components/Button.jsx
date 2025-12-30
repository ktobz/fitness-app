import { motion } from "framer-motion";

export default function Button({ children, onClick, variant = "primary", className = "" }) {
    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all shadow-lg active:scale-95";

    const variants = {
        primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-primary/30 hover:shadow-primary/50",
        secondary: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20",
        outline: "border-2 border-primary text-primary hover:bg-primary/10"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
}
