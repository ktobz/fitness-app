import { Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
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
                            <Lock className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-slate-950">Privacy Policy</h1>
                    </div>
                </div>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">1. Information We Collect</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We collect information you provide directly to us, such as your name, email, fitness data, and payment information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">2. How We Use Your Information</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We use the information to provide, improve, and personalize our services, as well as to communicate with you about updates and offers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">3. Data Security</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Your data is protected with industry-standard encryption and security measures to ensure your privacy and safety.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">4. Your Rights</h2>
                        <p className="text-slate-600 leading-relaxed">
                            You have the right to access, modify, or delete your personal information at any time by contacting us.
                        </p>
                    </section>
                </div>

                <p className="text-slate-500 text-center mt-12">Last updated: January 9, 2026</p>
            </div>
        </div>
    );
}
