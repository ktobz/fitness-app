import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize auth state - check for existing session
        const initializeAuth = async () => {
            try {
                // Get current session (persisted by Supabase)
                const { data: { session } } = await supabase.auth.getSession();
                console.log('Session restored:', session?.user?.email);
                setSession(session);
                setUser(session?.user ?? null);
            } catch (error) {
                console.error('Error initializing auth:', error);
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();

        // Set up auth state listener for real-time updates
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                console.log('Auth state changed:', event, session?.user?.email);
                setSession(session);
                setUser(session?.user ?? null);
                setLoading(false);
            }
        );

        return () => {
            subscription?.unsubscribe();
        };
    }, []);

    const signUp = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${window.location.origin}/dashboard`,
                }
            });
            
            if (error) {
                console.error('Sign up error:', error);
                return { data, error };
            }
            
            console.log('Sign up successful:', data.user?.email);
            return { data, error };
        } catch (error) {
            console.error('Unexpected sign up error:', error);
            return { data: null, error };
        }
    };

    const signIn = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            
            if (error) {
                console.error('Sign in error:', error);
                return { data, error };
            }
            
            if (data?.session) {
                console.log('Sign in successful:', data.user?.email);
                setSession(data.session);
                setUser(data.session.user);
            }
            
            return { data, error };
        } catch (error) {
            console.error('Unexpected sign in error:', error);
            return { data: null, error };
        }
    };

    const signInWithGoogle = async () => {
        try {
            console.log('Starting Google OAuth flow...');
            
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    }
                }
            });
            
            if (error) {
                console.error('Google sign in error:', error);
                return { data, error };
            }
            
            console.log('Google sign in initiated');
            return { data, error };
        } catch (error) {
            console.error('Unexpected Google sign in error:', error);
            return { data: null, error };
        }
    };

    const signOut = async () => {
        try {
            console.log('Signing out...');
            const { error } = await supabase.auth.signOut();
            
            if (error) {
                console.error('Sign out error:', error);
                return { error };
            }
            
            setSession(null);
            setUser(null);
            navigate('/');
            console.log('Sign out successful');
            return { error: null };
        } catch (error) {
            console.error('Unexpected sign out error:', error);
            return { error };
        }
    };

    const value = {
        signUp,
        signIn,
        signInWithGoogle,
        signOut,
        user,
        session,
        loading,
        isAuthenticated: !!user && !!session
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
