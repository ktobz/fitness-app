import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Dumbbell } from 'lucide-react';

export default function AuthCallback() {
    const navigate = useNavigate();
    const { user, loading } = useAuth();
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleCallback = async () => {
            // Wait a moment for auth state to update
            const timer = setTimeout(() => {
                if (user) {
                    console.log('Auth callback: User authenticated, redirecting to dashboard');
                    navigate('/dashboard', { replace: true });
                } else if (!loading) {
                    // Give it another moment
                    setTimeout(() => {
                        if (user) {
                            navigate('/dashboard', { replace: true });
                        }
                    }, 500);
                }
            }, 1000);

            return () => clearTimeout(timer);
        };

        handleCallback();
    }, [user, loading, navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center p-6">
            <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Dumbbell className="text-primary w-10 h-10" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">Completing Sign In...</h1>
                <p className="text-slate-400">Please wait while we authenticate your account</p>
                {error && (
                    <p className="text-rose-500 mt-4 font-semibold">{error}</p>
                )}
            </div>
        </div>
    );
}
