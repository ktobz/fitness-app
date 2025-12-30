
export default function Footer() {
    return (
        <footer className="bg-dark border-t border-white/10 py-12 px-6 pb-28 md:pb-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    FitLife
                </div>
                <div className="flex gap-6 text-gray-400 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
                <p className="text-gray-600 text-xs">© 2024 FitLife App. All rights reserved.</p>
            </div>
        </footer>
    );
}
