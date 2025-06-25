import React, { createContext, useEffect, useState } from "react";
import { auth, gAuthProvider } from "../utilities/firebase_setup";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleCreateUser = async ({
        displayName,
        email,
        password,
        photoURL,
    }) => {
        setError(null);
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await updateProfile(userCredential.user, {
                displayName,
                photoURL,
            });
            await auth.currentUser.reload();
            setUser(auth.currentUser);
        } catch (error) {
            setError({ code: error.code, message: error.message });
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const updateProfileInfo = async (userInfo) => {
        setError(null);
        setLoading(true);
        try {
            await updateProfile(auth.currentUser, userInfo);
            await auth.currentUser.reload();
            setUser(auth.currentUser);
        } catch (error) {
            setError({ code: error.code, message: error.message });
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const handleEmailSignIn = async (email, password) => {
        setError(null);
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            await auth.currentUser.reload();
            setUser(auth.currentUser);
        } catch (error) {
            setError({ code: error.code, message: error.message });
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async (email) => {
        setError(null);
        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            setError({ code: error.code, message: error.message });
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setError(null);
        setLoading(true);
        try {
            await signInWithPopup(auth, gAuthProvider);
            await auth.currentUser.reload();
            setUser(auth.currentUser);
        } catch (error) {
            setError({ code: error.code, message: error.message });
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        setError(null);
        setLoading(true);
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            setError({ code: error.code, message: error.message });
        } finally {
            setLoading(false);
        }
    };

    const authContextValue = {
        user,
        error,
        loading,
        setError,
        setLoading,
        handleCreateUser,
        handleEmailSignIn,
        handleGoogleSignIn,
        handleSignOut,
        updateProfileInfo,
        handleForgotPassword,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
}
