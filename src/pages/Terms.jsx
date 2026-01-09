import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
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
                            <FileText className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-5xl font-black text-slate-950">Terms of Service</h1>
                    </div>
                </div>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-slate-600 leading-relaxed">
                            By using TOBA-FIT, you agree to these terms and conditions. If you do not agree, please do not use our service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">2. User Responsibilities</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Users are responsible for maintaining the confidentiality of their accounts and for all activities that occur under their accounts.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">3. Disclaimer of Warranties</h2>
                        <p className="text-slate-600 leading-relaxed">
                            TOBA-FIT is provided on an "as-is" basis. We do not guarantee specific results from using our programs.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">4. Limitation of Liability</h2>
                        <p className="text-slate-600 leading-relaxed">
                            TOBA-FIT shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-950 mb-4">5. Changes to Terms</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We may update these terms at any time. Continued use of the service constitutes acceptance of the updated terms.
                        </p>
                    </section>
                </div>

                <p className="text-slate-500 text-center mt-12">Last updated: January 9, 2026</p>
            </div>
        </div>
    );
}
