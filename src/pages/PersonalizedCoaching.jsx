import { Zap, ArrowLeft, TrendingUp, Zap as ZapIcon, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function PersonalizedCoaching() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-5xl">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold mb-8">
                    <ArrowLeft className="w-5 h-5" />
                    Back Home
                </Link>

                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-primary/10 rounded-2xl">
                            <Zap className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-slate-950">Personalized Power Coaching</h1>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Experience elite-level coaching tailored to your specific goals, fitness level, and lifestyle. Our certified coaches provide real-time feedback and personalized guidance.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            icon: Target,
                            title: "Goal-Oriented Programs",
                            desc: "Custom training plans designed specifically for your fitness goals"
                        },
                        {
                            icon: TrendingUp,
                            title: "Real-Time Progress Tracking",
                            desc: "Monitor your improvements with detailed analytics and insights"
                        },
                        {
                            icon: ZapIcon,
                            title: "Expert Guidance",
                            desc: "Direct access to certified strength and conditioning coaches"
                        }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 border-2 border-slate-200 rounded-2xl hover:border-primary hover:shadow-lg transition-all">
                            <feature.icon className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-xl font-black text-slate-950 mb-2">{feature.title}</h3>
                            <p className="text-slate-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-slate-100 rounded-3xl p-12 mb-12">
                    <h2 className="text-3xl font-black text-slate-950 mb-6">How It Works</h2>
                    <div className="space-y-6">
                        {[
                            { step: 1, title: "Assessment", desc: "We evaluate your current fitness level, goals, and any limitations" },
                            { step: 2, title: "Personalization", desc: "Our coaches create a custom program tailored to your needs" },
                            { step: 3, title: "Coaching", desc: "Receive weekly sessions with real-time feedback and form checks" },
                            { step: 4, title: "Optimization", desc: "Continuously refine your program based on progress and feedback" }
                        ].map((item) => (
                            <div key={item.step} className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-black">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-950 text-lg">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link to="/coaching" className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                        Start Your Coaching Journey
                    </Link>
                </div>
            </div>
        </div>
    );
}
