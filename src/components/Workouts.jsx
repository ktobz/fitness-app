import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Activity, Flame } from "lucide-react";

const workouts = [
    {
        title: "Strength Training",
        desc: "Build muscle and increase power with our guided weights program.",
        icon: Dumbbell,
        color: "from-blue-500 to-indigo-500",
    },
    {
        title: "HIIT Cardio",
        desc: "Burn fat and improve endurance with high-intensity intervals.",
        icon: Flame,
        color: "from-orange-500 to-red-500",
    },
    {
        title: "Yoga Flow",
        desc: "Enhance flexibility and find your balance with daily flow sessions.",
        icon: Activity,
        color: "from-green-500 to-emerald-500",
    },
    {
        title: "Endurance Run",
        desc: "Train for your first 5K or marathon with audio-guided runs.",
        icon: HeartPulse,
        color: "from-pink-500 to-rose-500",
    },
];

export default function Workouts() {
    return (
        <section id="workouts" className="py-20 px-6 bg-dark/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Explore Workouts</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From heavy lifting to mindful movement, we have the perfect program for your goals.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {workouts.map((workout, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors cursor-pointer group"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${workout.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
                                <workout.icon className="text-white w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{workout.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{workout.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
