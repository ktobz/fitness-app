import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Safety() {
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
                            <Shield className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-slate-950">Safety & Wellness</h1>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Your health and safety are our top priorities. Learn about our commitment to providing safe fitness guidance.
                    </p>
                </div>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">Certified Trainers</h2>
                        <p className="text-slate-600 leading-relaxed">
                            All our coaches are certified by recognized fitness organizations and have extensive experience in their specialties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">Medical Consultation</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We recommend consulting with your doctor before starting any new fitness program, especially if you have pre-existing conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">Injury Prevention</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Our programs include proper form guidance and progressive overload principles to minimize injury risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">Community Standards</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We maintain strict community standards to ensure a safe, respectful, and supportive environment for all members.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">Emergency Support</h2>
                        <p className="text-slate-600 leading-relaxed">
                            24/7 customer support available to address any concerns or questions about your fitness journey.
                        </p>
                    </section>
                </div>

                <p className="text-slate-500 text-center mt-12">Your wellness is our mission. Stay safe, stay strong.</p>
            </div>
        </div>
    );
}
