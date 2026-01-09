import { Watch, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Wearables() {
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
                            <Watch className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-slate-950">Wearables Integration</h1>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Sync your favorite fitness wearables and smartwatches to track your workouts, heart rate, sleep, and more in real-time.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {[
                        { device: "Apple Watch", desc: "Full integration with Apple HealthKit" },
                        { device: "Garmin", desc: "Seamless activity and performance sync" },
                        { device: "Fitbit", desc: "Heart rate and sleep tracking" },
                        { device: "Oura Ring", desc: "Recovery and readiness insights" }
                    ].map((item) => (
                        <div key={item.device} className="p-8 border-2 border-slate-200 rounded-2xl hover:border-primary transition-colors">
                            <h3 className="text-2xl font-black text-slate-950 mb-2">{item.device}</h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <p className="text-slate-500 text-center">Connect your wearables to unlock advanced insights and optimize your training.</p>
            </div>
        </div>
    );
}
