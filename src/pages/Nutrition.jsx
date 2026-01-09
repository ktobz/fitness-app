import { Apple, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Nutrition() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold mb-8">
                    <ArrowLeft className="w-5 h-5" />
                    Back Home
                </Link>

                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-primary/10 rounded-2xl">
                            <Apple className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-slate-950">Nutrition Plans</h1>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Get customized nutrition plans designed by registered dietitians to fuel your workouts and achieve your fitness goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {[
                        { title: "Muscle Gain", desc: "High-protein meal plans for hypertrophy" },
                        { title: "Fat Loss", desc: "Calorie-controlled nutrition strategies" },
                        { title: "Endurance", desc: "Carb-loading and performance nutrition" },
                        { title: "General Wellness", desc: "Balanced macronutrient meal plans" }
                    ].map((plan) => (
                        <div key={plan.title} className="p-8 border-2 border-slate-200 rounded-2xl hover:border-primary transition-colors">
                            <h3 className="text-2xl font-black text-slate-950 mb-2">{plan.title}</h3>
                            <p className="text-slate-600">{plan.desc}</p>
                        </div>
                    ))}
                </div>

                <p className="text-slate-500 text-center">Fuel your body right and maximize your training results with our expert nutrition guidance.</p>
            </div>
        </div>
    );
}
