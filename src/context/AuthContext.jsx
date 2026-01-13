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
        // Check active sessions and sets the user
        const checkSession = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                setSession(session);
                setUser(session?.user ?? null);
                setLoading(false);
            } catch (error) {
                console.error('Error checking session:', error);
                setLoading(false);
            }
        };

        checkSession();

        // Listen for changes on auth state (logged in, signed out, etc.)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        });

        return () => subscription?.unsubscribe();
    }, []);

    const signUp = async (email, password) => {
        try {
            const response = await supabase.auth.signUp({ email, password });
            return response;
        } catch (error) {
            return { error };
        }
    };

    const signIn = async (email, password) => {
        try {
            const response = await supabase.auth.signInWithPassword({ email, password });
            if (!response.error && response.data?.session) {
                setSession(response.data.session);
                setUser(response.data.session.user);
            }
            return response;
        } catch (error) {
            return { error };
        }
    };

    const signOut = async () => {
        try {
            await supabase.auth.signOut();
            setSession(null);
            setUser(null);
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const response = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${window.location.origin}/dashboard`
                }
            });
            return response;
        } catch (error) {
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
        isAuthenticated: !!user
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
