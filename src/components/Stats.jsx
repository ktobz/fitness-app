import { motion } from "framer-motion";

export default function Stats() {
    return (
        <section id="stats" className="py-20 px-6 bg-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Track Your <br /> <span className="text-primary">Every Move</span></h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Detailed analytics help you understand your performance and keep pushing your limits.
                    </p>

                    <div className="space-y-6">
                        {[
                            { label: "Weekly Goal", val: "85%", color: "bg-primary" },
                            { label: "Calories Burned", val: "62%", color: "bg-secondary" },
                            { label: "Mental Focus", val: "94%", color: "bg-green-500" }
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between mb-2 text-sm font-medium">
                                    <span>{stat.label}</span>
                                    <span>{stat.val}</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: stat.val }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className={`h-full ${stat.color} rounded-full`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-white/5 border border-white/10 p-8 rounded-3xl"
                >
                    <div className="flex items-end justify-between h-48 gap-4">
                        {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="w-full bg-gradient-to-t from-primary/20 to-primary rounded-t-lg relative group"
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-dark text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {h * 10}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-gray-500 text-sm">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
