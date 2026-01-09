import { HelpCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Help() {
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
                            <HelpCircle className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-slate-950">Help Center</h1>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Find answers to frequently asked questions and get support from our dedicated team.
                    </p>
                </div>

                <div className="space-y-4 mb-12">
                    {[
                        { q: "How do I get started?", a: "Create an account, choose your fitness goals, and start with a beginner program." },
                        { q: "Can I cancel my subscription?", a: "Yes, you can cancel anytime from your account settings with no hidden fees." },
                        { q: "Do you offer refunds?", a: "We offer a 30-day money-back guarantee if you're not satisfied." },
                        { q: "How often are programs updated?", a: "New programs are added weekly, and existing ones are updated monthly." }
                    ].map((item, i) => (
                        <div key={i} className="p-6 border-2 border-slate-200 rounded-xl">
                            <h3 className="text-xl font-bold text-slate-950 mb-2">{item.q}</h3>
                            <p className="text-slate-600">{item.a}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-primary/10 border-2 border-primary rounded-xl p-8 text-center">
                    <p className="text-slate-700 font-bold mb-4">Can't find what you're looking for?</p>
                    <a href="mailto:support@toba-fit.com" className="text-primary font-bold hover:underline">Contact our support team</a>
                </div>
            </div>
        </div>
    );
}
