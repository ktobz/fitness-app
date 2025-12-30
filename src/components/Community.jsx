import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Marathon Runner",
        text: "This app completely changed how I train. The analytics are next level!",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Mike Chen",
        role: "Crossfit Athlete",
        text: "The community challenges keep me motivated every single day.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Jessica Ford",
        role: "Yoga Instructor",
        text: "Beautiful interface and the flows are exactly what I need after a long day.",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

export default function Community() {
    return (
        <section id="community" className="py-20 px-6 bg-dark/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Join the Movement</h2>
                    <p className="text-gray-400">See what our community is achieving.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl relative"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary" />
                                <div>
                                    <h4 className="font-bold">{t.name}</h4>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic">"{t.text}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
